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
