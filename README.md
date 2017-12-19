# popup
基于WeUI的移动端弹窗插件，toast、alert、confirm，使用原生js，不依赖任何类库，只有一个js文件

## toast
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

- 示例
```
toast.show({
    text: '正在加载',
    duration: 2000,
    onShow: function(){
        console.log('打开了toast')
    }
})
```
