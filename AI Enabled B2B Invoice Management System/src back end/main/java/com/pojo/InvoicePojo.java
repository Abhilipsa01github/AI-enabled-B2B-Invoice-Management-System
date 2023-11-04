package com.pojo;

public class InvoicePojo {
	private String business_code, cust_number, name_customer, clear_date, 
	posting_date, document_create_date, document_create_date1,
	due_in_date, invoice_currency, document_type, area_business,
	baseline_create_date, cust_payment_terms, aging_bucket, business_name;
	private int sl_no, buisness_year, posting_id;
	private long doc_id, invoice_id;
	private double total_open_amount;
	private boolean isOpen, is_deleted;
	
	public String getBusiness_code() {
	return business_code;
	}
	public void setBusiness_code(String business_code) {
	this.business_code = business_code;
	}
	public String getCust_number() {
	return cust_number;
	}
	public void setCust_number(String cust_number) {
	this.cust_number = cust_number;
	}
	public String getName_customer() {
	return name_customer;
	}
	public void setName_customer(String name_customer) {
	this.name_customer = name_customer;
	}
	public String getClear_date() {
	return clear_date;
	}
	public void setClear_date(String clear_date) {
	this.clear_date = clear_date;
	}
	public String getPosting_date() {
	return posting_date;
	}
	public void setPosting_date(String posting_date) {
	this.posting_date = posting_date;
	}
	public String getDocument_create_date() {
	return document_create_date;
	}
	public void setDocument_create_date(String document_create_date) {
	this.document_create_date = document_create_date;
	}
	public String getDocument_create_date1() {
	return document_create_date1;
	}
	public void setDocument_create_date1(String document_create_date1) {
	this.document_create_date1 = document_create_date1;
	}
	public String getDue_in_date() {
	return due_in_date;
	}
	public void setDue_in_date(String due_in_date) {
	this.due_in_date = due_in_date;
	}
	public String getInvoice_currency() {
	return invoice_currency;
	}
	public void setInvoice_currency(String invoice_currency) {
	this.invoice_currency = invoice_currency;
	}
	public String getDocument_type() {
	return document_type;
	}
	public void setDocument_type(String document_type) {
	this.document_type = document_type;
	}
	public String getArea_business() {
	return area_business;
	}
	public void setArea_business(String area_business) {
	this.area_business = area_business;
	}
	public String getBaseline_create_date() {
	return baseline_create_date;
	}
	public void setBaseline_create_date(String baseline_create_date) {
	this.baseline_create_date = baseline_create_date;
	}
	public String getCust_payment_terms() {
	return cust_payment_terms;
	}
	public void setCust_payment_terms(String cust_payment_terms) {
	this.cust_payment_terms = cust_payment_terms;
	}
	public String getAging_bucket() {
	return aging_bucket;
	}
	public void setAging_bucket(String aging_bucket) {
	this.aging_bucket = aging_bucket;
	}
	public String getBusiness_name() {
	return business_name;
	}
	public void setBusiness_name(String business_name) {
	this.business_name = business_name;
	}
	public int getSl_no() {
	return sl_no;
	}
	public void setSl_no(int sl_no) {
	this.sl_no = sl_no;
	}
	public int getBuisness_year() {
	return buisness_year;
	}
	public void setBuisness_year(int buisness_year) {
	this.buisness_year = buisness_year;
	}
	public int getPosting_id() {
	return posting_id;
	}
	public void setPosting_id(int posting_id) {
	this.posting_id = posting_id;
	}
	public boolean getIs_deleted() {
	return is_deleted;
	}
	public void setIs_deleted(boolean is_deleted) {
	this.is_deleted = is_deleted;
	}
	public long getDoc_id() {
	return doc_id;
	}
	public void setDoc_id(long doc_id) {
	this.doc_id = doc_id;
	}
	public long getInvoice_id() {
	return invoice_id;
	}
	public void setInvoice_id(long invoice_id) {
	this.invoice_id = invoice_id;
	}
	public double getTotal_open_amount() {
	return total_open_amount;
	}
	public void setTotal_open_amount(double total_open_amount) {
	this.total_open_amount = total_open_amount;
	}
	public boolean isOpen() {
	return isOpen;
	}
	public void setOpen(boolean isOpen) {
	this.isOpen = isOpen;
	}
	
	@Override
	public String toString() {
	return "InitialDataset [business_code=" + business_code + ", cust_number=" + cust_number + ", name_customer="
			+ name_customer + ", clear_date=" + clear_date + ", posting_date=" + posting_date
			+ ", document_create_date=" + document_create_date + ", document_create_date1=" + document_create_date1
			+ ", due_in_date=" + due_in_date + ", invoice_currency=" + invoice_currency + ", document_type="
			+ document_type + ", area_business=" + area_business + ", baseline_create_date=" + baseline_create_date
			+ ", cust_payment_terms=" + cust_payment_terms + ", aging_bucket=" + aging_bucket + ", business_name="
			+ business_name + ", sl_no=" + sl_no + ", buisness_year=" + buisness_year + ", posting_id=" + posting_id
			+ ", is_deleted=" + is_deleted + ", doc_id=" + doc_id + ", invoice_id=" + invoice_id
			+ ", total_open_amount=" + total_open_amount + ", isOpen=" + isOpen + "]";
	}
}
