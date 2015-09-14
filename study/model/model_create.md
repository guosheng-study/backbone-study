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

###设置模型默认的属性值
```js
//定义一个数据模型
var InvoiceItemModel1 = Backbone.Model.extend({});

//定义一个数据模型并设置默认值
var InvoiceItemModel2 = Backbone.Model.extend({
    defaults: {
        price: 10
    }
});
var invoiceItemModel1 = new InvoiceItemModel1();
var invoiceItemModel2 = new InvoiceItemModel2({});
console.log(invoiceItemModel1);
console.log(invoiceItemModel2);
```
<http://jsfiddle.net/gs_jquery/45wLggra/>


###initialize设置模型默认的属性值
```js
//定义一个数据模型并设置默认值
var InvoiceItemModel = Backbone.Model.extend({
    defaults: {
        price: 10
    },
    initialize: function () {
        this.set('name', 'kyo');
    }
});
var invoiceItemModel = new InvoiceItemModel();
console.log(invoiceItemModel);
```
<http://jsfiddle.net/gs_jquery/wcm9g9z1/>
