#验证html表单

###集成到视图
```js
// Binding when initializing
var SomeView = Backbone.View.extend({
  initialize: function(){
    Backbone.Validation.bind(this);
  }
});
```

###实例
```js
$(function() {

    //定义一个模型
    var BuyerModel = Backbone.Model.extend({
        defaults: {
            name: '',
            age: ''
        },
        validation: {
            name: {
                required: true
            },
            age: {
                min: 18
            }
        }
    });

    //定义一个视图
    var BuyerModelFormView = Backbone.View.extend({
        initialize: function() {
            Backbone.Validation.bind(this);
            this.render();
        },
        template: _.template('\
            <form>\
                Enter name:\
                <input type="text" name="name" value="<%= name %>" /><br>\
                Enter age:\
                <input type="text" name="age" value="<%= age %>" />\
                <input type="button" name="save" value="Save" />\
            </form>\
        '),
        render: function() {
            var html = this.template(this.model.toJSON());
            $(this.el).html(html);
        },
        events: {
            'click [name="save"]': 'save'
        },
        save: function() {
            //保存的时候设置模型，并验证
            this.model.set({
                name: $('[name~="name"]').val(),
                age: $('[name~="age"]').val()
            }, {
                validate: true
            });

            //可以查看一下这个模型是不通过验证
            console.log(this.model.isValid());
        }
    });

    //使用视图
    new BuyerModelFormView({
        model: new BuyerModel(),
        el: 'body'
    });

});
```

总结：
- 模型上要使用验证
- 设置的时候也要使用验证
- 在线代码:<http://jsfiddle.net/gs_jquery/Lv16gv3h/1/>
