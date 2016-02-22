

var myClass = (function(){


    function test1(n){

        return n * 5;

    }

    function test2(n){

return n * 45;

    }

    function test3(n){

        return n * 20;


    }

    return {


        facade: function(num){

            return test3(test2(test1(num)));


        }


    }







})();

console.log(myClass.facade(12))
