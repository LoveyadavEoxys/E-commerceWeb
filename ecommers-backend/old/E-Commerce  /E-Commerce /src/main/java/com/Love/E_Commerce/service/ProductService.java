package com.Love.E_Commerce.service;

import java.util.ArrayList;

import java.util.List;
import org.springframework.stereotype.Service;

import com.Love.E_Commerce.model.Product;

@Service
public class ProductService {

	List<Product> products = new ArrayList<>();

	public ProductService() {

		products.add(new Product(1, "Smartphone", "Latest model with 128GB storage and 6GB RAM.", 599.99, 100,
				"Electronics", "https://example.com/images/smartphone.jpg"));
		products.add(new Product(2, "Running Shoes", "Comfortable running shoes with excellent grip.", 79.99, 200,
				"Fashion", "https://example.com/images/running-shoes.jpg"));
		products.add(new Product(3, "Laptop", "Powerful laptop with 16GB RAM and 512GB SSD.", 999.99, 50, "Electronics",
				"https://example.com/images/laptop.jpg"));
	}

	public List<Product> getProduct()  {
		return products;
	}

	public Product getProductById(long prodId) {
		for (int i = 0; i < products.size(); i++) {
			if (products.get(i).getId() == prodId) {
				return products.get(i);
			}

		}

		return new Product(69, "Running Shoes", "Comfortable running shoes with excellent grip.", 79.99, 200, "Fashion",
				"https://example.com/images/running-shoes.jpg");
	}

	public void addProduct(Product newProduct) {
		System.out.print(newProduct.getId());

	}

	public void updateProduct(Product updatedProduct) {
		int index = 0;
		for (int i = 0; i < products.size(); i++) {

			if (updatedProduct.getId() == products.get(i).getId()) {
				index = (int) updatedProduct.getId();
			}
			products.set(index, updatedProduct);
		}

	}

	public void deleteProduct(long prodId) {

		for (int i = 0; i < products.size(); i++) {

			if (prodId == products.get(i).getId()) {
				products.remove(i);
			}

		}

	}

}
