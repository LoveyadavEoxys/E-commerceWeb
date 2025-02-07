package com.eCommerceMain.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eCommerceMain.backend.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{

}
