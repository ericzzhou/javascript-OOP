/**
 * 此文件解释JavaScript中类的继承高级玩法之原型式继承 
 */

//公共类
var inheritObject = function(superClass){
    //声明一个过渡函数
    var tmp = function(){};

    //过渡对象的原型继承父对象
    tmp.prototype = new superClass();

    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new tmp();
}

//声明 animal 父类 
var animal = function(){
    this.address = ['aaa','bbb','ccc'];
    console.log("父类构造函数执行了");
};



var d1 = inheritObject(animal);
console.log(d1.address);
d1.address.push('ddd');
console.log(d1.address);

var d2 = inheritObject(animal);
console.log(d2.address);



