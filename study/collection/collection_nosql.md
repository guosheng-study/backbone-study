#在集合上执行NoSQL
```js
var InvoiceItemModel = Backbone.Model.extend({});

var InvoiceItemCollection = Backbone.Collection.extend({
    model: InvoiceItemModel
});

//QueryCollection
var QueryCollection = Backbone.QueryCollection.extend({
    model: InvoiceItemModel
});

//创建集合
var invoiceItemCollection = new QueryCollection([{
    x: '张',
    m: '三',
    age: 18,
    h: 170
}, {
    x: '张',
    m: '角',
    age: 15
}, {
    x: '李',
    m: '广',
    age: 29
}, {
    x: '李',
    m: '四',
    age: 21
}, {
    x: '李',
    m: '治',
    age: 19,
    h: 160
}]);

//查询x是李的
var q = invoiceItemCollection.query({
    x: '李'
});
show(q, '普通');


//查询x是李的
q2 = invoiceItemCollection.query({
    x: {
        $equal: '李'
    }
});
show(q, '$equal');

//查询不姓李的
q = invoiceItemCollection.query({
    x: {
        $ne: '李'
    }
});
show(q, '$ne');


//查询年龄15或19的
q = invoiceItemCollection.query({
    age: {
        $in: [15, 19]
    }
});
show(q, '$in');


//查询年龄不15或不是19的
q = invoiceItemCollection.query({
    age: {
        $nin: [15, 19]
    }
});
show(q, '$nin');


//查询有身高的
q = invoiceItemCollection.query({
    h: {
        $has: true
    }
});
show(q, '$has');


//查询没有身高的信息
q = invoiceItemCollection.query({
    h: {
        $exists: false
    }
});
show(q, '$exists');


function show(list, tag) {
    var liCollection = new InvoiceItemCollection(list);
    liCollection.each(function(model) {
        console.log(tag, model.get('x') + model.get('m') + ' - ' + model.get('age'));
    });
}
```