#重写getter
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
<http://jsfiddle.net/gs_jquery/34ywdvxw/>

#重写setter
```js
var BuyerModel = Backbone.Model.extend({
    //使用插件 Backbone.Mutators
    mutators: {
        fullName: {
            get: function () {
                return this.get('firstName') + ' ' + this.get('lastName');
            },

            //重写set方法
            set: function (key, value, options, set) {
                var names = value.split(' ');
                this.set('firstName', names[0]);
                this.set('lastName', names[1]);
            }
        }
    }
});

//实例化
var buyerModel = new BuyerModel();

//设值
buyerModel.set('fullName', 'Aaron Gustafson');

//取值
var firstName = buyerModel.get('firstName');
var lastName = buyerModel.get('lastName');
console.log(firstName, lastName);
```
<http://jsfiddle.net/gs_jquery/wrzLjccb/>

#再来一个getter
```js
var BuyerModel = Backbone.Model.extend({
    //使用插件 Backbone.Mutators
    mutators: {
        vip: {
            get: function() {
                return this.attributes.vip ? 'VIP' : 'Regular';
            }
        }
    }
});

//实例化
var buyerModel = new BuyerModel();

var vipname = buyerModel.get('vip');
console.log(vipname);

buyerModel.set('vip', true);
vipname = buyerModel.get('vip');
console.log(vipname);
```
<http://jsfiddle.net/gs_jquery/aohmw6mb/>
