package com.crud;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;
import com.google.gson.Gson;

public class AddInvoice {
	private Connection con;
	
	public AddInvoice() {
		MysqlConnector obj = new MysqlConnector();
		this.con = obj.getConnection();
	}
	
	public String addInvoice(
			String business_code, String cust_number, String clear_date, int buisness_year,
			long doc_id, String posting_date, String document_create_date, String due_in_date,
			String invoice_currency, String document_type, int posting_id, double total_open_amount,
			String baseline_create_date, String cust_payment_terms, long invoice_id, int sl_no
			) {
		
		HashMap<Object, Object> Response = new HashMap<>();

		try {
			String sql_query = "INSERT into winter_internship "
					+ "(sl_no, business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, document_create_date1, due_in_date, invoice_currency, document_type, posting_id, area_business, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id) "
					+ "values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement pstmt = this.con.prepareStatement(sql_query);

			pstmt.setInt(1, sl_no);
			pstmt.setString(2, business_code);
			pstmt.setString(3, cust_number);
			pstmt.setString(4, clear_date);
			pstmt.setInt(5, buisness_year);
			pstmt.setLong(6, doc_id);
			pstmt.setString(7, posting_date);
			pstmt.setString(8, document_create_date);
			pstmt.setString(9, document_create_date);
			pstmt.setString(10, due_in_date);
			pstmt.setString(11, invoice_currency);
			pstmt.setString(12, document_type);
			pstmt.setInt(13, posting_id);
			pstmt.setString(14, "");
			pstmt.setDouble(15, total_open_amount);
			pstmt.setString(16, baseline_create_date);
			pstmt.setString(17, cust_payment_terms);
			pstmt.setLong(18, invoice_id);
			
			if (pstmt.executeUpdate() > 0) {
				Response.put("add", true);
			} else {
				Response.put("add", false);
			}
		
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception occurred!");
		}
		
		Gson gson = new Gson();
		return gson.toJson(Response);
		
	}

}

