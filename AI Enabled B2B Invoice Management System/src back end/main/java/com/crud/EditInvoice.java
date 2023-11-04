package com.crud;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;
import com.google.gson.Gson;
public class EditInvoice {
	
	private Connection con;
	
	public EditInvoice() {
		MysqlConnector obj = new MysqlConnector();
		this.con = obj.getConnection();
	}
	
	public String editInvoice(int sl_no, String invoice_currency, String cust_payment_terms) {
		HashMap<Object, Object> Response = new HashMap<>();

		try {
			String sql_query = "UPDATE winter_internship "
					+ "SET invoice_currency = ?, cust_payment_terms = ? "
					+ "WHERE sl_no = ?";
			PreparedStatement ps = this.con.prepareStatement(sql_query);
			
			ps.setString(1, invoice_currency);
			ps.setString(2, cust_payment_terms);
			ps.setInt(3, sl_no);
			
			if (ps.executeUpdate() > 0) {
				Response.put("edit", true);
			} else {
				Response.put("edit", false);
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception occurred!");
		}
		
		Gson gson = new Gson();
		return gson.toJson(Response);
	}
}
