package com.crud;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.pojo.InvoicePojo;

public class ReadInvoice {
private Connection con;
	
	public ReadInvoice() {
		MysqlConnector obj = new MysqlConnector();
		this.con = obj.getConnection();
	}
	
	public ArrayList<InvoicePojo> getInvoices() {
		ArrayList<InvoicePojo> AllInvoices = new ArrayList<>();
		String business_code, cust_number, name_customer, clear_date, 
				posting_date, document_create_date, document_create_date1,
				due_in_date, invoice_currency, document_type, area_business,
				baseline_create_date, cust_payment_terms, aging_bucket, business_name;
		int sl_no, buisness_year, posting_id;
		long doc_id, invoice_id;
		double total_open_amount;
		boolean isOpen, is_deleted;
		
		try {
			String sql_query = "SELECT winter_internship.*, business.business_name, customer.name_customer \r\n"
					+ "FROM winter_internship, business, customer \r\n"
					+ "WHERE winter_internship.business_code = business.business_code AND winter_internship.cust_number = customer.cust_number \r\n"
					+ "ORDER BY sl_no ASC ";
			PreparedStatement pstmt = this.con.prepareStatement(sql_query);
			ResultSet rs = pstmt.executeQuery();
			
			while (rs.next()) {
				business_code = rs.getString("business_code");
				cust_number = rs.getString("cust_number");
				name_customer = rs.getString("name_customer");
				clear_date = rs.getString("clear_date");
				sl_no = rs.getInt("sl_no");
				buisness_year = rs.getInt("buisness_year");
				doc_id = rs.getLong("doc_id");
				posting_date = rs.getString("posting_date");
				document_create_date = rs.getString("document_create_date");
				document_create_date1 = rs.getString("document_create_date1");
				due_in_date = rs.getString("due_in_date");
				invoice_currency = rs.getString("invoice_currency");
				document_type = rs.getString("document_type");
				posting_id = rs.getInt("posting_id");
				area_business = rs.getString("area_business");
				total_open_amount = rs.getDouble("total_open_amount");
				baseline_create_date = rs.getString("baseline_create_date");
				cust_payment_terms = rs.getString("cust_payment_terms");
				aging_bucket = rs.getString("aging_bucket");
				business_name = rs.getString("business_name");
				invoice_id = rs.getLong("invoice_id");
				is_deleted = rs.getBoolean("is_deleted");
				isOpen = rs.getBoolean("isOpen");
				
				InvoicePojo invoice = new InvoicePojo();
				invoice.setBusiness_code(business_code);
				invoice.setCust_number(cust_number);
				invoice.setName_customer(name_customer);
				invoice.setClear_date(clear_date);
				invoice.setSl_no(sl_no);
				invoice.setBuisness_year(buisness_year);
				invoice.setDoc_id(doc_id);
				invoice.setPosting_date(posting_date);
				invoice.setDocument_create_date(document_create_date);
				invoice.setDocument_create_date1(document_create_date1);
				invoice.setDue_in_date(due_in_date);
				invoice.setInvoice_currency(invoice_currency);
				invoice.setDocument_type(document_type);
				invoice.setPosting_id(posting_id);
				invoice.setArea_business(area_business);
				invoice.setTotal_open_amount(total_open_amount);
				invoice.setBaseline_create_date(baseline_create_date);
				invoice.setCust_payment_terms(cust_payment_terms);
				invoice.setAging_bucket(aging_bucket);
				invoice.setBusiness_name(business_name);
				invoice.setInvoice_id(invoice_id);
				invoice.setIs_deleted(is_deleted);
				invoice.setOpen(isOpen);

				AllInvoices.add(invoice);
			}
//			for (InvoicePojo invoice: AllInvoices) {
//				System.out.println(invoice.toString());
//			}
			System.out.println(AllInvoices.size());
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception occurred!");
		}
		
		return AllInvoices;
	}

}
