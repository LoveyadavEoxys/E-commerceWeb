package com.eCommerceMain.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerceMain.backend.dto.LoginDto;
import com.eCommerceMain.backend.dto.LoginResonse;
import com.eCommerceMain.backend.dto.Response;
import com.eCommerceMain.backend.entity.User;
import com.eCommerceMain.backend.service.UserService;

@RestController
public class UserController {
	@Autowired
	UserService userService;

	@PutMapping("/user")
	public Response registerUser(@RequestBody User user) {

		return userService.registerUser(user);

	}
	@PostMapping("/user")
	public LoginResonse loginUser(@RequestBody LoginDto loginDetails) {

		return userService.loginUser(loginDetails.getEmail(), loginDetails.getPassword());

	}
	@GetMapping("/getUser/{userId}")
	public Response getUser(@PathVariable Long userId) {

		return userService.getUser(userId);

	}
	
	

}
