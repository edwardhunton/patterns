var mySingleton = function(){

    myvar1 = "Jack";
    myvar2 = "Jill";

   function testfunc(){

       console.log(myvar1);


   }

    function testfunc2(){

        console.log(myvar2);


    }

    return  {

        testfunc: testfunc


    }






}

var sing = mySingleton();


sing.testfunc();
