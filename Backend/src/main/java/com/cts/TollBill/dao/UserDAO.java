package com.cts.TollBill.dao;

import java.util.List;

import com.cts.TollBill.entity.User;
import com.cts.TollBill.exception.EmailAleadyFoundException;
import com.cts.TollBill.exception.UserNotFoundException;

public interface UserDAO {
	
	public List<User> getUsers();
	public User getUser(int id) throws UserNotFoundException;
	public void saveUser(User user) throws EmailAleadyFoundException;
	public void deleteUser(int id) throws UserNotFoundException;
	public User getUserByEmailId(String emailId);
	public User Login(String emailId, String password) throws UserNotFoundException;
	public List<User> fetchAllPendingManagers();
	void updateUser(User user);
}
