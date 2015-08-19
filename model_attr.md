#模型属性的操作
```js
// get 取值
// escape 并转义
// set 设值
// unset 删值
// has 是否有值
// clear 清空所有值


//定义一个数据模型并设置默认值
var InvoiceItemModel = Backbone.Model.extend({
    defaults: {
        text: '<script>alert(1);</scirpt>',
        price: 10
    },
    initialize: function () {
        this.set('name', 'kyo');
    }
});

//实现化模型
var invoiceItemModel = new InvoiceItemModel();

//取属性的值
var text = invoiceItemModel.get('text');
console.log('取属性的值：' + text);

//取属性的值并转义
var textEscaped = invoiceItemModel.escape('text');
console.log('取属性的值并转义' + textEscaped);


//判断是否有属性的值
var hasPrice = invoiceItemModel.has('price');
console.log('判断是否有属性的值：' + hasPrice);

//设置属性的值
invoiceItemModel.set('price', 100);
price = invoiceItemModel.get('price');
console.log('设置属性的值：' + price);

//删除属性的值
invoiceItemModel.unset('price');
price = invoiceItemModel.get('price');
console.log('删除属性的值：' + price);

//清除所有属性
invoiceItemModel.clear();
price = invoiceItemModel.get('price');
console.log('清除所有属性：' + price);
```
