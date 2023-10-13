package com.cts.TollBill.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import jakarta.persistence.Entity;
//import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Toll {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String source;
	private String destination;
	private float price;
	private String status;
	
	public Toll(String source, String destination, float price, String status) {
		super();
		this.source = source;
		this.destination = destination;
		this.price = price;
		this.status = status;
	}
}
