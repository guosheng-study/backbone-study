#创建集合

```js
var InvoiceItemModel = Backbone.Model.extend({});

var InvoiceItemCollection = Backbone.Collection.extend({
    model: InvoiceItemModel
});

//创建集合
var invoiceItemCollection = new InvoiceItemCollection([{
    name: 'kyo',
    age: 18
}, {
    name: 'lily',
    age: 15
}, {
    name: 'jone',
    age: 19
}]);


var length = invoiceItemCollection.length;
console.log(length);

var model = invoiceItemCollection.at(2);
console.log(model.get('age'));
```
