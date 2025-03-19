package com.eCommerceMain.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eCommerceMain.backend.entity.Order;
import com.eCommerceMain.backend.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{

	List<OrderItem> findByOrder(Order order);

}
