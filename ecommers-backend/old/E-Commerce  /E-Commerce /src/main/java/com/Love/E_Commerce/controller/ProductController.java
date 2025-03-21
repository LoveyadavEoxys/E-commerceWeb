package com.Love.E_Commerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Love.E_Commerce.model.Product;
import com.Love.E_Commerce.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	private ProductService service;

	@GetMapping("/products")
	public List<Product> getproduct() {
		return service.getProduct();
	}

	@GetMapping("/products/{prodId}")
	public Product getProductById(@PathVariable long prodId) {
		return service.getProductById(prodId);
	}

	@PostMapping("/products")
	public void addProduct(@RequestBody Product newProduct) {
		service.addProduct(newProduct);
	}
	@PutMapping("/products")
	public void updateProduct(@RequestBody Product updatedProduct)
	{
		service.updateProduct(updatedProduct);
		
	}
	@DeleteMapping("/products/{prodId}")
    public void deleteProduct(@PathVariable long prodId)
    { 
		service.deleteProduct(prodId);
		
    }

}
