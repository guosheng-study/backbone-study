#模型验证

1.使用插件backbone.validation
2.网址：https://github.com/thedersen/backbone.validation
3.cdn: http://www.bootcdn.cn/backbone.validation/

#Validation mix-in
To add validation to your models, mix in the validation on the Model's prototype.
```js
_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);
```

#示例：
```js
_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

var SomeModel = Backbone.Model.extend({
    validation: {
        name: {
            required: true
        },
        'address.street': {
            required: true
        },
        'address.zip': {
            length: 4
        },
        age: {
            range: [1, 80]
        },
        email: {
            pattern: 'email'
        },
        someAttribute: function(value) {
            if (value !== 'somevalue') {
                return 'Error message';
            }
        }
    }
});

var someModel = new SomeModel();

someModel.set({
    age: 99
}, {
    validate: true
});

console.log(someModel.isValid());
console.log(someModel.get('age'));
```
