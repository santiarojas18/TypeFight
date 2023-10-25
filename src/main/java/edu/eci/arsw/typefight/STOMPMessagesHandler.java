package edu.eci.arsw.typefight;

import edu.eci.arsw.typefight.model.Point;
import edu.eci.arsw.typefight.model.TypeFight;
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
    //ConcurrentHashMap<String, ArrayList<Point>> points;
    TypeFight typeFight;

    public STOMPMessagesHandler() {
        //points = new ConcurrentHashMap<>();
    }

    @MessageMapping("catchword.{session}")
    public void handleWordEvent(String word, @DestinationVariable String session) throws Exception {
        System.out.println("Palabra escrita!:"+word);
        typeFight.deleteWord(word);
        //points.putIfAbsent(numdibujo, new ArrayList<>());
        //ArrayList<Point> specificPoints = points.get(numdibujo);
        //specificPoints.add(pt);
        msgt.convertAndSend("/topic/catchword."+session, word);
    }
}
