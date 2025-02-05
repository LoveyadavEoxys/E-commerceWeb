package com.eCommerceMain.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prodId;

    private String prodName;
    private Double price;
    private String description;
    private Long quantity;

    @ManyToOne(fetch = FetchType.EAGER) 
    @JoinColumn(name = "sellerId", nullable = false)  
    @JsonBackReference 
    private User seller;
   
    private String category;

    public Product() {}

    public Product(String prodName, Double price, String description, Long quantity, User seller, String category) {
        this.prodName = prodName;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.seller = seller;
        this.category = category;
    }

    public Long getProdId() { return prodId; }
    public void setProdId(Long prodId) { this.prodId = prodId; }

    public String getProdName() { return prodName; }
    public void setProdName(String prodName) { this.prodName = prodName; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Long getQuantity() { return quantity; }
    public void setQuantity(Long quantity) { this.quantity = quantity; }

    public User getSeller() { return seller; }
    public void setSeller(User seller) { this.seller = seller; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    @Override
    public String toString() {
        return "Product{" +
                "prodId=" + prodId +
                ", prodName='" + prodName + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", quantity=" + quantity +
                ", seller=" + (seller != null ? seller.getUserId() : "null") +
                ", category='" + category + '\'' +
                '}';
    }
}
