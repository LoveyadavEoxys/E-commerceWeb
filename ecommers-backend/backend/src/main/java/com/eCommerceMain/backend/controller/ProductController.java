package com.eCommerceMain.backend.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerceMain.backend.dto.Response;

import com.eCommerceMain.backend.entity.Product;
import com.eCommerceMain.backend.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	ProductService productService;
	
	
	@GetMapping("/products")
	public Response getProducts()
	{
		return productService.getProducts();
	}
	
	@PostMapping("/products")
	@CrossOrigin(origins = "http://localhost:3000")
	public Response addProduct(@RequestBody ArrayList<Product> product)
	
	{ 
		 return productService.addProduct(product);
	}
	@DeleteMapping("/product/delete/{id}")
	public Response deleteProduct(@PathVariable("id") Long id) {
	    return  productService.deleteProduct(id);
	}
    @PutMapping("product/update")
	public Response updateProduct(@RequestBody Product updateProduct)
	{
		return productService.updateProduct(updateProduct);
	}
	
	
}
