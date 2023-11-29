package edu.eci.arsw.typefight.service;

import edu.eci.arsw.typefight.model.TypeFight;
import edu.eci.arsw.typefight.repository.TypeFightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypeFightService {
    @Autowired
    TypeFightRepository typeFightRepository;

    public TypeFight addTypeFight (TypeFight typeFight) {
        return typeFightRepository.save(typeFight);
    }

    public TypeFight getTypeFightById (Integer id) {
        return typeFightRepository.findOne(id);
    }

}
