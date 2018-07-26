
var animal = function(){
    this.setName = function(name){
        this._name = name;
    }

    this.sing = function(){
        console.log(this._name + "'s song");
    }
    
};

var dog = new animal();
dog.setName("阿黄");
dog.sing();

var pig = new animal();
pig.setName('小花');
pig.sing();