
var animal = function(){};

animal.prototype.setName = function(name){
    this._name = name;
};

animal.prototype.sing = function(){
    console.log(this._name + "'s song");
};


var dog = new animal();
dog.setName("阿黄1");
dog.sing();

var pig = new animal();
pig.setName('小花1');
pig.sing();


animal.prototype.jump = function(){
    console.log(this._name + '蹦蹦跳');
};

dog.jump();
pig.jump();

dog.setName('小黑');
dog.sing();
dog.jump();

