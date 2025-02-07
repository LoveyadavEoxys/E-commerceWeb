package com.eCommerceMain.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.eCommerceMain.backend.dto.Response;
import com.eCommerceMain.backend.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService cartService;

	@PutMapping("/add/{userId}/{productId}/{quantity}")
	public Response addProductToCart(@PathVariable Long userId, @PathVariable Long productId,
			@PathVariable Long quantity) {

		return cartService.addProductToCart(userId, productId, quantity);

	}

	@GetMapping("/{userId}")
	public Response getProductFromCart(@PathVariable Long userId) {

		return cartService.getProductFromCart(userId);

	}
	@DeleteMapping("/{userId}/{prodId}")
	public Response removeProductFromCart(@PathVariable Long userId,@PathVariable Long prodId)
	{
		return cartService.removeProductFromCart(userId,prodId); 
	}
} 
