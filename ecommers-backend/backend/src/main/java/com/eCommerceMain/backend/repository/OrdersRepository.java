package com.eCommerceMain.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eCommerceMain.backend.entity.Order;

public interface OrdersRepository extends JpaRepository<Order, Long> {

}
