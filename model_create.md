###定义一个模型
```js
var InvoiceItemModel = Backbone.Model.extend({});
```

###模型实例
```js
var invoiceItemModel = new InvoiceItemModel({
  price : 22
});
```

<http://jsfiddle.net/gs_jquery/1e920atd/>

###复制模型
```js
var newModel = invoiceItemModel.clone();
console.log(newModel);
```
