package com.eCommerceMain.backend.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cartId;

	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	@OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
	@JsonIgnore
	private List<CartItem> cartItems = new ArrayList<>();

	public Cart() {
	}

	public Cart(User user) {
		this.user = user;
	}

	public Long getCartId() {
		return cartId;
	}

	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<CartItem> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<CartItem> cartItems) {
		this.cartItems.clear();
		if (cartItems != null) {
			for (CartItem item : cartItems) {
				addCartItem(item);
			}
		}
	}

	// Convenience methods
	public void addCartItem(CartItem cartItem) {
		cartItems.add(cartItem);
		cartItem.setCart(this); // Ensure bidirectional mapping
	}

	public void removeCartItem(CartItem cartItem) {
		cartItems.remove(cartItem);
		cartItem.setCart(null); 
	}
}
