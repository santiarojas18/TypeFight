package edu.eci.arsw.typefight;

import edu.eci.arsw.typefight.model.Player;
import edu.eci.arsw.typefight.model.TypeFight;
import edu.eci.arsw.typefight.service.PlayerService;
import edu.eci.arsw.typefight.service.TypeFightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"edu.eci.arsw.typefight"})
public class TypeFightApplication {
	@Autowired
	PlayerService playerService;
	@Autowired
	TypeFightService typeFightService;

	public static void main(String[] args) {
		SpringApplication.run(TypeFightApplication.class, args);
	}

	@Bean(name = "database")
	public CommandLineRunner run() {
		return args -> {
			//Player playerToAdd = new Player("Santiago", "rojo");
			//playerService.addPlayer(playerToAdd);
			//System.out.println(playerService.getPlayerById("Santiago"));

			TypeFight typeToAdd = new TypeFight();
			typeFightService.addTypeFight(typeToAdd);
			//System.out.println((typeFightService.getTypeFightById(1)));
		};
	}
}
