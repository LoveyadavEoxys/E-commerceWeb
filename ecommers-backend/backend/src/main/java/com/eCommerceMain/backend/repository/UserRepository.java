package com.eCommerceMain.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.eCommerceMain.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	boolean existsByEmail(String email);
	
	User findByEmail(String email);
	
 
}
