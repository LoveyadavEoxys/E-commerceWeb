package com.eCommerceMain.backend.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "order_item")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;


    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Long quantity;
    

    @Column(nullable = false)
    private Double price;

    

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double prise) {
		this.price = prise;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	


  
}
