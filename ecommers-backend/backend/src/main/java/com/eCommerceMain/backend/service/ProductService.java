package com.eCommerceMain.backend.service;

import com.eCommerceMain.backend.dto.Response;
import com.eCommerceMain.backend.entity.Product;
import com.eCommerceMain.backend.entity.User;
import com.eCommerceMain.backend.repository.ProductRepository;
import com.eCommerceMain.backend.repository.UserRepository;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private UserRepository userRepository;

	public Response addProduct(List<Product> products) {
		Response response = new Response();

		try {
			for (Product product : products) {

				if (product.getSeller() == null || product.getSeller().getUserId() == null) {
					response.setMessage("Error: Seller information is missing.");
					response.setStatus(false);
					return response;
				}

				Optional<User> seller = userRepository.findById(product.getSeller().getUserId());
				if (!seller.isPresent()) {
					response.setMessage(
							"Error: Seller with ID " + product.getSeller().getUserId() + " does not exist.");
					response.setStatus(false);
					return response;
				}

				product.setSeller(seller.get());

				System.out.println("After setting seller: " + product.getSeller());
			}

			productRepository.saveAll(products);
			response.setMessage("Products added successfully");
			response.setStatus(true);
			response.setData(products);

		} catch (Exception e) {
			response.setMessage("Error while adding products: " + e.getMessage());
			response.setStatus(false);
		}

		return response;
	}

	public Response deleteProduct(Long id) {
		Response response = new Response();
		try {

			Optional<Product> product = productRepository.findById(id);

			if (product.isPresent()) {

				productRepository.deleteById(id);
				response.setMessage("Product deleted successfully!");
				response.setStatus(true);
				response.setData(null);
			} else {

				response.setMessage("Product not found with ID: " + id);
				response.setStatus(false);
				response.setData(null);
			}
		} catch (Exception e) {

			response.setMessage("Error: " + e.getMessage());
			response.setStatus(false);
			response.setData(null);
		}

		return response;
	}

	public Response updateProduct(Product updateProduct) {

		Response response = new Response();

		try {

			Optional<Product> existingProduct = productRepository.findById(updateProduct.getProdId());

			if (existingProduct.isPresent()) {

				Product product = existingProduct.get();

				product.setProdName(updateProduct.getProdName());
				product.setPrice(updateProduct.getPrice());
				product.setDescription(updateProduct.getDescription());
				product.setQuantity(updateProduct.getQuantity());

				productRepository.save(product);

				response.setMessage("Product updated successfully!");
				response.setStatus(true);
				response.setData(product);
			} else {

				response.setMessage("Product not found with ID: " + updateProduct.getProdId());
				response.setStatus(false);
				response.setData(null);
			}
		} catch (Exception e) {

			response.setMessage("Error: " + e.getMessage());
			response.setStatus(false);
			response.setData(null);
		}

		return response;
	}

	public Response getProducts() {
		Response response = new Response();
		try {
			

			response.setData(productRepository.findAll());
			response.setMessage("products load successfully");
			response.setStatus(true);
		} catch (Exception e) {

			response.setData(null);
			response.setMessage(e.getMessage());
			response.setStatus(false);

		}
		return response;

	}

}
