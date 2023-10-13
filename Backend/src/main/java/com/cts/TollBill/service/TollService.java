package com.cts.TollBill.service;

import java.util.List;

import com.cts.TollBill.entity.Toll;
import com.cts.TollBill.exception.TollAlreadyFoundException;
import com.cts.TollBill.exception.TollNotFoundException;


public interface TollService {
	
	public List<Toll> getTolls();
	public Toll getToll(String source,String destination) throws TollNotFoundException;
	public void saveToll(Toll toll) throws TollAlreadyFoundException;
	public void deleteToll(int id) throws TollNotFoundException;
	public List<Toll> fetchAllPendingTolls();
	void updateToll(Toll toll);
	public Toll getTollById(int id) throws TollNotFoundException;
	public List<String> fetchAllSources();
	public List<String> fetchAllDestinatios();
	Toll getTollBySourceAndDestination(String source, String destination) throws TollAlreadyFoundException;

}
