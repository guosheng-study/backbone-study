#对集合进行排序

```js
collection.comparator = 'age'; //设定排序标准
collection.sort(); //进行排序
```


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
}, {
    id: 'cc4',
    name: 'jack',
    age: 1
}]);

//pluck是map的简化版，取出数组某属性值，返回数组
console.log(invoiceItemCollection.pluck('age'));

//按age来排
invoiceItemCollection.comparator = 'age';
invoiceItemCollection.sort();

console.log(invoiceItemCollection.pluck('age'));
```
