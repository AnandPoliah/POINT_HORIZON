package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

@Entity
@Table(name = "buslist")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
	private String bname;
    private String fromtime;
    private String totime;
    private double rating;
    private int price;
    private int availseats;
    private String cancellation;
    private int cancelbefore;
    private String livetracking;
    
    private String fromplace; // New variable for "from"
    private String toplace; // New variable for "to"
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getFromtime() {
		return fromtime;
	}
	public void setFromtime(String fromtime) {
		this.fromtime = fromtime;
	}
	public String getTotime() {
		return totime;
	}
	public void setTotime(String totime) {
		this.totime = totime;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getAvailseats() {
		return availseats;
	}
	public void setAvailseats(int availseats) {
		this.availseats = availseats;
	}
	public String getCancellation() {
		return cancellation;
	}
	public void setCancellation(String cancellation) {
		this.cancellation = cancellation;
	}
	public int getCancelbefore() {
		return cancelbefore;
	}
	public void setCancelbefore(int cancelbefore) {
		this.cancelbefore = cancelbefore;
	}
	public String getLivetracking() {
		return livetracking;
	}
	public void setLivetracking(String livetracking) {
		this.livetracking = livetracking;
	}
	public String getFromplace() {
		return fromplace;
	}
	public void setFromplace(String fromplace) {
		this.fromplace = fromplace;
	}
	public String getToplace() {
		return toplace;
	}
	public void setToplace(String toplace) {
		this.toplace = toplace;
	}

   
}
