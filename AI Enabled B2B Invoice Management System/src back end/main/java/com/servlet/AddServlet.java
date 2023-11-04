package com.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import com.crud.AddInvoice;

/**
 * Servlet implementation class AddServlet
 */
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		String business_code = request.getParameter("business_code"),
				cust_number = request.getParameter("cust_number"),
				clear_date = request.getParameter("clear_date"), 
				posting_date = request.getParameter("posting_date"),
				document_create_date = request.getParameter("document_create_date"),
				due_in_date = request.getParameter("due_in_date"), 
				invoice_currency = request.getParameter("invoice_currency"), 
				document_type = request.getParameter("document_type"), 
				baseline_create_date = request.getParameter("baseline_create_date"), 
				cust_payment_terms = request.getParameter("cust_payment_terms");
		
		int buisness_year = Integer.parseInt(request.getParameter("buisness_year")), 
			posting_id  = Integer.parseInt(request.getParameter("posting_id")),
			sl_no = Integer.parseInt(request.getParameter("sl_no"));
		
		long doc_id = Long.parseLong(request.getParameter("doc_id")),
			invoice_id = Long.parseLong(request.getParameter("invoice_id"));
		double total_open_amount = Double.parseDouble(request.getParameter("total_open_amount"));
		
		AddInvoice addInv = new AddInvoice();
		String JSONResponse = addInv.addInvoice(
				business_code, cust_number, clear_date, buisness_year,
				doc_id, posting_date, document_create_date, due_in_date,
				invoice_currency, document_type, posting_id, total_open_amount,
				baseline_create_date, cust_payment_terms, invoice_id, sl_no
				);
		
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(JSONResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
