package com.eCommerceMain.backend.entity;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails {

    private User user;

    public UserPrincipal(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // You can return authorities/roles here if applicable
        return null;
    }

    @Override
    public String getPassword() {
        // Check if user is not null to avoid NullPointerException
        if (user != null) {
        	System.out.println("this is password "+user.getPassword());
            return user.getPassword();
        }
        return null; // Handle the case where user is null
    }

    @Override
    public String getUsername() {
        // Check if user is not null to avoid NullPointerException
        if (user != null) {
        	System.out.println("this is email "+user.getEmail());
            return user.getEmail();
        }
        return null; // Handle the case where user is null
    }

    @Override
    public boolean isAccountNonExpired() {
        // Implement logic if needed
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // Implement logic if needed
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // Implement logic if needed
        return true;
    }

    @Override
    public boolean isEnabled() {
        // Implement logic if needed
        return true;
    }
}
