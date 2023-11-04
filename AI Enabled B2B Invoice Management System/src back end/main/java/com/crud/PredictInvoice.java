package com.crud;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;

import com.google.gson.Gson;
public class PredictInvoice {
private Connection con;
	
	public PredictInvoice() {
		MysqlConnector obj = new MysqlConnector();
		this.con = obj.getConnection();
	}

	public String predictInvoice(String aging_bucket, long doc_id) {
		HashMap<Object, Object> Response = new HashMap<>();

		try {
			String sql_query = "UPDATE winter_internship "
					+ "SET aging_bucket = ? "
					+ "WHERE doc_id = ?";
			PreparedStatement ps = this.con.prepareStatement(sql_query);
			
			ps.setString(1, aging_bucket);
			ps.setLong(2, doc_id);
			
			if (ps.executeUpdate() > 0) {
				Response.put("predict", true);
			} else {
				Response.put("predict", false);
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception occurred!");
		}
		
		Gson gson = new Gson();
		return gson.toJson(Response);
	}
}
