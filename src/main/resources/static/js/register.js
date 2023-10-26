var register = (function () {

    var stompClient = null;
    var listenersAdded = false;

    var connectAndSubscribe = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/newplayer', function (eventbody) {
                window.location.href = "lobby.html";
            });
        });
    };


    return {
        init: function () {
            //disconnect connection
            register.disconnect();

            //websocket connection
            connectAndSubscribe();
        },

        publishGamer: function(name){
            //publicar el evento
            stompClient.send("/app/newplayer", {}, name);
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