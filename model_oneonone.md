#实现模型间的一对一关系

https://github.com/PaulUithol/Backbone-relational
http://backbonerelational.org/

```js
//扩展模型
var UserModel = Backbone.RelationalModel.extend({});

var BuyerModel = Backbone.RelationalModel.extend({
    relations: [{
        type: Backbone.HasOne,
        key: 'user',
        relatedModel: UserModel,
        reverseRelation: {
            type: Backbone.HasOne,
            key: 'buyer'
        }
    }]
});


var userModel = new UserModel({
    login: 'jsmith',
    email: 'jsmith@example.com'
});

var buyerModel = new BuyerModel({
    firstName: 'Jonn',
    lastName: 'Smith',
    user: userModel
});

var email = buyerModel.get('user').get('email');
console.log(email);
```
