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

var result = invoiceItemCollection.where({
    age: 12
});

var resultCollection = new InvoiceItemCollection(result);
console.log(resultCollection.pluck('id'));