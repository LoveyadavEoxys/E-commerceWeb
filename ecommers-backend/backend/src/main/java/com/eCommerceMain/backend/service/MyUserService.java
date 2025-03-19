package com.eCommerceMain.backend.service;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.eCommerceMain.backend.entity.User;
import com.eCommerceMain.backend.entity.UserPrincipal;
import com.eCommerceMain.backend.repository.UserRepository;



@Service
public class  MyUserService implements UserDetailsService {
	
	@Autowired
	UserRepository userRepo ;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		 User user =  userRepo.findByEmail(email);
		
		 if (user==null)
		 {
			 System.out.println("user Not found "); 
		 }
		return new UserPrincipal(user);
	}

}

