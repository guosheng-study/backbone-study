#在模型中使用嵌套属性

https://github.com/afeld/backbone-nested

```
//定义Model
var Model = Backbone.Model.extend({});

//定义NestedModel
var Model = Backbone.NestedModel.extend({});

```


```js
$(function() {

    //定义一个模型
    var Model = Backbone.Model.extend({});
    var model = new Model();

    model.set({
        first: 'John',
        last: 'Smith',
        middle: {
            initial: 'P'
        }
    });

    console.log(model.get('middle.initial')); //undefined


    //定义一个Nested模型
    var NestedModel = Backbone.NestedModel.extend({});
    var nestedModel = new NestedModel();

    nestedModel.set({
        first: 'John',
        last: 'Smith',
        middle: {
            initial: 'P'
        }
    });

    //能取到了
    console.log(nestedModel.get('middle.initial')); //'p'
});
```
