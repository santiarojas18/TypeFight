package edu.eci.arsw.typefight.model;

import java.io.Serializable;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import lombok.Data;

@Data
@RedisHash("Player")
public class Player implements Serializable {
    @Id
    private String name;

    private String color;
    private Integer health;
    private Integer points;
    private boolean alive;

    public Player(String name, String color){
        this.name = name;
        this.color = color;
        health = 100;
        points = 0;
        alive = true;

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

    public Integer getHealth() {
        return health;
    }

    public void setHealth(Integer health) {
        this.health = health;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public void addPoints(int points) {
        this.points += points;
    }

    public void decreaseHealth(int damage){
        if (health - damage <= 0) {
            setAlive(false);
            health = 0;
        } else {
            health += -damage;
        }
    }

    public boolean isAlive() {
        return alive;
    }

    public void setAlive(boolean alive) {
        this.alive = alive;
    }

    @Override
    public String toString() {
        return "Player{" +
                "name='" + name + '\'' +
                ", color='" + color + '\'' +
                ", health=" + health +
                ", points=" + points +
                '}';
    }
}
