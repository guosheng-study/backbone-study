#为集合添加一个模型

```js
var InvoiceItemModel = Backbone.Model.extend({});

var InvoiceItemCollection = Backbone.Collection.extend({
    model: InvoiceItemModel
});

//创建集合，并指定id
var invoiceItemCollection = new InvoiceItemCollection([{
    id: 'cc1',
    name: 'kyo',
    age: 18
}, {
    id: 'cc2',
    name: 'lily',
    age: 15
}, {
    id: 'cc3',
    name: 'jone',
    age: 19
}]);

//添加一个模型
invoiceItemCollection.add({
    id: 'cc4',
    name: 'kit',
    age: 22
});

console.log(invoiceItemCollection.at(3).get('name'));

//添加再顶部模型
invoiceItemCollection.add({
    name: 'fast',
    age: 99
}, {
    at: 0
});

console.log(invoiceItemCollection.at(0).get('name'));

//也可以添加数组
invoiceItemCollection.add([{
    name: 'xiaoming',
    age: 30
}, {
    name: 'baby',
    age: 26
}]);

console.log(invoiceItemCollection.length);
```
