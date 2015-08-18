#第一个backbone代码
```js
//定义一个数据模型
var InvoiceItemModel = Backbone.Model.extend({
    defaults: {
        price: 0,
        quantity: 0
    },
    calculateAmount: function () {
        return this.get('price') * this.get('quantity');
    }
});

//定义一个视图，视图选用模型数据。并负责渲染界面
var InvoiceItemView = Backbone.View.extend({
    template: _.template('Price: <%= price %> Quantity: <%= quantity %> Amount: <%= amount %>'),
    render: function () {
        var html = this.template({
            price: this.model.get('price'),
            quantity: this.model.get('quantity'),
            amount: this.model.calculateAmount()
        });
        $(this.el).html(html);
    }
});

//实例化数据模型
var invoiceItemModel = new InvoiceItemModel({
    price: 2,
    quantity: 3
});

//实例化视图，并选用数据模型
var invoiceItemView = new InvoiceItemView({
    model: invoiceItemModel,
    el: 'body'
});

//视图渲染
invoiceItemView.render();
```
<http://jsfiddle.net/gs_jquery/dkrphq4w/>
