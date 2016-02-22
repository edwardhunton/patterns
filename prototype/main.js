var someCar = {

    drive: function(){
        return false;
    },
    name: 'mazda'

};


var anotherCar = Object.create(someCar, {

    'canTest': {

        value: function(){
            return true;
        }




    },
    'setName': {

        value: function(name){

            this.name = name;
        }




    }



});

console.log(anotherCar.canTest())
console.log(anotherCar.name)
anotherCar.setName('honda')
console.log(anotherCar.name)
console.log(anotherCar.drive())


