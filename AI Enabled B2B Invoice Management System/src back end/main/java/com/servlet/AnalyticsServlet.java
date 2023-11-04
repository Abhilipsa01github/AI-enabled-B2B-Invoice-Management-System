package com.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import com.crud.Analytics;
import com.google.gson.Gson;

/**
 * Servlet implementation class AnalyticsServlet
 */
public class AnalyticsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AnalyticsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		String clear_start = request.getParameter("clear_start");
		String clear_end = request.getParameter("clear_end");
		String due_start = request.getParameter("due_start");
		String due_end = request.getParameter("due_end");
		String baseline_start = request.getParameter("baseline_start");
		String baseline_end = request.getParameter("baseline_end");
		String invoice_currency = request.getParameter("invoice_currency");
		
		Analytics obj = new Analytics();
		String data = obj.getAnalytics(clear_start, clear_end, due_start, due_end, baseline_start, baseline_end, invoice_currency);
		String responseData = new Gson().toJson(data);
//		System.out.println(responseData);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().print(responseData);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
