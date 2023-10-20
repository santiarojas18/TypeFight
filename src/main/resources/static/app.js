var app = (function () {

    class Point{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }        
    }

    var tableId = null;
    var stompClient = null;

    var addPointToCanvas = function (point) {        
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.stroke();
    };
    
    
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

    var cleanCanvas = function () {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    var connectAndSubscribe = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);
        
        //subscribe to /topic/newpoint.tableId when connections succeed
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/newpoint.' + tableId, function (eventbody) {
                var theObject=JSON.parse(eventbody.body);
                var pointToAdd = new Point(theObject.x, theObject.y);
                addPointToCanvas(pointToAdd);
            });
        });

    };
    
    

    return {

        init: function (newTableId) {
            tableId = newTableId;
            cleanCanvas();
            var can = document.getElementById("canvas");
            var positions;
            if(window.PointerEvent) {
                canvas.addEventListener("pointerdown", function(event){
                    positions = getMousePositionWithPage(event);
                    app.publishPoint(positions.x, positions.y);
                });
            } else {
                canvas.addEventListener("mousedown", function(event){
                    positions = getMousePosition(event);
                    app.publishPoint(positions.x, positions.y);
                });
            }

            //disconnect connection
            app.disconnect();

            //websocket connection
            connectAndSubscribe();
        },

        publishPoint: function(px,py){
            var pt=new Point(px,py);
            console.info("publishing point at "+pt);
            addPointToCanvas(pt);

            //publicar el evento
            stompClient.send("/topic/newpoint." + tableId, {}, JSON.stringify(pt));
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