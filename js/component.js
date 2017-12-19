window.AlertClass = AlertClass;
window.ConfirmClass = ConfirmClass;
window.ToastClass = ToastClass;


// 组件样式，引入js自动引入
window.onload = function(){
  let componentStyle = document.createElement('style');
  let componentStyleHtml = '.component_mask{' +
    'position: fixed;z-index: 9998;width: 100%;height: 100%;top: 0;left: 0;' +
    'background: rgba(0,0,0,.3);}' +
    '.component_toast {' +
    'position: relative;top: 30%;margin: 0 auto;min-width: 200px;width: 50%;max-width: 300px;' +
    'padding: 10px;background: #fff;text-align: center;border-radius: 5px;}' +
    '.component_dialog {' +
    'position: fixed;z-index: 9999;min-width: 300px;top: 50%;left: 50%;' +
    '-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background-color: #fafafc;' +
    'text-align: center;border-radius: 3px;}' +
    '.component_dialog_confirm .component_dialog .component_dialog_hd {' +
    'padding: 1.2em 20px .5em}' +
    '.component_dialog_confirm .component_dialog .component_dialog_bd {' +
    'text-align: left}' +
    '.component_dialog_hd {' +
    'padding: 1.2em 20px .5em;}' +
    '.component_dialog_title {' +
    'font-weight: 400;font-size: 17px;}' +
    '.component_dialog_bd {' +
    'padding: 0 20px;font-size: 15px;color: #888;word-wrap: break-word;word-break: break-all;}' +
    '.component_dialog_ft {' +
    'position: relative;line-height: 42px;margin-top: 20px;font-size: 17px;display: -webkit-box;' +
    'display: -webkit-flex;display: -ms-flexbox;display: flex;}' +
    '.component_dialog_ft .component_btn {' +
    'display: block;-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;color: #999;' +
    'text-decoration: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);border-left: 1px solid #d5d5d6;}' +
    '.component_dialog_ft .component_btn:first-child{border: none;}'+
    '.component_dialog_ft .component_btn:active {' +
    'background-color: #eee;}' +
    '.component_dialog_ft:after {content: " ";position: absolute;left: 0;top: 0;width: 100%;' +
    'height: 1px;border-top: 1px solid #d5d5d6;color: #d5d5d6;-webkit-transform-origin: 0 0;' +
    'transform-origin: 0 0;-webkit-transform: scaleY(.5);transform: scaleY(.5)}' +
    '.component_dialog_ft .confirm{' +
    'color: #3cc51f;}'+
    '.component_dialog_ft .cancel{' +
    'color: #E42626;}'+
    '.component_btn_dialog.default {color: #353535}.component_btn_dialog.primary {color: #0bb20c}';
  componentStyle.innerHTML = componentStyleHtml;
  document.body.appendChild(componentStyle);
};


// Toast弹窗
function ToastClass () {}

ToastClass.prototype.show = function (options) {
  if (this.instance) {
    this.hide ();
  }
  ToastClass.instance = this;
  let text = options.text || '正在加载';
  let duration = options.duration;
  this.showFn = options.onShow;
  this.hideFn = options.onHide;
  let loading = options.loading;

  let toast = document.createElement ('div');
  let innerHTMLArr = ['<div class="component_mask"><div class="component_toast">'];
  if (loading) {
    innerHTMLArr.push('<div><img src="data:image/gif;base64,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" ' +
      'width="26%" /></div>');
  }
  innerHTMLArr.push('<div style="font-size: 16px;margin:10px 0;">' + text + '</div></div></div>');
  toast.innerHTML = innerHTMLArr.join ('');
  document.body.appendChild (toast);

  // 开启事件
  this.showFn && this.showFn();
  // 如果有全局事件，则执行
  this.onShow && this.onShow();

  this.instance = toast;

  if (duration) {
    setTimeout (function () {
      ToastClass.instance.hide ();
    }, duration);
  }

};

ToastClass.prototype.hide = function () {
  let instance = this.instance;
  if (instance && instance.parentNode) {
    instance.parentNode.removeChild(instance);
  }

  // 关闭事件
  this.hideFn && this.hideFn();
  // 如果有全局事件，则执行
  this.onHide && this.onHide();
};


// 确认弹窗
function ConfirmClass () {}

// 确认弹窗
ConfirmClass.prototype.show = function (options) {
  if (this.instance) {
    this.hide ();
  }
  let defaultBtns = [{text: '确定', class: 'confirm'}, {text: '取消', class: 'cancel'}];
  ConfirmClass.instance = this;
  let title = options.title || '';
  let content = options.content || '';
  this.hideFn = options.onHide;
  this.showFn = options.onShow;
  this.close = true;

  // 如果配置项没有进行配置则使用默认的
  if(!!options.btns){
    let tempBtns = options.btns.slice(0, 2);
    defaultBtns.forEach(function(v, i){
      tempBtns[i] = tempBtns[i] || v;
      for(let j in v){
        tempBtns[i][j] = tempBtns[i][j] || v[j];
      }
    });
    this.btns = tempBtns.concat(options.btns.slice(2));
  }else{
    this.btns = defaultBtns;
  }

  let confirm = document.createElement ('div');
  let btnHtml = '';
  this.btns.forEach(function (v, i){
    btnHtml += '<a class="component_btn '+ (v.class||'') +'" style="cursor: pointer;" onclick="ConfirmClass.btnClick('+ i +', event)">'+ (v.text||'确定') +'</a>'
  });
  confirm.innerHTML = ['<div class="component_mask">',
    '<div class="component_dialog" id="ConfirmClass_ComfirmArea">',
    '<div class="component_dialog_hd"><strong class="component_dialog_title">' + title + '</strong></div>',
    '<div class="component_dialog_bd">' + content + '</div>',
    '<div class="component_dialog_ft">',
    btnHtml,
    '</div></div></div>'].join ('');

  document.body.appendChild (confirm);

  // 开启事件
  this.showFn && this.showFn();
  // 如果有全局事件，则执行
  this.onShow && this.onShow();

  this.instance = confirm;

};

ConfirmClass.btnClick = function (index){
  let instance = ConfirmClass.instance;
  if (typeof instance.btns[index].callback === 'function') {
    instance.btns[index].callback(instance);
  }
  if (instance.close) {
    instance.hide();
  }else{
    instance.close = true;
  }

};

ConfirmClass.prototype.hide = function () {
  let instance = this.instance;
  if (instance && instance.parentNode) {
    instance.parentNode.removeChild(instance);
  }

  // 关闭事件
  this.hideFn && this.hideFn();
  // 如果有全局事件，则执行
  this.onHide && this.onHide();
};


// alert弹窗
function AlertClass () {}


AlertClass.prototype.show = function (options) {
  if (this.instance) {
    this.hide ();
  }
  AlertClass.instance = this;
  let title = options.title || '';
  let content = options.content || '';
  let btnText = options.btnText || '确定';
  this.hideFn = options.onHide;
  this.showFn = options.onShow;

  let alert = document.createElement ('div');
  alert.innerHTML = ['<div class="component_mask">',
    '<div class="component_dialog">',
    '<div class="component_dialog_hd"><strong class="component_dialog_title">'+title+'</strong></div>',
    '<div class="component_dialog_bd">'+content+'</div>',
    '<div class="component_dialog_ft">',
    '<a class="component_btn component_btn_dialog primary" onclick="AlertClass.btnClick()">'+btnText+'</a>',
    '</div></div></div>'].join('');

  document.body.appendChild (alert);

  // 开启事件
  this.showFn && this.showFn();
  // 如果有全局事件，则执行
  this.onShow && this.onShow();

  this.instance = alert;
};

AlertClass.btnClick = function (){
  let instance = AlertClass.instance;
  instance.hide();
};

AlertClass.prototype.hide = function () {
  let instance = this.instance;
  if (instance && instance.parentNode) {
    instance.parentNode.removeChild(instance);
  }
  // 关闭事件
  this.hideFn && this.hideFn();
  // 如果有全局事件，则执行
  this.onHide && this.onHide();
};
