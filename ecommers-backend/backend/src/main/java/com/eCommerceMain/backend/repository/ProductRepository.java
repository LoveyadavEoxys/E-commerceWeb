package com.eCommerceMain.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eCommerceMain.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	

}
