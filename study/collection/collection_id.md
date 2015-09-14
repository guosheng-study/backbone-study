#使用ID从集合中获取模型

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

//取值的时候指定id
var model = invoiceItemCollection.get('cc2');
console.log(model.get('name'));
```
