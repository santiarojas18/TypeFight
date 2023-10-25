package edu.eci.arsw.typefight.model;

import java.util.ArrayList;

public class Player {
    private String name;
    private String color;
    private int health;
    private ArrayList<String> writtenWords;

    public Player(String name, String color){
        this.name = name;
        this.color = color;
        health = 100;
        writtenWords = new ArrayList<>();

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public ArrayList<String> getWrittenWords() {
        return writtenWords;
    }

    public void setWrittenWords(ArrayList<String> writtenWords) {
        this.writtenWords = writtenWords;
    }

    public int getNumberOfWordsWritten(){
        return writtenWords.size();
    }

    @Override
    public String toString() {
        return "Player{" +
                "name='" + name + '\'' +
                ", color='" + color + '\'' +
                ", health=" + health +
                ", writtenWords=" + writtenWords +
                '}';
    }
}
