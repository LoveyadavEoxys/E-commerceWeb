package com.eCommerceMain.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eCommerceMain.backend.entity.Order;

public interface OrdersRepository extends JpaRepository<Order, Long> {

	List<Order> findByUserId(Long userId);

}
