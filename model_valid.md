#模型属性验证
```js
var InvoiceItemModel = Backbone.Model.extend({
    //验证
    validate: function (attrs) {
        if (attrs.price <= 0) {
            return "price fail";
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


验证错误处理
```js
var InvoiceItemModel = Backbone.Model.extend({
    //验证
    validate: function (attrs) {
        if (attrs.price <= 0) {
            return "price fail";
        }
    }
});

//实例化
var invoiceItemModel = new InvoiceItemModel();

//验证错误处理
invoiceItemModel.on('invalid', function (model, error) {
    console.log(error);
});

//set的时候正进验证
invoiceItemModel.set('price', -1, {
    validate: true
});
```
<http://jsfiddle.net/gs_jquery/e45hyzz5/>

//手动触发验证
```js
var InvoiceItemModel = Backbone.Model.extend({
    //验证
    validate: function (attrs) {
        if (attrs.price <= 0) {
            return "price fail";
        }
    }
});

//实例化
var invoiceItemModel = new InvoiceItemModel({
    price: -1
});

//手动触发验证
var isValid = invoiceItemModel.isValid();
console.log(isValid);
```
<http://jsfiddle.net/gs_jquery/qdxm0hsm/>
