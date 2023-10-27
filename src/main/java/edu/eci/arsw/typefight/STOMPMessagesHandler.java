package edu.eci.arsw.typefight;

import edu.eci.arsw.typefight.model.Player;
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
    TypeFight typeFight;

    public STOMPMessagesHandler() {
        typeFight = new TypeFight();
    }

    @MessageMapping("showCurrentWord")
    public void getInitialWord() {
        String currentWord = typeFight.getCurrentWord(); // Obtén la palabra actual desde tu modelo TypeFight
        msgt.convertAndSend("/topic/showCurrentWord", currentWord); // Envía la palabra actual a todos los jugadores.
    }

    @MessageMapping("catchword")
    public void handleWordEvent(String word) throws Exception {
        System.out.println("Palabra escrita!:"+word);
        typeFight.deleteWord(word);
        //points.putIfAbsent(numdibujo, new ArrayList<>());
        //ArrayList<Point> specificPoints = points.get(numdibujo);
        //specificPoints.add(pt);
        System.out.println("Ganador!:"+typeFight.getSortedPlayers());
        msgt.convertAndSend("/topic/catchword", word);
        //Hacer cuando se encuentre ganador, que se pregunta cuando se ingresa una palabra a typefight
        msgt.convertAndSend("/topic/showWinner", typeFight.getSortedPlayers());



    }

    @MessageMapping("newplayer")
    public void handleNewPlayerEvent(String name) {
        System.out.println("Jugador añadido:" + name);
        Player player = new Player(name, typeFight.getColorByPlayers());
        typeFight.addPlayer(player);
        msgt.convertAndSend("/topic/newplayer", name);
    }

    @MessageMapping("newentry")
    public void handleNewEntry () {
        System.out.println("Entrada registrada");
        msgt.convertAndSend("/topic/newentry", typeFight.getAmountOfPlayers());
    }
}
