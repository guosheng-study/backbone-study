#模型属性验证
```js
var InvoiceItemModel = Backbone.Model.extend({
    //验证
    validate: function (attrs) {
        if (attrs.price <= 0) {
            console.log("false");
        }
    }
});

//实例化
var invoiceItemModel = new InvoiceItemModel();

//set的时候正进验证
invoiceItemModel.set('price', -1, {
    validate: true
});

var price = invoiceItemModel.get('price');
console.log(price);
```
