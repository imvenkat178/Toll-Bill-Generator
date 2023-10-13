package com.cts.TollBill.exception;

@SuppressWarnings("serial")
public class TollAlreadyFoundException extends Exception{
	public TollAlreadyFoundException(String msg)
	{
		super(msg);
	}

}
