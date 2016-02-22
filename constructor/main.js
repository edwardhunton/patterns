function Car(model, year, miles){

    this.model = model;
    this.year = year;
    this.miles = miles;

    this.myFunc = function(){


        console.log('mf');

    }







}

Car.prototype.toString = function(){

    return this.model + " has done " + this.miles;

}


var c = new Car();

c.myFunc()



