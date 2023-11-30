package edu.eci.arsw.typefight.service;

import edu.eci.arsw.typefight.model.TypeFight;
import edu.eci.arsw.typefight.repository.TypeFightRepository;
import edu.eci.arsw.typefight.config.RedisConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.Serializable;

@Service
public class TypeFightService {
    @Autowired
    TypeFightRepository typeFightRepository;

    private static final String TYPE_FIGHT_KEY = "sharedTypeFight";

    @Autowired
    private RedisTemplate<String, TypeFight> redisTemplate;

    @PostConstruct
    public TypeFight loadOrCreateTypeFight() {
        ValueOperations<String, TypeFight> ops = redisTemplate.opsForValue();
        TypeFight typeFight = ops.get(TYPE_FIGHT_KEY);

        if (typeFight == null) {
            System.out.println("creando");
            typeFight = new TypeFight(); // Crea una nueva instancia si no está en Redis
            ops.set(TYPE_FIGHT_KEY, typeFight); // Almacena en Redis
        }
        return typeFight;

        // Usa 'typeFight' en tu aplicación
    }

    public void saveSharedTypeFight(TypeFight typeFight) {
        redisTemplate.opsForValue().set(TYPE_FIGHT_KEY, typeFight);
    }
}
