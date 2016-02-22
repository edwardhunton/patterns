var defineProp = function(obj, key, value){

   var config = {
       value: value,
       writable: true,
           enumerable: true,
        configurable: true
       };
    Object.defineProperty(obj, key, config);
    
}

var man = Object.create(null);

defineProp(man, 'car', 'Delorean');
defineProp(man, 'dob', '29:11:1974');
defineProp(man, 'beard', true);