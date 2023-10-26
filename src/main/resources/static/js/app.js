var app = (function () {

    var stompClient = null;
    var currentWord = null;
    var listenersAdded = false;
    const userWord = document.getElementById("userWord");


    var getMousePosition = function (evt) {
        canvas = document.getElementById("canvas");
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };

    var getMousePositionWithPage = function (evt) {
        canvas = document.getElementById("canvas");
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.pageX - rect.left,
            y: evt.pageY - rect.top
        };
    };

    var displayCurrentWord = function () {
        var currentWordContainer = document.getElementById("currentWordContainer");
        currentWordContainer.textContent = currentWord;
    };

    var requestCurrentWord = function () {
        stompClient.send("/app/showCurrentWord", {}, "");
    };

    var connectAndSubscribe = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/catchword', function (eventbody) {
                var theObject=JSON.parse(eventbody);
                console.log(theObject);

            });
            stompClient.subscribe('/topic/showCurrentWord', function (eventbody) {
                currentWord = eventbody.body;
                displayCurrentWord();
            });
            requestCurrentWord();
        });
    };
    
    
    return {
        addListeners: function () {
            document.addEventListener("keydown", function(event) {
                if (event.key.length === 1) {
                    // Solo se procesa la entrada si es una letra (no se procesan teclas especiales, números, etc.).
                    const currentWord = userWord.textContent;
                    const newWord = currentWord + event.key;
                    userWord.textContent = newWord;
                } else if (event.key === "Backspace") {
                    // Manejar la tecla de retroceso (Backspace) para borrar la última letra.
                    const currentWord = userWord.textContent;
                    const newWord = currentWord.slice(0, -1); // Elimina el último carácter.
                    userWord.textContent = newWord;
                } else if (event.key === "Enter") {
                    // publicar palabra cuando se presiona Enter.
                    app.publishWrittenWord(userWord.textContent);
                }
            });            
        },

        init: function (newSession) {
            if (!listenersAdded) {
                app.addListeners();
                listenersAdded = true;
            }

            //disconnect connection
            app.disconnect();

            //websocket connection
            connectAndSubscribe();
        },

        publishWrittenWord: function(writtenWord){
            console.info("The word written is "+ writtenWord);
            //addPointToCanvas(pt);

            //publicar el evento
            stompClient.send("/app/catchword", {}, JSON.stringify(pt));
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

