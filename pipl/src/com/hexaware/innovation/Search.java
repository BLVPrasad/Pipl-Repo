package com.hexaware.innovation;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URISyntaxException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.pipl.api.search.SearchAPIError;
import com.pipl.api.search.SearchAPIRequest;
import com.pipl.api.search.SearchAPIResponse;

/**
 * Servlet implementation class Search
 */
public class Search extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Search() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	/*protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String email = request.getParameter("email");
		System.out.println("email : "+email);
		
		SearchAPIRequest searchRequest = new SearchAPIRequest.Builder()
								        //.firstName("Vara")
								        //.lastName("Prasad")
								        .email(email)
								        .apiKey("wsjwyqyyt2rrvyf4xrz2ctgy")
								        //.pretty("true")
								        .build();
		try {
			 response.setContentType("text/html");

		      // Actual logic goes here.
		      PrintWriter out = response.getWriter();
		     
			
			String searchResponse = searchRequest.send(true);
			System.out.println("************************************"+searchResponse);
			out.println("<h2>"+searchResponse+"</h2>");
		} catch (SearchAPIError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
	}*/

}
