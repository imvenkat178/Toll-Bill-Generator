package com.cts.TollBill.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserRestExceptionHandler {

	public UserRestExceptionHandler() {
		// TODO Auto-generated constructor stub
	}
	
	@ExceptionHandler
	public ResponseEntity<UserErrorResponse> handleException(UserNotFoundException e)
	{
		UserErrorResponse c = new UserErrorResponse(
				HttpStatus.NOT_FOUND.value(),
				"Enter Valid Email Id",
				System.currentTimeMillis());
		return new ResponseEntity<>(c,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler
	public ResponseEntity<UserErrorResponse> handleException(EmailAleadyFoundException e)
	{
		UserErrorResponse c = new UserErrorResponse(
				HttpStatus.BAD_REQUEST.value(),
				"Email Already Existed/Registered",
				System.currentTimeMillis());
		return new ResponseEntity<>(c,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler
	public ResponseEntity<UserErrorResponse> handleException(Exception e)
	{
		UserErrorResponse c = new UserErrorResponse(
				HttpStatus.BAD_REQUEST.value(),
				e.getMessage(),
				System.currentTimeMillis());
		return new ResponseEntity<>(c,HttpStatus.BAD_REQUEST);
	}

}
