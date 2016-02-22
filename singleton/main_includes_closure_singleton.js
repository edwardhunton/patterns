var mySingleton = (function(){

    var inishiated;

    function init(){

        return {

            publicMethod: function(){

                console.log("its a pub");


            }

        }




   }

    return {

        getInstance: function(){

            if(!inishiated){

                inishiated = init();
                return inishiated;

            } else {

                return inishiated;
            }

        }

    }






})()

mySingleton.getInstance().publicMethod();


//sing.testfunc();
