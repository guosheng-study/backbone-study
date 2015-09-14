#通过创建撤销点来保存恢复模型的装态
```js
var SomeModel = Backbone.Model.extend({
    initialize: function() {
        var memento = new Backbone.Memento(this);
        _.extend(this, memento);
    }
});

//实例化
var model = new SomeModel();

model.set('price', 10);
model.store();
console.log(model.get('price'));

model.set('price', 20);
model.store();
console.log(model.get('price'));

model.set('price', 30);
model.store();
console.log(model.get('price'));

model.set('price', 40);
console.log(model.get('price'));

model.restore(); //获取前一次保存的值
console.log(model.get('price'));
```
<http://jsfiddle.net/gs_jquery/7Loopfuj/>
