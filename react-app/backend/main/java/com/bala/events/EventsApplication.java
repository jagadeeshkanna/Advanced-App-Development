package com.bala.events;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "KAVI EVENTS",
				version = "1.1.2",
				description = "coparate Event Management",
				contact = @Contact(
						name = "BALAKAVI B",
						email = "727721euit020@skcet.ac.in"
						)
				)
)

public class EventsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventsApplication.class, args);
	}

}
