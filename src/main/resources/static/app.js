var app = (function () {

    class Point{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }        
    }

    var tableId = null;
    var stompClient = null;
    var listenersAdded = false;

    var addPointToCanvas = function (point) {        
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.stroke();
    };

    var paintPolygon = function (points) {
        var currentPoint;
        var nextPoint;
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        for (var i = 0; i < points.length - 1; i++) {
            currentPoint = points[i];
            addPointToCanvas(currentPoint);
            nextPoint = points[i + 1];
            ctx.beginPath();
            ctx.moveTo(currentPoint.x, currentPoint.y);
            ctx.lineTo(nextPoint.x ,nextPoint.y);
            ctx.stroke();
            ctx.closePath();
        }
        currentPoint = points[points.length - 1];
        addPointToCanvas(currentPoint);
        nextPoint = points[0];
        ctx.beginPath();
        ctx.moveTo(currentPoint.x, currentPoint.y);
        ctx.lineTo(nextPoint.x ,nextPoint.y);
        ctx.stroke();
        ctx.closePath();
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

            stompClient.subscribe('/topic/newpolygon.' + tableId, function (eventbody) {
                var theObject=JSON.parse(eventbody.body);
                cleanCanvas();
                paintPolygon(theObject);
            });
        });
    };
    
    

    return {

        addListeners: function () {
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
        },

        init: function (newTableId) {
            if (!listenersAdded) {
                app.addListeners();
                listenersAdded = true;
            }

            tableId = newTableId;
            cleanCanvas();

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
            stompClient.send("/app/newpoint." + tableId, {}, JSON.stringify(pt));
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

const pixelData = [[{"x":0,"y":0,"color":"transparent"},{"x":1,"y":0,"color":"transparent"},{"x":2,"y":0,"color":"transparent"},{"x":3,"y":0,"color":"#000000"},{"x":4,"y":0,"color":"#000000"},{"x":5,"y":0,"color":"#000000"},{"x":6,"y":0,"color":"#000000"},{"x":7,"y":0,"color":"#000000"},{"x":8,"y":0,"color":"#000000"},{"x":9,"y":0,"color":"#000000"},{"x":10,"y":0,"color":"#000000"},{"x":11,"y":0,"color":"#000000"},{"x":12,"y":0,"color":"#000000"},{"x":13,"y":0,"color":"transparent"},{"x":14,"y":0,"color":"transparent"},{"x":15,"y":0,"color":"transparent"},{"x":0,"y":1,"color":"transparent"},{"x":1,"y":1,"color":"transparent"},{"x":2,"y":1,"color":"#000000"},{"x":3,"y":1,"color":"#c5a487"},{"x":4,"y":1,"color":"#8B5C33"},{"x":5,"y":1,"color":"#8B5C33"},{"x":6,"y":1,"color":"#8B5C33"},{"x":7,"y":1,"color":"#8B5C33"},{"x":8,"y":1,"color":"#8B5C33"},{"x":9,"y":1,"color":"#8B5C33"},{"x":10,"y":1,"color":"#c5a487"},{"x":11,"y":1,"color":"#c5a487"},{"x":12,"y":1,"color":"#c5a487"},{"x":13,"y":1,"color":"#000000"},{"x":14,"y":1,"color":"transparent"},{"x":15,"y":1,"color":"transparent"},{"x":0,"y":2,"color":"transparent"},{"x":1,"y":2,"color":"#000000"},{"x":2,"y":2,"color":"#8B5C33"},{"x":3,"y":2,"color":"#8B5C33"},{"x":4,"y":2,"color":"#c5a487"},{"x":5,"y":2,"color":"#8B5C33"},{"x":6,"y":2,"color":"#8B5C33"},{"x":7,"y":2,"color":"#8B5C33"},{"x":8,"y":2,"color":"#8B5C33"},{"x":9,"y":2,"color":"#8B5C33"},{"x":10,"y":2,"color":"#8B5C33"},{"x":11,"y":2,"color":"#8B5C33"},{"x":12,"y":2,"color":"#c5a487"},{"x":13,"y":2,"color":"#c5a487"},{"x":14,"y":2,"color":"#000000"},{"x":15,"y":2,"color":"transparent"},{"x":0,"y":3,"color":"transparent"},{"x":1,"y":3,"color":"#000000"},{"x":2,"y":3,"color":"#8B5C33"},{"x":3,"y":3,"color":"#8B5C33"},{"x":4,"y":3,"color":"#8B5C33"},{"x":5,"y":3,"color":"#8B5C33"},{"x":6,"y":3,"color":"#8B5C33"},{"x":7,"y":3,"color":"#8B5C33"},{"x":8,"y":3,"color":"#8B5C33"},{"x":9,"y":3,"color":"#8B5C33"},{"x":10,"y":3,"color":"#8B5C33"},{"x":11,"y":3,"color":"#8B5C33"},{"x":12,"y":3,"color":"#8B5C33"},{"x":13,"y":3,"color":"#c5a487"},{"x":14,"y":3,"color":"#000000"},{"x":15,"y":3,"color":"transparent"},{"x":0,"y":4,"color":"transparent"},{"x":1,"y":4,"color":"#000000"},{"x":2,"y":4,"color":"#8B5C33"},{"x":3,"y":4,"color":"#8B5C33"},{"x":4,"y":4,"color":"#8B5C33"},{"x":5,"y":4,"color":"#E7C09D"},{"x":6,"y":4,"color":"#E7C09D"},{"x":7,"y":4,"color":"#E7C09D"},{"x":8,"y":4,"color":"#E7C09D"},{"x":9,"y":4,"color":"#8B5C33"},{"x":10,"y":4,"color":"#E7C09D"},{"x":11,"y":4,"color":"#E7C09D"},{"x":12,"y":4,"color":"#000000"},{"x":13,"y":4,"color":"#000000"},{"x":14,"y":4,"color":"transparent"},{"x":15,"y":4,"color":"transparent"},{"x":0,"y":5,"color":"transparent"},{"x":1,"y":5,"color":"transparent"},{"x":2,"y":5,"color":"#000000"},{"x":3,"y":5,"color":"#8B5C33"},{"x":4,"y":5,"color":"#E7C09D"},{"x":5,"y":5,"color":"#8B5C33"},{"x":6,"y":5,"color":"#8B5C33"},{"x":7,"y":5,"color":"#8B5C33"},{"x":8,"y":5,"color":"#8B5C33"},{"x":9,"y":5,"color":"#E7C09D"},{"x":10,"y":5,"color":"#8B5C33"},{"x":11,"y":5,"color":"#8B5C33"},{"x":12,"y":5,"color":"#000000"},{"x":13,"y":5,"color":"transparent"},{"x":14,"y":5,"color":"transparent"},{"x":15,"y":5,"color":"transparent"},{"x":0,"y":6,"color":"transparent"},{"x":1,"y":6,"color":"transparent"},{"x":2,"y":6,"color":"#000000"},{"x":3,"y":6,"color":"#8B5C33"},{"x":4,"y":6,"color":"#8B5C33"},{"x":5,"y":6,"color":"#E7C09D"},{"x":6,"y":6,"color":"#FFFFFF"},{"x":7,"y":6,"color":"#000000"},{"x":8,"y":6,"color":"#E7C09D"},{"x":9,"y":6,"color":"#E7C09D"},{"x":10,"y":6,"color":"#E7C09D"},{"x":11,"y":6,"color":"#FFFFFF"},{"x":12,"y":6,"color":"#000000"},{"x":13,"y":6,"color":"transparent"},{"x":14,"y":6,"color":"transparent"},{"x":15,"y":6,"color":"transparent"},{"x":0,"y":7,"color":"transparent"},{"x":1,"y":7,"color":"transparent"},{"x":2,"y":7,"color":"#000000"},{"x":3,"y":7,"color":"#8B5C33"},{"x":4,"y":7,"color":"#8B5C33"},{"x":5,"y":7,"color":"#E7C09D"},{"x":6,"y":7,"color":"#000000"},{"x":7,"y":7,"color":"#000000"},{"x":8,"y":7,"color":"#E7C09D"},{"x":9,"y":7,"color":"#E7C09D"},{"x":10,"y":7,"color":"#E7C09D"},{"x":11,"y":7,"color":"#000000"},{"x":12,"y":7,"color":"#000000"},{"x":13,"y":7,"color":"transparent"},{"x":14,"y":7,"color":"transparent"},{"x":15,"y":7,"color":"transparent"},{"x":0,"y":8,"color":"transparent"},{"x":1,"y":8,"color":"transparent"},{"x":2,"y":8,"color":"#000000"},{"x":3,"y":8,"color":"#E7C09D"},{"x":4,"y":8,"color":"#E7C09D"},{"x":5,"y":8,"color":"#E7C09D"},{"x":6,"y":8,"color":"#E7C09D"},{"x":7,"y":8,"color":"#E7C09D"},{"x":8,"y":8,"color":"#E7C09D"},{"x":9,"y":8,"color":"#E7C09D"},{"x":10,"y":8,"color":"#E7C09D"},{"x":11,"y":8,"color":"#E7C09D"},{"x":12,"y":8,"color":"#000000"},{"x":13,"y":8,"color":"transparent"},{"x":14,"y":8,"color":"transparent"},{"x":15,"y":8,"color":"transparent"},{"x":0,"y":9,"color":"transparent"},{"x":1,"y":9,"color":"transparent"},{"x":2,"y":9,"color":"#000000"},{"x":3,"y":9,"color":"#000000"},{"x":4,"y":9,"color":"#000000"},{"x":5,"y":9,"color":"#000000"},{"x":6,"y":9,"color":"#E7C09D"},{"x":7,"y":9,"color":"#E7C09D"},{"x":8,"y":9,"color":"#E7C09D"},{"x":9,"y":9,"color":"#E7C09D"},{"x":10,"y":9,"color":"#E7C09D"},{"x":11,"y":9,"color":"#000000"},{"x":12,"y":9,"color":"#000000"},{"x":13,"y":9,"color":"#000000"},{"x":14,"y":9,"color":"transparent"},{"x":15,"y":9,"color":"transparent"},{"x":0,"y":10,"color":"transparent"},{"x":1,"y":10,"color":"transparent"},{"x":2,"y":10,"color":"#000000"},{"x":3,"y":10,"color":"#EF0033"},{"x":4,"y":10,"color":"#EF0033"},{"x":5,"y":10,"color":"#EF0033"},{"x":6,"y":10,"color":"#000000"},{"x":7,"y":10,"color":"#E7C09D"},{"x":8,"y":10,"color":"#E7C09D"},{"x":9,"y":10,"color":"#000000"},{"x":10,"y":10,"color":"#000000"},{"x":11,"y":10,"color":"#EF0033"},{"x":12,"y":10,"color":"#EF0033"},{"x":13,"y":10,"color":"#EF0033"},{"x":14,"y":10,"color":"#000000"},{"x":15,"y":10,"color":"transparent"},{"x":0,"y":11,"color":"transparent"},{"x":1,"y":11,"color":"#000000"},{"x":2,"y":11,"color":"#EF0033"},{"x":3,"y":11,"color":"#EF0033"},{"x":4,"y":11,"color":"#EF0033"},{"x":5,"y":11,"color":"#EF0033"},{"x":6,"y":11,"color":"#000000"},{"x":7,"y":11,"color":"#E7C09D"},{"x":8,"y":11,"color":"#E7C09D"},{"x":9,"y":11,"color":"#E7C09D"},{"x":10,"y":11,"color":"#000000"},{"x":11,"y":11,"color":"#EF0033"},{"x":12,"y":11,"color":"#EF0033"},{"x":13,"y":11,"color":"#EF0033"},{"x":14,"y":11,"color":"#000000"},{"x":15,"y":11,"color":"transparent"},{"x":0,"y":12,"color":"transparent"},{"x":1,"y":12,"color":"transparent"},{"x":2,"y":12,"color":"#000000"},{"x":3,"y":12,"color":"#000000"},{"x":4,"y":12,"color":"#000000"},{"x":5,"y":12,"color":"#000000"},{"x":6,"y":12,"color":"#EF0033"},{"x":7,"y":12,"color":"#EF0033"},{"x":8,"y":12,"color":"#EF0033"},{"x":9,"y":12,"color":"#EF0033"},{"x":10,"y":12,"color":"#000000"},{"x":11,"y":12,"color":"#000000"},{"x":12,"y":12,"color":"#000000"},{"x":13,"y":12,"color":"#000000"},{"x":14,"y":12,"color":"transparent"},{"x":15,"y":12,"color":"transparent"},{"x":0,"y":13,"color":"transparent"},{"x":1,"y":13,"color":"transparent"},{"x":2,"y":13,"color":"transparent"},{"x":3,"y":13,"color":"#000000"},{"x":4,"y":13,"color":"#EF0033"},{"x":5,"y":13,"color":"#EF0033"},{"x":6,"y":13,"color":"#000000"},{"x":7,"y":13,"color":"#000000"},{"x":8,"y":13,"color":"#000000"},{"x":9,"y":13,"color":"#EF0033"},{"x":10,"y":13,"color":"#000000"},{"x":11,"y":13,"color":"transparent"},{"x":12,"y":13,"color":"transparent"},{"x":13,"y":13,"color":"transparent"},{"x":14,"y":13,"color":"transparent"},{"x":15,"y":13,"color":"transparent"},{"x":0,"y":14,"color":"transparent"},{"x":1,"y":14,"color":"transparent"},{"x":2,"y":14,"color":"transparent"},{"x":3,"y":14,"color":"#000000"},{"x":4,"y":14,"color":"#E7C09D"},{"x":5,"y":14,"color":"#E7C09D"},{"x":6,"y":14,"color":"#000000"},{"x":7,"y":14,"color":"transparent"},{"x":8,"y":14,"color":"#000000"},{"x":9,"y":14,"color":"#E7C09D"},{"x":10,"y":14,"color":"#000000"},{"x":11,"y":14,"color":"transparent"},{"x":12,"y":14,"color":"transparent"},{"x":13,"y":14,"color":"transparent"},{"x":14,"y":14,"color":"transparent"},{"x":15,"y":14,"color":"transparent"},{"x":0,"y":15,"color":"transparent"},{"x":1,"y":15,"color":"transparent"},{"x":2,"y":15,"color":"transparent"},{"x":3,"y":15,"color":"#000000"},{"x":4,"y":15,"color":"#000000"},{"x":5,"y":15,"color":"#000000"},{"x":6,"y":15,"color":"#000000"},{"x":7,"y":15,"color":"transparent"},{"x":8,"y":15,"color":"#000000"},{"x":9,"y":15,"color":"#000000"},{"x":10,"y":15,"color":"#000000"},{"x":11,"y":15,"color":"transparent"},{"x":12,"y":15,"color":"transparent"},{"x":13,"y":15,"color":"transparent"},{"x":14,"y":15,"color":"transparent"},{"x":15,"y":15,"color":"transparent"}]];

const pixelContainers = document.querySelectorAll('.row-container');

for (let i = 0; i < pixelContainers.length; i++) {
    const container = pixelContainers[i];
    for (const row of pixelData) {
        for (const pixel of row) {
            const div = document.createElement('div');
            div.classList.add('pixel');
            div.style.backgroundColor = pixel.color;
            container.appendChild(div);
        }
    }
}