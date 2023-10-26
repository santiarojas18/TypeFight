package edu.eci.arsw.typefight.model;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

public class TypeFight {
    private Player winner;
    private HashMap<String, Player> players;
    private ArrayList<String> words;
    private String[] colors;

    public TypeFight(){
        words = new ArrayList<>(Arrays.asList("Abrir", "Búsqueda", "Cautivar", "Difuso", "Esencia", "Fabuloso", "Galaxia", "Habilidad", "Inquietud", "Júbilo",
                "Kilómetro", "Luminoso", "Mariposa", "Navegante", "Ocasión", "Palabra", "Química", "Razonar", "Silencio", "Tardanza",
                "Unicornio", "Vehículo", "Wéstern", "Xenofobia", "Yacimiento", "Zigzag", "Amarillo", "Búho", "Cuaderno", "Dama",
                "Elegancia", "Fuego", "Gorrión", "Hombre", "Isla", "Jardín", "Kiosco", "Lámpara", "Mañana", "Nube",
                "Otoño", "Pájaro", "Querido", "Río", "Sol", "Tren", "Uva", "Viento", "Xilófono", "Yate",
                "Zanahoria", "Aluminio", "Barco", "Cielo", "Dientes", "Escritura", "Fábrica", "Galleta", "Hielo", "Invierno",
                "Jirafa", "Koala", "Lápiz", "Manzana", "Noche", "Orquídea", "Pintura", "Queso", "Ratón", "Silla",
                "Té", "Uña", "Vaso", "Whisky", "Xilografía", "Yoyo", "Zoológico", "Alabanza", "Beso", "Caramelo",
                "Dibujo", "Estrella", "Flauta", "Guitarra", "Hada", "Iglesia", "Juguete", "Kilogramo", "Lobo", "Mar",
                "Nido", "Océano", "Pantalón", "Quirófano", "Reloj", "Sapo", "Trenza", "Unicornio", "Vela", "Zapato"));
        players = new HashMap<>();
        colors = new String[] {"Rojo", "Amarillo", "Azul", "Verde", "Naranja"};
    }

    public String getRandomWord(){
        Random random = new Random();
        int randomIndex = random.nextInt(words.size());
        return words.get(randomIndex);
    }

    public void deleteWord(String word){
        words.remove(word);
    }

    public void addPlayer(Player player){
        players.putIfAbsent(player.getColor(), player);
    }

    public void addPointToPlayer(String color, String word) {
        players.get(color).addPoints(word.length());
    }

    public String getColorByPlayers () {
        return colors[players.keySet().size()];
    }

    public void doDamage(String color, String word) {
        players.get(color).decreaseDamage(word.length());
    }


    public Player isThereAWinner() {
        int alive = 0;
        for (Player player : players.values()){
            if (player.isAlive()){
                alive++;
                winner = player;
            }
        }
        if (alive != 1){
            winner = null;
        }
        return winner;
    }

    public int getAmountOfPlayers () {
        return players.size();
    }
    @Override
    public String toString() {
        return "TypeFight{" +
                "winner=" + winner +
                ", players=" + players +
                '}';
    }
}
