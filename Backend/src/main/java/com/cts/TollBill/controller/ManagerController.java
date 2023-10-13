package com.cts.TollBill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.TollBill.entity.Toll;
import com.cts.TollBill.exception.TollAlreadyFoundException;
import com.cts.TollBill.service.TollService;

@RestController
@RequestMapping("tollbill")
@CrossOrigin(origins = "http://localhost:4200/")
public class ManagerController {
	
	@Autowired
	private TollService tollService;
	
	@PostMapping("/manager/toll")              
	public void saveToll(@RequestBody Toll toll) throws TollAlreadyFoundException
	{
		tollService.saveToll(toll);
	}

}
