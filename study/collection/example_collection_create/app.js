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

console.log(invoiceItemCollection);