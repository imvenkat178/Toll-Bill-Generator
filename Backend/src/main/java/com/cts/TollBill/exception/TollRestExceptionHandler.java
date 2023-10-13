package com.cts.TollBill.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class TollRestExceptionHandler {

	public TollRestExceptionHandler() {
		// TODO Auto-generated constructor stub
	}
	
	@ExceptionHandler
	public ResponseEntity<TollErrorResponse> handleException(TollNotFoundException e)
	{
		TollErrorResponse c = new TollErrorResponse(
				HttpStatus.NOT_FOUND.value(),
				e.getMessage(),
				System.currentTimeMillis());
		return new ResponseEntity<>(c,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler
	public ResponseEntity<TollErrorResponse> handleException(TollAlreadyFoundException e)
	{
		TollErrorResponse c = new TollErrorResponse(
				HttpStatus.NOT_FOUND.value(),
				e.getMessage(),
				System.currentTimeMillis());
		return new ResponseEntity<>(c,HttpStatus.NOT_FOUND);
	}


}

