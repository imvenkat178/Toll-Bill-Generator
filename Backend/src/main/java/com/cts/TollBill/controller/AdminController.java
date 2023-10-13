package com.cts.TollBill.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.TollBill.entity.User;
import com.cts.TollBill.service.UserService;

@RestController
@RequestMapping("tollbill")
@CrossOrigin(origins = "http://localhost:4200/")
public class AdminController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/admin/managerrequests")         
	public List<User> getPendingManagers()
	{
		List<User> pendingManagers = userService.fetchAllPendingManagers();
		return pendingManagers;
	}
}
