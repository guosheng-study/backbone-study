#模型标识符
```js
//定义一个数据模型并设置默认值
var InvoiceItemModel = Backbone.Model.extend();

//实例化
var invoiceItemModel = new InvoiceItemModel();

//设置id
invoiceItemModel.id = _.now();

//取id
var id = invoiceItemModel.id;
console.log(id);
```
<http://jsfiddle.net/gs_jquery/ghx75pmz/>
