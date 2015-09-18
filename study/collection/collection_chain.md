#集合链式操作

```js
var InvoiceItemModel = Backbone.Model.extend({});

var InvoiceItemCollection = Backbone.Collection.extend({
    model: InvoiceItemModel
});

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

//链接操作
var res = invoiceItemCollection
    .chain()
    .map(function (model, index, list) {
        return model.get('age');
    })
    .reduce(function (memo, value, key, list) {
        return memo + value;
    }, 0)
    .value();

console.log(res);
```