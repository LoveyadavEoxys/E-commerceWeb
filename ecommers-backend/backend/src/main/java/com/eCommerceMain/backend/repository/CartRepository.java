package com.eCommerceMain.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eCommerceMain.backend.entity.Cart;
import com.eCommerceMain.backend.entity.User;

public interface CartRepository extends JpaRepository<Cart, Long> {
	  Optional<Cart> findByUser( User user); 
	  
	 

}
