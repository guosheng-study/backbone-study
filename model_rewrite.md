#重写getter/setter
```js
var BuyerModel = Backbone.Model.extend({

    //使用插件
    mutators: {
        fullName: {
            get: function () {
                return this.get('firstName') + ' ' + this.get('lastName');
            }
        }
    }
});

//实例化
var buyerModel = new BuyerModel({
    firstName: 'Jone',
    lastName: 'Smith'
});

//取全名
var fullName = buyerModel.get('fullName');
console.log(fullName);
```
