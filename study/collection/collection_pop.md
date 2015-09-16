#以栈或队列的方式使用集合

```js
push(model); //末尾加
pop(); //末尾取，并移除
unshift(model); //前面加
shift(); //前面取并移除
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
}]);

//使用push加在末尾
invoiceItemCollection.push({
    id: 'cc4',
    name: 'kit',
    age: 22
});

console.log(invoiceItemCollection);

//使用pop从末尾取值
var oneModel = invoiceItemCollection.pop();
console.log(oneModel);

//末尾的model已经删除了
console.log(invoiceItemCollection);

//push是加末尾，pop是取末尾
//如果要加最前面，用unshift(model)，移除最前面用shift();

invoiceItemCollection.unshift({
    id: 'cc5',
    name: '555',
    age: 23
});
console.log(invoiceItemCollection);

oneModel = invoiceItemCollection.shift();
console.log(oneModel);


//如果用队列。
//末尾加push(model)，取最前面shift()
//最前面加unshift(model), 取最后面pop()
```
