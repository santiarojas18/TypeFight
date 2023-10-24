package edu.eci.arsw.typefight;

import edu.eci.arsw.typefight.model.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.concurrent.ConcurrentHashMap;

@Controller
public class STOMPMessagesHandler {

    @Autowired
    SimpMessagingTemplate msgt;
    ConcurrentHashMap<String, ArrayList<Point>> points;

    public STOMPMessagesHandler() {
        points = new ConcurrentHashMap<>();
    }

    @MessageMapping("newpoint.{numdibujo}")
    public void handlePointEvent(Point pt, @DestinationVariable String numdibujo) throws Exception {
        System.out.println("Nuevo punto recibido en el servidor!:"+pt);
        points.putIfAbsent(numdibujo, new ArrayList<>());
        ArrayList<Point> specificPoints = points.get(numdibujo);
        specificPoints.add(pt);
        msgt.convertAndSend("/topic/newpoint."+numdibujo, pt);
        if (specificPoints.size() >= 3) {
            msgt.convertAndSend("/topic/newpolygon."+numdibujo, specificPoints);
        }
    }
}
