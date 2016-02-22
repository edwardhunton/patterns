var PubSub = (function(){

        var subscribers = [], events = [];

        function addSubscriber(s){

            subscribers.push(s);

        }

        function notify(e){

            this.currentEvent = e;
            this.publish();

        }



        function publish(){

            for(var s in subscribers){
                if(subscribers[s].event === this.currentEvent){
                    subscribers[s].action.call(this)
                }
            }

        }

        function registerEvent(e){

        }


        return {


            addSubscriber : addSubscriber,
            registerEvent: registerEvent,
            notify: notify,
            publish: publish


        }
    }
)()

var modB = (function(_ps){

        ps = _ps;

        function init(){

            ps.registerEvent('start')

        }

        function triggerE(){

            ps.notify('start');
        }


        return {

            init: init,
            triggerEvent : triggerE
        }



    }


)


var modA = (function(_ps){


        ps = _ps;

        function doS(){
            console.log('S');
        }


        function init(){

            ps.addSubscriber({'context':this, 'event':'start', 'action': this.doSomthing})

        }

        return {

            init: init,
            doSomthing: doS,

        }




    }
)

var ma = new modA(PubSub);
var mb = new modB(PubSub);

ma.init();
mb.triggerEvent();



