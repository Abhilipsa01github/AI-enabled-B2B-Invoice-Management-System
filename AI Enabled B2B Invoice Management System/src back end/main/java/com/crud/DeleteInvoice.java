package com.crud;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;
import com.google.gson.Gson;

public class DeleteInvoice {
private Connection con;
	
	public DeleteInvoice() {
		MysqlConnector obj = new MysqlConnector();
		this.con = obj.getConnection();
	}
	
	public String deleteInvoices(String sl_nos) {
		HashMap<Object, Object> Response = new HashMap<>();
		
		try {
			String sql_query = "DELETE from winter_internship "
					+ "WHERE doc_id IN (" + sl_nos + ")";

			PreparedStatement pstmt = this.con.prepareStatement(sql_query);
			
			if (pstmt.executeUpdate() > 0) {
				Response.put("delete", true);
			} else {
				Response.put("delete", false);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception occurred!");
		}
		
		Gson gson = new Gson();
		return gson.toJson(Response);

	}
	
}

