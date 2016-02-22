function Car(){



}

function Truck(){



}


function vFactory(){}

vFactory.prototype.vehicleclass = Car;

vFactory.prototype.getVehicle = function(options){

    return new this.vehicleclass(options)
}

var carFactory = new vFactory();
var car = carFactory.getVehicle({color: 'yellow', turbo: true});

console.log(car instanceof Car);

carFactory.vehicleclass = Truck;

var truck = carFactory.getVehicle({color: 'yellow', turbo: true});

console.log(truck instanceof Truck);

function TruckFactory() {}

TruckFactory.prototype = new vFactory();
TruckFactory.prototype.vehicleclass = Truck;

var tf = new TruckFactory();

var t = tf.getVehicle({monster: true});

console.log(t instanceof Truck);

