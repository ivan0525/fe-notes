# html相关

## 1. viewport
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
// width    设置viewport宽度，为一个正整数，或字符串‘device-width’
// device-width  设备宽度
// height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
// initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
// minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
// maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
// user-scalable    是否允许手动缩放
```
> 怎样处理 移动端 1px 被 渲染成 2px问题

- 局部处理：
    - `meta`标签中的`viewport`属性，`initial-scale`设置为1；
    - `rem`(像素)按照设计图来，再利用`transform: scale(0.5)`将其缩小一倍；
- 全局处理：
    - `mate`标签中的`viewport`属性 ，`initial-scale`设置为 0.5；
    - `rem`（像素）按照设计图来；

## 2. HTML5 为什么只需要写 <!DOCTYPE HTML>
> 文档类型定义（DTD）可定义合法的XML文档构建模块。它使用一系列合法的元素来定义文档的结构。

DTD 可被成行地声明于 XML 文档中，也可作为一个外部引用。
- `HTML5`不基于`SGML`，因此不需要对`DTD`进行引用，但是需要`doctype`来规范浏览器的行为;
- 而`HTML4.0.1`需要基于`SGML`，因此需要引用`DTD`，才能告知浏览器文档所使用的文档类型；

## 3. HTML全局属性(global attribute)有哪些
- `class`：为`HTML`元素设置类标识；
- `data-*`：为元素增加自定义属性；
- `draggable`：设置元素是否可拖拽；
- `id`：元素id，文档内唯一；
- `lang`：元素内容的语言；
- `style`：行内`css`样式；
- `title`：包含表示与其所属元素相关信息的文本；
- `accesskey`：提供了为当前元素生成快捷键的方式。属性值必须包含一个可打印字符。
