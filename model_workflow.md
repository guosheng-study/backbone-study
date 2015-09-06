#模型中工作流的实现

需要引用插件：https://github.com/kendagriff/workflow.js

```js
var Model = Backbone.Model.extend({
    //定义工作流
    workflow: {
        initial: 'draft',
        events: [{
            name: 'issue', //开具
            from: 'draft', //从起草来
            to: 'issued' //已开具
        }, {
            name: 'payout', //付款
            from: 'issued',
            to: 'paid'
        }, {
            name: 'cancel', //取消
            from: 'draft', //从起草来
            to: 'canceled'
        }, {
            name: 'cancel', //取消
            from: 'issued', //从开具来
            to: 'canceled'
        }]
    },
    initialize: function() {
        _.extend(
            this, new Backbone.Workflow(this, {
                attrName: 'status'
            })
        );
    }
});

//实例化
var model = new Model();
var status;

status = model.get('status');
console.log(status);

model.triggerEvent('issue'); //触发开具
status = model.get('status');
console.log(status);


model.triggerEvent('payout'); //触发付款
status = model.get('status');
console.log(status);
```
