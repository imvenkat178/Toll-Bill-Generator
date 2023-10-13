package com.cts.TollBill;

import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cts.TollBill.dao.TollDAO;
import com.cts.TollBill.dao.UserDAO;
import com.cts.TollBill.entity.Toll;
import com.cts.TollBill.entity.User;
import com.cts.TollBill.exception.EmailAleadyFoundException;
import com.cts.TollBill.exception.TollAlreadyFoundException;
import com.cts.TollBill.exception.TollNotFoundException;
import com.cts.TollBill.exception.UserNotFoundException;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class TollBillApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Autowired
	private UserDAO userDao;
	
	@Autowired
	private TollDAO tollDao;
	
	@Test
	@Order(1)
	public void saveUserTest() throws EmailAleadyFoundException
	{

        User user = User.builder()
                .firstName("Ramesh")
                .lastName("Fadatare")
                .email("ramesh@abc.com")
                .password("Ramesh@123")
                .gender("Male")
                .contact("1233443423")
                .dob("2000-09-23")
                .build();

        userDao.saveUser(user);

        Assertions.assertThat(user.getId()).isGreaterThan(0);
    }
	
	@Test
	@Order(2)
	public void getUserByEmailIdTest() throws UserNotFoundException
	{

        User user = userDao.getUserByEmailId("ramesh@abc.com");
        Assertions.assertThat(user.getEmail()).isEqualTo("ramesh@abc.com");
    }
	
	
	@Test
	@Order(3)
	public void getListOfUsersTest()
	{
        List<User> users = userDao.getUsers();
        Assertions.assertThat(users.size()).isGreaterThan(0);
    }
	
	@Test
	@Order(4)
	public void updateUserTest() throws UserNotFoundException
	{
        User user = userDao.getUserByEmailId("ramesh@abc.com");
        user.setContact("1111222234");
        userDao.updateUser(user);
        Assertions.assertThat(user.getContact()).isEqualTo("1111222234");
    }

	@Test
	@Order(5)
	public void deleteUserTest() throws UserNotFoundException
	{
        User user = userDao.getUserByEmailId("ramesh@abc.com");
        userDao.deleteUser(user.getId());
        
        User user2;
        try
        {
        	user2 =userDao.getUserByEmailId("ramesh@abc.com");
        }
        catch(Exception ex)
        {
        	user2=null;
        }

        System.out.println("In delete User"+user2);

        Assertions.assertThat(user2).isNull();
    }
	
	//testing toll dao
	@Test
	@Order(6)
	public void saveTollTest() throws TollAlreadyFoundException
	{

        Toll toll = Toll.builder()
                .source("ABC")
                .destination("XYZ")
                .price(3547)
                .build();

        tollDao.saveToll(toll);

        Assertions.assertThat(toll.getId()).isGreaterThan(0);
    }
	
	@Test
	@Order(7)
	public void getTollBySourceAndDestinationTest() throws TollNotFoundException 
	{

        Toll toll = tollDao.getToll("ABC", "XYZ");
        Assertions.assertThat(toll.getPrice()).isEqualTo(3547);
    }
	
	
	@Test
	@Order(8)
	public void getListOfTollsTest()
	{
        List<Toll> tolls = tollDao.getTolls();
        Assertions.assertThat(tolls.size()).isGreaterThan(0);
    }
	
	@Test
	@Order(9)
	public void updateTollTest() throws TollNotFoundException 
	{
        Toll toll = tollDao.getToll("ABC", "XYZ");
        toll.setPrice(123);
        tollDao.updateToll(toll);
        Assertions.assertThat(toll.getSource()).isEqualTo("ABC");
    }

	@Test
	@Order(10)
	public void deleteTollTest() throws TollNotFoundException
	{
        Toll toll = tollDao.getToll("ABC", "XYZ");
        tollDao.deleteToll(toll.getId());
        
        Toll toll2;
        try
        {
        	toll2 =tollDao.getToll("ABC", "XYZ");
        }
        catch(TollNotFoundException ex)
        {
        	toll2=null;
        }
        Assertions.assertThat(toll2).isNull();
    }
}
