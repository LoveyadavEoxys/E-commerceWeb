package com.eCommerceMain.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerceMain.backend.dto.Response;
import com.eCommerceMain.backend.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@PostMapping("/{userId}/{productId}")
	public Response placeOrder(@PathVariable Long userId,@PathVariable Long productId)
	{
		return orderService.placeOrder(userId, productId);
	}
	@PostMapping("/{userId}")
	public Response placeOrderByCart(@PathVariable Long userId)
	{
		return orderService.placeOrderByCart(userId);
	}
	 
	
	
	@GetMapping("/{userId}")
	    public Response getOrdersByUser(@PathVariable Long userId) {
	        return orderService.getOrderByCart(userId);
	    }
	
	@GetMapping
    public Response getAllOrders() {
        return orderService.getAllOrders();
    }


}
