# popup
最小巧的移动端弹窗组件，toast、alert、confirm，使用原生js，不依赖任何类库，不需要引入任何css文件，只有一个js文件

**组件设计为单例模式，在一个打开状态，再次打开另一个，会自动关闭上一个**

## 1. toast
```
let toast = new ToastClass();
```

 - 方法

      方法名    | 说明
      :----:  | :----:
      show    | 打开方法
      hide  | 关闭方法
      onShow | 打开时回调（全局）
      onHide | 关闭时回调（全局）

### toast打开方法
```
toast.show(options)
```

- options

     | 参数    | 类型   |  默认值  | 说明|
     | :----:  | :----:  | :----: |:----: |
     | text    | String | 正在加载 | 展示文本|
     | loading  | Boolean |  false  | 是否展示loading图标|
     | duration | Number  |  无  | 持续时间（ms）|
     | onShow | Function  |  无  | 打开时回调|
     | onHide | Function  |  无  | 关闭时回调|

- 示例 （可参考toast.html）
```
toast.show({
    text: '正在加载',
    duration: 2000,
    onShow: function(){
        console.log('打开了toast')
    }
})
```

### toast关闭方法
```
toast.hide()
```

### 在线示例
[toast展示](http://works.lingdublog.cc/popup/toast.html)


## 2. alert
```
let alert = new AlertClass();
```

 - 方法

      方法名    | 说明
      :----:  | :----:
      show    | 打开方法
      hide  | 关闭方法
      onShow | 打开时回调（全局）
      onHide | 关闭时回调（全局）

### alert打开方法
```
alert.show(options)
```

- options

     | 参数    | 类型   |  默认值  | 说明|
     | :----:  | :----:  | :----: |:----: |
     | title    | String | 无 | 标题|
     | content  | String | 无 | 内容|
     | btnText  | String |  确定 | 按钮文本|
     | onShow | Function  |  无  | 打开时回调|
     | onHide | Function  |  无  | 关闭时回调|

- 示例 （可参考alert.html）
```
alert.show({
    title: '提示标题',
    content: '提示内容',
    onShow: function(){
        console.log('打开了alert')
    }
})
```

### alert关闭方法
```
alert.hide()
```

- 在线示例
[alert展示](http://works.lingdublog.cc/popup/alert.html)


## 3. confirm
```
let confirm = new ConfirmClass();
```

 - 方法

      方法名    | 说明
      :----:  | :----:
      show    | 打开方法
      hide  | 关闭方法
      onShow | 打开时回调（全局）
      onHide | 关闭时回调（全局）

### confirm打开方法
```
confirm.show(options)
```

- options

     | 参数    | 类型   |  默认值  | 说明|
     | :----:  | :----:  | :----: |:----: |
     | title    | String | 无 | 标题|
     | content  | String | 无 | 内容|
     | btns  | Array |  见下方btns | 按钮文本/css类|
     | onShow | Function  |  无  | 打开时回调|
     | onHide | Function  |  无  | 关闭时回调|

- btns 默认值：[{text: '确定', class: 'confirm'}, {text: '取消', class: 'cancel'}]

     | 参数    | 类型   |  默认值  | 说明|
     | :----:  | :----:  | :----: |:----: |
     | text | String | 确定、取消  | 按钮文本|
     | class | String | confirm、cancel | 按钮css类|
     | callback | Function | 无 | 按钮点击回调|

- 示例 （可参考confirm.html）
```
confirm.show({
    title: '提示标题',
    content: '提示内容',
    btns: [{
        callback: function(instance){
            instance.close = false;
            console.log('点击了确定按钮，但不会关闭弹窗');
        }
    }, {
        text: '不需要',
        callback: function(){
            console.log('点击了不需要按钮');
        }
    }],
    onShow: function(){
        console.log('打开了confirm')
    }
})
```

### confirm关闭方法
```
confirm.hide()
```

- 在线示例
[confirm展示](http://works.lingdublog.cc/popup/confirm.html)
