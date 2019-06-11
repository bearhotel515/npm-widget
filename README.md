# npm-widget
定义一个自己的js library类库,使用webpack 打包。

# 安装
npm install

# 构建 
npm run build

# 使用

## 方法1、页面直接引用js文件
```
<script src="npm-widget.js"></script>
```
## js code
 直接调用方法
 ```
 widget.print('test')
 widget.getArr()
 ```

## 例子
```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">
  <title>npm-widget</title>
  <script type="text/javascript" src="./dist/widget.js"></script>
</head>
<body>
</body>
<script>
  widget.print('test')
  const arr =  widget.getArr()
  console.log(JSON.stringify(arr,null,2))
</script>
</html> 
```
## 方法2、node安装
```
npm i git+https://github.com/bearhotel515/npm-widget.git 
```
## 例子
```
import widget from 'widget'
widget.print('test widget')
```