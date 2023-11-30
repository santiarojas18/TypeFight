package edu.eci.arsw.typefight.config;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import edu.eci.arsw.typefight.model.Player;
import edu.eci.arsw.typefight.model.TypeFight;

import java.io.IOException;
import java.util.HashMap;

public class TypeFightDeserializer extends StdDeserializer<TypeFight> {

    public TypeFightDeserializer() {
        this(null);
    }



    public TypeFightDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public TypeFight deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        JsonNode node = jp.getCodec().readTree(jp);

        // Obtener otros atributos de TypeFight

        // Obtener el HashMap<String, Player>
        JsonNode playersNode = node.get("players");
        HashMap<String, Player> players = new HashMap<>();
        if (playersNode != null && playersNode.isArray()) {
            for (JsonNode playerNode : playersNode) {
                String playerName = playerNode.get("name").asText();
                String playerColor = playerNode.get("color").asText();
                // Crear un objeto Player y agregarlo al HashMap
                Player player = new Player(playerName, playerColor); // Ajusta la creación según tu clase Player
                players.put(playerColor, player);
            }
        }

        // Crear el objeto TypeFight con los atributos deserializados
        TypeFight typeFight = new TypeFight();
        // Establecer otros atributos

        typeFight.setPlayers(players);

        return typeFight;
    }
}