package com.eCommerceMain.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eCommerceMain.backend.dto.Response;
import com.eCommerceMain.backend.entity.Cart;
import com.eCommerceMain.backend.entity.CartItem;
import com.eCommerceMain.backend.entity.Order;
import com.eCommerceMain.backend.entity.OrderItem;
import com.eCommerceMain.backend.entity.Product;
import com.eCommerceMain.backend.entity.User;
import com.eCommerceMain.backend.repository.CartItemRepository;
import com.eCommerceMain.backend.repository.CartRepository;
import com.eCommerceMain.backend.repository.OrderItemRepository;
import com.eCommerceMain.backend.repository.OrdersRepository;
import com.eCommerceMain.backend.repository.ProductRepository;
import com.eCommerceMain.backend.repository.UserRepository;

@Service
public class OrderService {

	@Autowired
	private OrdersRepository orderRepository;

	@Autowired
	private OrderItemRepository orderItemRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CartRepository cartRepository;
	@Autowired
	private CartItemRepository cartItemRepository;

	@Transactional
	public Response placeOrder(Long userId, Long productId) {
		Response response = new Response();
		User user = userRepository.findById(userId).orElse(null);
		if (user == null) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("User not found");
			return response;
		}

		Optional<Product> productOptional = productRepository.findById(productId);
		if (productOptional.isEmpty()) {
			response.setData(null);
			response.setStatus(false);
			response.setMessage("product not  found");
			return response;
		}
		Product product = productOptional.get();

		Order order = new Order();
		order.setUserId(userId);
		order.setTotalAmount(product.getPrice());
		order = orderRepository.save(order);

		OrderItem orderItem = new OrderItem();
		orderItem.setOrder(order);
		orderItem.setProduct(product);
		orderItem.setQuantity(1l);
		orderItem.setPrice(product.getPrice());
		
		orderItemRepository.save(orderItem);

		response.setData(productRepository.findAll());
		response.setMessage("Order placed successfully");
		response.setStatus(true);
		return response;
	}

	public Response placeOrderByCart(Long userId) {
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
		
		for(int i =0;i<cartItems.size();i++)
		{
			Product product = cartItems.get(i).getProduct();

			Order order = new Order();
			order.setUserId(userId);
			order.setTotalAmount(product.getPrice());
			order = orderRepository.save(order);

			OrderItem orderItem = new OrderItem();
			orderItem.setOrder(order);
			orderItem.setProduct(product);
			orderItem.setQuantity( cartItems.get(i).getQuantity());
			orderItem.setPrice(product.getPrice()*cartItems.get(i).getQuantity());
			
			orderItemRepository.save(orderItem);
		}
		
		response.setData(cartItems);
		response.setStatus(true);
		response.setMessage("demo");
		return response;
	}
}
