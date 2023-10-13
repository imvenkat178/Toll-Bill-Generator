package com.cts.TollBill.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Session;
//import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cts.TollBill.entity.Toll;
import com.cts.TollBill.exception.TollAlreadyFoundException;
import com.cts.TollBill.exception.TollNotFoundException;


@Repository
public class TollDAOImp implements TollDAO{
	
	
	@PersistenceContext
    private EntityManager entityManager;

	@Override
	@Transactional
	public List<Toll> getTolls()                  
	{
		Session session = entityManager.unwrap( Session.class );
		List<Toll> tolls = session.createQuery("from Toll",Toll.class).list();
		return tolls;
	}
	
	@Override
    @Transactional
    public Toll getToll(String source, String destination) throws TollNotFoundException    
	{
        Session session = entityManager.unwrap( Session.class );
        Query<Toll> q = session.createQuery("from Toll t where t.source=:source and t.destination=:destination",Toll.class);
        q.setParameter("source", source);
        q.setParameter("destination", destination);     
        Toll toll = q.uniqueResult();
        if(toll==null)
        {
            throw new TollNotFoundException("Tolls at this way are not found");
        }
        return toll;
    }
	
	@Override
	@Transactional
	public Toll getTollBySourceAndDestination(String source, String destination) throws TollAlreadyFoundException
	{
        Session session = entityManager.unwrap( Session.class );
        Query<Toll> q = session.createQuery("from Toll t where t.source=:source and t.destination=:destination",Toll.class);
        q.setParameter("source", source);
        q.setParameter("destination", destination);
        Toll toll = q.uniqueResult();
        if(toll!=null)
        {
        	throw new TollAlreadyFoundException("Toll on this way Already Found");
        }
        return toll;
	}

	@Override
	@Transactional
	public void saveToll(Toll toll) throws TollAlreadyFoundException      
	{
		Session session = entityManager.unwrap( Session.class );
		Toll istoll = this.getTollBySourceAndDestination(toll.getSource(), toll.getDestination());
		if(istoll==null)
		{
			session.saveOrUpdate(toll);
		}
	}

	@Override
	@Transactional
	public void deleteToll(int id) throws TollNotFoundException              
	{
		Session session = entityManager.unwrap( Session.class );
		Toll toll = session.get(Toll.class, id);
		if(toll==null)
		{
			throw new TollNotFoundException("Tolls at this way are not found");
		}
		session.remove(toll);
	}
	
	@Override
	@Transactional
	public List<Toll> fetchAllPendingTolls()      
	{
		Session session = entityManager.unwrap( Session.class );
		Query<Toll> q = session.createQuery("from Toll t where t.status=:status",Toll.class);
		q.setParameter("status", "pending");
		List<Toll> tolls = q.list();
		return tolls;
	}
	
	@Override
	@Transactional
	public void updateToll(Toll toll)                   
	{
		Session session = entityManager.unwrap( Session.class );
		session.saveOrUpdate(toll);
	}

	@Override
	@Transactional
	public Toll getTollById(int id) throws TollNotFoundException    
	{
		Session session = entityManager.unwrap( Session.class );
		Toll toll = session.get(Toll.class,id);
		if(toll==null)
		{
			throw new TollNotFoundException("Toll Not Found");
		}
		return toll;
	}

	@Override
	@Transactional
	public List<String> fetchAllSources()     
	{
		Session session = entityManager.unwrap(Session.class);
		List<String> sourceslist = session.createQuery("select distinct t.source from Toll t where t.status='approved'", String.class).list();
		return sourceslist;
	}

	@Override
	@Transactional
	public List<String> fetchAllDestinatios()        
	{
		Session session = entityManager.unwrap(Session.class);
		List<String> destinationlist = session.createQuery("select distinct t.destination from Toll t where t.status='approved'", String.class)
				.list();
		return destinationlist;
	}
}
