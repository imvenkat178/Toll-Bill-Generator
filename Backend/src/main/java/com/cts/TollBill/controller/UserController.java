package com.cts.TollBill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cts.TollBill.entity.User;
import com.cts.TollBill.exception.EmailAleadyFoundException;
import com.cts.TollBill.exception.UserNotFoundException;
import com.cts.TollBill.service.UserService;

@RestController
@RequestMapping("tollbill")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController 
{
	@Autowired
	private UserService userService;
	
	@PostMapping("/user")                   
	public void saveUser(@RequestBody User user) throws UserNotFoundException, EmailAleadyFoundException
	{
		userService.saveUser(user);
	}

	@PutMapping("/updatemanager")         
	public void updateManager(@RequestBody User user) throws UserNotFoundException
	{
		userService.updateUser(user);
	}
	
	@PostMapping("/user/login")                 
	public User Login(@RequestBody User user) throws UserNotFoundException
	{
		User loggeduser = userService.Login(user.getEmail(),user.getPassword());
		return loggeduser;
	}
	
	@DeleteMapping("/user/{id}")                 
	public void deleteUser(@PathVariable("id") int id) throws UserNotFoundException
	{
		userService.deleteUser(id);
	}
	
	@GetMapping("/user")     
	public User getUserByEmailId(@RequestParam(value="emailId")String emailId) throws UserNotFoundException
	{
		User user = userService.getUserByEmailId(emailId);
		return user;
	}

}
