package com.Love.E_Commerce.model;




public class Product {
	private long prodId;
	private String prodName;
	private String prodDescription ;
	private Double price;
	private long quantity ;
	private String category;
	private String imagelink;
	public Product(long prodId, String prodName, String prodDescription, Double price, long quantity, String category,
			String imagelink) {
		super();
		this.prodId = prodId;
		this.prodName = prodName;
		this.prodDescription = prodDescription;
		this.price = price;
		this.quantity = quantity;
		this.category = category;
		this.imagelink = imagelink;
	}
	
	public long getId() {
		return prodId;
	}
	public void setId(long prodId) {
		this.prodId = prodId;
	}
	public String getName() {
		return prodName;
	}
	public void setName(String prodName) {
		this.prodName = prodName;
	}
	public String getDescription() {
		return prodDescription;
	}
	public void setDescription(String prodDescription) {
		this.prodDescription = prodDescription;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImagelink() {
		return imagelink;
	}
	public void setImagelink(String imagelink) {
		this.imagelink = imagelink;
	}
	

}
