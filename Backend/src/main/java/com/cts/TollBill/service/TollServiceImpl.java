package com.cts.TollBill.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.TollBill.dao.TollDAO;
import com.cts.TollBill.entity.Toll;
import com.cts.TollBill.exception.TollAlreadyFoundException;
import com.cts.TollBill.exception.TollNotFoundException;

@Service
public class TollServiceImpl implements TollService {
	
	@Autowired
	private TollDAO tolldao;

	@Override
	public List<Toll> getTolls() {
		return tolldao.getTolls();
	}

	@Override
	public Toll getToll(String source, String destination) throws TollNotFoundException {
		return tolldao.getToll(source, destination);
	}

	@Override
	public void saveToll(Toll toll) throws TollAlreadyFoundException {
		tolldao.saveToll(toll);
	}

	@Override
	public void deleteToll(int id) throws TollNotFoundException {
		tolldao.deleteToll(id);
	}

	@Override
	public List<Toll> fetchAllPendingTolls() {
		return tolldao.fetchAllPendingTolls();
	}

	@Override
	public void updateToll(Toll toll) {
		tolldao.updateToll(toll);
	}

	@Override
	public Toll getTollById(int id) throws TollNotFoundException {
		return tolldao.getTollById(id);
	}

	@Override
	public List<String> fetchAllSources() {
		return tolldao.fetchAllSources();
	}

	@Override
	public List<String> fetchAllDestinatios() {
		return tolldao.fetchAllDestinatios();
	}

	@Override
	public Toll getTollBySourceAndDestination(String source, String destination) throws TollAlreadyFoundException {
		return tolldao.getTollBySourceAndDestination(source, destination);
	}

}
