package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
public class WelcomeController {
	
	@RequestMapping(value = "/welcome")
	public static String welcome() {
		return "Ahsan Nadeem";
	}
}