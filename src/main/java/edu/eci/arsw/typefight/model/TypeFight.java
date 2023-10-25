package edu.eci.arsw.typefight.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.concurrent.CopyOnWriteArrayList;

public class TypeFight {
    private Player winner;
    private List<Player> players;
    private static ArrayList<String> words;

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

        players = new CopyOnWriteArrayList<>();
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
        players.add(player);
    }

    @Override
    public String toString() {
        return "TypeFight{" +
                "winner=" + winner +
                ", players=" + players +
                '}';
    }
}
