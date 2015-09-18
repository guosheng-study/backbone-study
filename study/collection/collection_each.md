#对集合进行遍历

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
    age: 12
}, {
    id: 'cc3',
    name: 'jone',
    age: 19
}, {
    id: 'cc4',
    name: 'jack',
    age: 12
}]);

//each
invoiceItemCollection.each(function (model, index, list) {
    console.log(model.get('name'));
});

//every
isAllThan18 = invoiceItemCollection.every(function (model, index, list) {
    return model.get('age') > 18;
});
console.log(isAllThan18); //=>false;

//some
hasSomeThan18 = invoiceItemCollection.some(function (model, index, list) {
    return model.get('age') > 18;
});
console.log(hasSomeThan18); //=>true;

//map
ages = invoiceItemCollection.map(function (model, index, list) {
    return model.get('age');
});
console.log(ages); //=> [18, 12, 19, 12]
```