package com.cts.TollBill.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cts.TollBill.entity.Toll;
import com.cts.TollBill.exception.TollNotFoundException;
import com.cts.TollBill.service.TollService;

@RestController
@RequestMapping("tollbill")
@CrossOrigin(origins = "http://localhost:4200/")
public class TollController {
	
	@Autowired
	private TollService tollService;
	
	@GetMapping("/tolls")             
	public List<Toll> getTolls()
	{
		List<Toll> tolls = tollService.getTolls();
		return tolls;
	}
	
	@GetMapping("/toll/search")    
	public Toll getToll(@RequestParam(value="source")String source,@RequestParam(value="destination")String destination) throws TollNotFoundException
	{
		Toll toll = tollService.getToll(source, destination);
		return toll;
	}
	
	
	@DeleteMapping("/toll/{id}")     
	public void deleteToll(@PathVariable("id")int id) throws TollNotFoundException
	{
		tollService.deleteToll(id);
	}
	
	@GetMapping("/admin/tollrequests")      
	public List<Toll> getPendingTollRequests()
	{
		List<Toll> tolls = tollService.fetchAllPendingTolls();
		return tolls;
	}
	
	@PutMapping("/approvetoll")           
	public void approveToll(@RequestBody Toll toll) 
	{
		tollService.updateToll(toll);
	}
	
	@PutMapping("/updatetoll/{id}")                
	public void updateToll(@PathVariable int id, @RequestBody Toll toll)
	{
		Toll t= Toll.builder().id(id)
				.source(toll.getSource())
				.destination(toll.getDestination())
				.price(toll.getPrice())
				.status("pending").build();
		
		tollService.updateToll(t);
	}
	
	@GetMapping("/toll/{id}")               
	public Toll getToll(@PathVariable("id") int id) throws TollNotFoundException
	{
		Toll toll = tollService.getTollById(id);     
		return toll;
	}
	
	@GetMapping("/toll/fetchsources")               
    public List<String> fetchAllSources()
    {
        List<String> sourceslist = tollService.fetchAllSources();
        return sourceslist;
    }

    @GetMapping("/toll/fetchdestinations")
    public List<String> fetchAllDestination()         
    {
        List<String> destinationlist = tollService.fetchAllDestinatios();
        return destinationlist;
    }

}
