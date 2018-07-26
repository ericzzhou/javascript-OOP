/**
 * 此文件解释JavaScript中类的继承之构造函数式继承， 因构造函数式继承不涉及到原型，故无法继承父类原型方法和属性
 * 此文件解释JavaScript中组合继承
 */

//声明 animal 父类 
var animal = function(name){
    this.name = name;
    this.address = ['aaa','bbb','ccc'];
    console.log("父类构造函数执行了");
};


//声明dog类
//#region 组合继承
var dog = function(name){
    //构造函数式继承父类
    animal.call(this,name);
};

dog.prototype = new animal();
//#endregion

var d1 = new dog("小黄");
console.log(d1.address);
d1.address.push('ddd');
console.log(d1.address);

var d2 = new dog('小花');
console.log(d2.address);



