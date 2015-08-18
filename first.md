#第一个backbone代码
```js
var InvoiceItemModel = Backbone.Model.extend({
    defaults: {
        price: 0,
        quantity: 0
    },
    calculateAmount: function () {
        return this.get('price') * this.get('quantity');
    }
});

var invoiceItemModel = new InvoiceItemModel({
    price: 2,
    quantity: 3
});

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

var invoiceItemView = new InvoiceItemView({
    model: invoiceItemModel,
    el: 'body'
});

invoiceItemView.render();
```
