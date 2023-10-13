package com.cts.TollBill.dao;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cts.TollBill.entity.User;
import com.cts.TollBill.exception.EmailAleadyFoundException;
import com.cts.TollBill.exception.UserNotFoundException;


@Repository
public class UserDAOImp implements UserDAO{
	
	@PersistenceContext
    private EntityManager entityManager;


	@Override
	@Transactional
	public List<User> getUsers() {
		Session session = entityManager.unwrap( Session.class );
		List<User> users = session.createQuery("from User",User.class).list();
		return users;
	}

	@Override
	@Transactional
	public User getUser(int id) throws UserNotFoundException {
		Session session = entityManager.unwrap( Session.class );
		User user = session.get(User.class,id);
		if(user==null)
		{
			throw new UserNotFoundException("User Not Found");
		}
		return user;
	}

	@Override
	@Transactional
	public User Login(String emailId, String password) throws UserNotFoundException       
	{
		User user = this.getUserByEmailId(emailId);
		if(user==null)
		{
			throw new UserNotFoundException("User Not Found");
		}                                                          
		if(user.getPassword().equals(password) && user.getStatus().equals("approved"))
		{
			return user;
		}
		else
		{
			throw new UserNotFoundException("User Not Found");
		}
	}
	

	@Override
	@Transactional
	public void saveUser(User user) throws EmailAleadyFoundException     
	{
		Session session = entityManager.unwrap( Session.class );
		User emailuser = this.getUserByEmailId(user.getEmail());
		if(emailuser != null)
		{
			throw new EmailAleadyFoundException("Email Already Found");
		}
		session.save(user);
	}
	
	@Override
	@Transactional
	public void updateUser(User user)        
	{
		Session session = entityManager.unwrap( Session.class );
		session.saveOrUpdate(user);
	}

	@Override
	@Transactional
	public void deleteUser(int id) throws UserNotFoundException        
	{
		Session session = entityManager.unwrap( Session.class );
		User user = this.getUser(id);
		session.remove(user);
	}

	@Override
	@Transactional
	public User getUserByEmailId(String emailId)      
	{
		Session session = entityManager.unwrap( Session.class );
		Query<User> query = session.createQuery("from User u where u.email=:email", User.class);
	    query.setParameter("email", emailId);
	    User user = query.uniqueResult();
		return user;
	}
	
	@Override
	@Transactional
	public List<User> fetchAllPendingManagers()              
	{
		 CriteriaBuilder cb=entityManager.getCriteriaBuilder();
	     CriteriaQuery cq=cb.createQuery(User.class);

	     Root<User> user=cq.from(User.class);

	     Predicate statusPredicate=cb.equal(user.get("status"),"pending");
	     Predicate managerPredicate=cb.equal(user.get("usertype"),"Manager");

	     cq.where(statusPredicate,managerPredicate);

	     TypedQuery<User> query=entityManager.createQuery(cq);

	     return query.getResultList();
	}

}