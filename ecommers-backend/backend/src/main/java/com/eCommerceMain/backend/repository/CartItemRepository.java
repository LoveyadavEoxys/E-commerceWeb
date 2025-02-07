package com.eCommerceMain.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eCommerceMain.backend.entity.Cart;
import com.eCommerceMain.backend.entity.CartItem;
import com.eCommerceMain.backend.entity.Product;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByCart(Cart cart);
    Optional<CartItem> findByCartAndProduct(Cart cart, Product product);
   

}
