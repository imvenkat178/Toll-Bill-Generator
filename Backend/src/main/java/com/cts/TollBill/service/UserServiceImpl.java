package com.cts.TollBill.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.TollBill.dao.UserDAO;
import com.cts.TollBill.entity.User;
import com.cts.TollBill.exception.EmailAleadyFoundException;
import com.cts.TollBill.exception.UserNotFoundException;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDAO userdao;

	@Override
	public List<User> getUsers() {
		return userdao.getUsers();
	}

	@Override
	public User getUser(int id) throws UserNotFoundException {
		return userdao.getUser(id);
	}

	@Override
	public void saveUser(User user) throws EmailAleadyFoundException {
		userdao.saveUser(user);
	}

	@Override
	public void deleteUser(int id) throws UserNotFoundException {
		userdao.deleteUser(id);
	}

	@Override
	public User getUserByEmailId(String emailId) 
	{
		return userdao.getUserByEmailId(emailId);
	}

	@Override
	public User Login(String emailId, String password) throws UserNotFoundException {
		return userdao.Login(emailId, password);
	}

	@Override
	public List<User> fetchAllPendingManagers() {
		return userdao.fetchAllPendingManagers();
	}

	@Override
	public void updateUser(User user) {
		userdao.updateUser(user);
	}

}
