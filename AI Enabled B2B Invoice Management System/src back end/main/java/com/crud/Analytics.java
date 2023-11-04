package com.crud;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class Analytics {
	
private Connection con;
	
	public Analytics() {
		MysqlConnector obj = new MysqlConnector();
		this.con = obj.getConnection();
	}
	
	public String getAnalytics(
			String clear_start, String clear_end, String due_start,	String due_end, 
			String baseline_start, String baseline_end, String invoice_currency) {
		
		ArrayList<String> businessName = new ArrayList<>();
		ArrayList<String> businessCode = new ArrayList<>();
		ArrayList<Double> totalAmount = new ArrayList<>();
		ArrayList<Integer> countCustomer = new ArrayList<>();
		
		String code, name;
		int count;
		double amount;
		
		try {
			String sql_query = "SELECT winter_internship.business_code, business.business_name, COUNT(winter_internship.cust_number) AS cust_count, SUM(winter_internship.total_open_amount) AS total_amount\r\n"
					+ "FROM winter_internship, business\r\n"
					+ "WHERE winter_internship.business_code = business.business_code AND "
					+ "invoice_currency = ? AND "
					+ "clear_date >= ? AND clear_date <= ? AND "
					+ "due_in_date >= ? AND due_in_date <= ? AND "
					+ "baseline_create_date >= ? AND baseline_create_date <= ? \r\n"
					+ "GROUP BY business_code";
						
			PreparedStatement pstmt = this.con.prepareStatement(sql_query);
			
			pstmt.setString(1, invoice_currency);
			pstmt.setString(2, clear_start);
			pstmt.setString(3, clear_end);
			pstmt.setString(4, due_start);
			pstmt.setString(5, due_end);
			pstmt.setString(6, baseline_start);
			pstmt.setString(7, baseline_end);
			
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				code = rs.getString("business_code");
				name = rs.getString("business_name");
				amount = rs.getDouble("total_amount");
				count = rs.getInt("cust_count");
				
				businessName.add(name);
				businessCode.add(code);
				totalAmount.add(amount);
				countCustomer.add(count);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception occurred!");
		}
		
		String response = "{"
				+ "\"business_name\": \"" + businessName + "\","
				+ "\"business_code\": \"" + businessCode + "\","
				+ "\"total_amount\": \"" + totalAmount + "\", "
				+ "\"total_customer\": \"" + countCustomer + "\""
				+ "}";
		
		return response;
		
	}

}