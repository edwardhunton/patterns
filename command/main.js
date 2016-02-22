

    var CarManager = {

        execute: function(name){

            return this[name] && this[name].apply(this, [].slice.call(arguments, 1));


        },





        requestInfo: function( model, id){

            return 'The info for ' +model + ' with id' + id + ' foo bar';

        },

        buyVehicle: function( model, id){

            return 'you have' + id + ', ' + model;

        },


        arrangeViewing: function(model, id){

            return "You are viewing" + model + '(' + id + ')';

        }



    };


console.log(CarManager.execute("arrangeViewing", "Ferrari", "14523"));

