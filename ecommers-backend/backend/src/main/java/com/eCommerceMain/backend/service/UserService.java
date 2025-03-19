package com.eCommerceMain.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.eCommerceMain.backend.dto.LoginResonse;
import com.eCommerceMain.backend.dto.Response;
import com.eCommerceMain.backend.entity.User;
import com.eCommerceMain.backend.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	JWTService jWtService;

	@Autowired
	AuthenticationManager authManager;
	@Autowired
	private UserRepository userRepository;
	Response response = new Response();
	LoginResonse loginResonse = new LoginResonse();
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

	public Response registerUser(User newUser) {

		if (userRepository.existsByEmail(newUser.getEmail())) {
			response.setStatus(false);
			response.setMessage("Email is already registered.");
			response.setData(null);
			return response;
		}
		newUser.setPassword(encoder.encode(newUser.getPassword()));

		try {
			userRepository.save(newUser);
			response.setData(newUser);
			response.setMessage("success");
			response.setStatus(true);
			return response;
		} catch (Exception e) {
			response.setData(newUser);
			response.setMessage("not registered");
			response.setStatus(false);
			return response;
		}
	}

//    public Response loginUser(String email, String password) {
//         
//        
//        if(!userRepository.existsByEmail(email)) {  
//            response.setStatus(false);
//            response.setMessage("User is not present.");
//            response.setData(null);
//            return response;
//        } else if (!password.equals(userRepository.findByEmail(email).getPassword())) {
//            response.setStatus(false);
//            response.setMessage("Password is not correct.");
//            response.setData(null);
//            return response;
//        } else {
//            try {
//                response.setData(userRepository.findByEmail(email));
//                response.setMessage("Login success");
//                response.setStatus(true);
//                return response; 
//            } catch (Exception e) {
//                response.setData(null);
//                response.setMessage(e.getMessage());
//                response.setStatus(false);
//                return response; 
//            }
//        }
//    }

	public LoginResonse loginUser(String email, String password) {
		System.out.println("                                        authintication result         ");
		Authentication authentication = authManager
				.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		System.out.println("                                        authintication result  "
				+ authentication.isAuthenticated() + "                                  ");
		if (authentication.isAuthenticated()) {
			loginResonse.setToken(jWtService.generateToken(email));
			loginResonse.setUserId((userRepository.getUserByEmail(email)).getUserId());
			loginResonse.setStatus(true);
			return loginResonse;

		}
		
		loginResonse.setToken(null);
		loginResonse.setUserId(null); 
		loginResonse.setStatus(false);
		return loginResonse;
	}

	public Response getUser(Long userId) {
		  
      if(!userRepository.existsById(userId)) {  
          response.setStatus(false);
          response.setMessage("User is not present.");
          response.setData(null);
          return response;
      } 
      else {
          try {
              response.setData(userRepository.findById(userId));
              response.setMessage("Login success");
              response.setStatus(true);
              return response; 
          } catch (Exception e) {
              response.setData(null);
              response.setMessage(e.getMessage());
              response.setStatus(false);
              return response; 
          }
      }
	}

}
