package com.eCommerceMain.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eCommerceMain.backend.dto.Response;
import com.eCommerceMain.backend.entity.Cart;
import com.eCommerceMain.backend.entity.CartItem;
import com.eCommerceMain.backend.entity.Product;
import com.eCommerceMain.backend.entity.User;
import com.eCommerceMain.backend.repository.CartItemRepository;
import com.eCommerceMain.backend.repository.CartRepository;
import com.eCommerceMain.backend.repository.ProductRepository;
import com.eCommerceMain.backend.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class CartService {

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private CartItemRepository cartItemRepository;

	@Transactional
	public Response addProductToCart(Long userId, Long productId, Long quantity) {
		Response response = new Response();

		User user = userRepository.findById(userId).orElse(null);
		if (user == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("User not found");
			return response;
		}

		Product product = productRepository.findById(productId).orElse(null);
		if (product == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("Product not found");
			return response;
		}

		Cart cart = cartRepository.findByUser(user).orElseGet(() -> {
			Cart newCart = new Cart(user);
			return cartRepository.save(newCart);
		});

		Optional<CartItem> existingCartItem = cartItemRepository.findByCartAndProduct(cart, product);

		if (existingCartItem.isPresent()) {

			CartItem cartItem = existingCartItem.get();
			cartItem.setQuantity(cartItem.getQuantity() + quantity);
			cartItemRepository.save(cartItem);
		} else {

			CartItem cartItem = new CartItem();
			cartItem.setCart(cart);
			cartItem.setProduct(product);
			cartItem.setQuantity(quantity);
			cartItemRepository.save(cartItem);
		}

		response.setData(product);
		response.setStatus(true);
		response.setMessage("Product added to cart");
		return response;
	}

	public Response getProductFromCart(Long userId) {
		Response response = new Response();

		User user = userRepository.findById(userId).orElse(null);
		if (user == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("User not found");
			return response;
		}

		Cart cart = cartRepository.findByUser(user).orElse(null);
		if (cart == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("Cart is empty");
			return response;
		}

		List<CartItem> cartItems = cartItemRepository.findByCart(cart);

		response.setData(cartItems);
		response.setStatus(true);
		response.setMessage("Cart items loaded successfully");
		return response;
	}

	public Response removeProductFromCart(Long userId, Long productId) {
		Response response = new Response();

		
		User user = userRepository.findById(userId).orElse(null);
		if (user == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("User not found");
			return response;
		}

		
		Product product = productRepository.findById(productId).orElse(null);
		if (product == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("Product not found");
			return response;
		}

		Cart cart = cartRepository.findByUser(user).orElse(null);
		if (cart == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("Cart is empty");
			return response;
		}

		Optional<CartItem> cartItem = cartItemRepository.findByCartAndProduct(cart, product);
		if (cartItem == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("Product not found in the cart");
			return response;
		}

		cartItemRepository.delete(cartItem.get());

		response.setData(null);
		response.setStatus(true);
		response.setMessage("Product removed from cart successfully");
		return response;
	}
	public Response getTotalPrice(Long userId) {
	    Response response = new Response();

	    // Check if user exists
	    User user = userRepository.findById(userId).orElse(null);
	    if (user == null) {
	        response.setData(null);
	        response.setStatus(false);
	        response.setMessage("User not found");
	        return response;
	    }

	    // Retrieve the user's cart
	    Cart cart = cartRepository.findByUser(user).orElse(null);
	    if (cart == null) {
	        response.setData(0.0);
	        response.setStatus(true);
	        response.setMessage("Cart is empty");
	        return response;
	    }

	  
	    List<CartItem> cartItems = cartItemRepository.findByCart(cart);
	    double total = 0.0;

	    for (CartItem item : cartItems) {
	        Product product = item.getProduct();
	        if (product != null) {
	            total += item.getQuantity() * product.getPrice();
	        }
	        // Optional: Handle cases where product might be null (e.g., deleted product)
	    }

	    response.setData(total);
	    response.setStatus(true);
	    response.setMessage("Total price calculated successfully");
	    return response;
	}
	
	
}
