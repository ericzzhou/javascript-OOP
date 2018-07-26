/**
 * 此文件解释JavaScript中类的继承之类式继承
 */

//声明 animal 父类 
var animal = function(){};

animal.prototype.address = ['aaa','bbb','ccc'];//引用类型公有属性，在类式继承可能会被子类污染
animal.prototype.setName = function(name){
    this._name = name;
};

animal.prototype.pushAddress = function(address){
    this.address.push(address);
};

animal.prototype.getName = function(){
    console.log(this._name);
};

animal.prototype.getAmimal = function(){
    console.log('this is animal');
};



//声明dog类
var dog = function(){};
//继承父类
dog.prototype = new animal();

dog.prototype.getDog = function(){
    console.log('this is dog');
};

var d1 = new dog();
d1.setName('阿黄');
d1.getName();
d1.getAmimal();
d1.getDog();
console.log(d1.address);

d1.pushAddress('ddd');//因为 address 是引用类型，此操作会影响其他子类的address
console.log(d1.address);

var d2 = new dog();
console.log(d2.address);



