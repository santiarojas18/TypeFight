var lobby = (function () {

    var stompClient = null;
    var listenersAdded = false;

    var connectAndSubscribe = function () {
        return new Promise(function (resolve, reject) {
            console.info('Connecting to WS...');
            var socket = new SockJS('/stompendpoint');
            stompClient = Stomp.over(socket);

            stompClient.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/newentry', function (eventbody) {
                    var theObject=JSON.parse(eventbody.body);
                    console.log(theObject);
                    setPlayersNumber(theObject);
                });
                resolve(); // Resuelve la promesa cuando la conexión está lista
            });
        });
    };


    return {
        init: function () {
            //disconnect connection
            lobby.disconnect();

            //websocket connection
            connectAndSubscribe().then(function() {
                lobby.publishEntry();
            });
        },

        publishEntry: function(){
            //publicar el evento
            stompClient.send("/app/newentry", {});
        },

        disconnect: function () {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            //setConnected(false);
            console.log("Disconnected");
        }
    };

})();