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
}, {
    id: 'cc4',
    name: 'jack',
    age: 20
}]);

//删除一个模型
invoiceItemCollection.remove('cc1');
console.log(invoiceItemCollection);

//也可以删除多个
invoiceItemCollection.remove(['cc2', 'cc3']);
console.log(invoiceItemCollection);