package com.hexaware.innovation;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.pipl.api.data.containers.Record;
import com.pipl.api.search.SearchAPIError;
import com.pipl.api.search.SearchAPIRequest;
import com.pipl.api.search.SearchAPIResponse;

/**
 * Servlet implementation class Search
 */
public class SearchAll extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchAll() {
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
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String key = request.getParameter("key");
		
		String fname = request.getParameter("fname");
		String mname = request.getParameter("mname");
		String lname = request.getParameter("lname");
		String rname = request.getParameter("rname");
		
		String email = request.getParameter("email");
		String phone = request.getParameter("phone");
		
		String username = request.getParameter("uname");
		String country = request.getParameter("country");
		//String state = request.getParameter("state");
		//String city = request.getParameter("city");
		
		//String fage = request.getParameter("fage");
		//String toage = request.getParameter("toage");
		System.out.println("key :"+key);
		System.out.println("fname :"+fname);
		System.out.println("mname :"+mname);
		System.out.println("lname :"+lname);
		System.out.println("rname :"+rname);
		System.out.println("email :"+email);
		System.out.println("phone :"+phone);
		System.out.println("username : "+username);
		System.out.println("country :"+country);
		//System.out.println("state :"+state);
		//System.out.println("city : "+city);
		//System.out.println("fage :"+fage);
		//System.out.println("ftoage :"+toage);
		
		PrintWriter out = null;
		JSONArray object = new JSONArray();
		
		try {
			SearchAPIRequest searchRequest = new SearchAPIRequest.Builder()
													.apiKey(key)
													//.apiKey("7zgj8ndvj3nx5znwakd5har2")
													//.apiKey("samplekey")
													.firstName(fname)
											        .middleName(mname)
											        .lastName(lname)
											        .rawName(rname)
											        .email(email)
											        .phone(phone)
											        .username(username)
											      //  .country(country)
											      //  .state(state)
											       // .city(city)
											        //.fromAge(0)
											        //.toAge(0)
											        //.exactName(false)
											        .build();

			System.out.println("Query URL" + searchRequest.url());
			ArrayList list = searchRequest.send(true);
			//System.out.println("***************     List ***********   "+ list.size());
		 
		     System.out.println("(SearchAPIResponse)list.get(0)==============="+ (list.get(0) instanceof  SearchAPIResponse));
		     System.out.println("list.get(0) ==== " + list.get(0));
		     ArrayList<Record> personalProfilesList = null;
		     ArrayList<Record> professionalBusinessList = null;
		     ArrayList<Record> webPagesList = null;
		     
		     ArrayList<Record> contactDetailsList = null;
		     ArrayList<Record> mediaList = null;
		     ArrayList<Record> backGroundReportsList = null;
		     
		     ArrayList<Record> publicRecordsList = null;
		     ArrayList<Record> publicationsList = null;
		     ArrayList<Record> schoolClassmatesList = null;
		     ArrayList<Record> emailAddressList = null;
		    
		      if(list.get(0) instanceof  SearchAPIResponse){
		    	 	    	  
				     SearchAPIResponse output = (SearchAPIResponse)list.get(0); 
				     System.out.println("Records Count :" );
				     HashMap<String,List<Record>> map = (HashMap<String,List<Record>>)output.groupRecordsByCategory();
				     
				     for (int i=0; i < map.size(); i++){
				    	  personalProfilesList = (ArrayList<Record>)map.get("personal_profiles");
				    	  professionalBusinessList = (ArrayList<Record>)map.get("professional_and_business");
				    	  webPagesList = (ArrayList<Record>)map.get("web_pages");
				    	  
				    	  contactDetailsList = (ArrayList<Record>)map.get("contact_details");
				    	  mediaList = (ArrayList<Record>)map.get("media");
				    	  backGroundReportsList = (ArrayList<Record>)map.get("background_reports");
				    	  publicRecordsList = (ArrayList<Record>)map.get("public_records");
				    	  publicationsList = (ArrayList<Record>)map.get("publications");
				    	  schoolClassmatesList = (ArrayList<Record>)map.get("school_and_classmates");
				    	  emailAddressList = (ArrayList<Record>)map.get("email_address");
				     }
				     
				     if(null != personalProfilesList)
				    	 object.add(getCatagories("Personal Profiles", personalProfilesList));
				     
				     if(null != professionalBusinessList)
				    	 object.add(getCatagories("Professional & Business", professionalBusinessList));
				     
				     if(null != webPagesList)
				    	 object.add(getCatagories("Web Pages", webPagesList));
				     
				     if(null != contactDetailsList)
				    	 object.add(getCatagories("Contact Details", contactDetailsList));
				     
				     if(null != mediaList)
				    	 object.add(getCatagories("Media", mediaList));
				     
				     if(null != backGroundReportsList)
				    	 object.add(getCatagories("Background Reports", backGroundReportsList));
				     
				     if(null != publicRecordsList)
				    	 object.add(getCatagories("Public Records", publicRecordsList));
				     
				     if(null != publicationsList)
				    	 object.add(getCatagories("Publications", publicationsList));
				     
				     if(null != schoolClassmatesList)
				    	 object.add(getCatagories("School & Classmates", schoolClassmatesList));
				     
				     if(null != emailAddressList)
				    	 object.add(getCatagories("Email Addresses", emailAddressList));
				    
				     
				     
		     }else{
		    	 //out.print(list.get(0));
		    	 object.add(list.get(0));
		    	 
		     }
		     
		     // System.out.println("Before Script Tag :" + object);
		      
		      boolean scriptTag = false;
				String cb = request.getParameter("callback");

				if (cb != null) {
					scriptTag = true;
					response.setContentType("text/javascript");
				} else {
					response.setContentType("application/x-json");
				}
				out = response.getWriter();
				if (scriptTag) {
					out.write(cb + "(");
				}
				out.print(object);
				if (scriptTag) {
					out.write(");");
				}
				System.out.println("Before Script Tag :" + object);
				out.flush();
		      
		} catch (SearchAPIError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			request.setAttribute("error", "SearchAPIError");
			response.sendRedirect("./error.jsp");
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			request.setAttribute("error", "URISyntaxException");
		}catch (IllegalArgumentException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				request.setAttribute("error", "IllegalArgumentException");
				response.sendRedirect("./error.jsp");
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}
	public JSONArray getCatagories(String category, ArrayList<Record> personalProfilesList){
		
		//System.out.println("getCatagories");
		
		JSONArray object = new JSONArray();
		Map<Object, Object> paramMap = new HashMap<Object, Object>();
		
		
		//out.print("<span><h2 style='color:#FFFFFF;background:#000000'>"+ category + "</h2></span><br><br>"); 
		
		
		for(Record record : personalProfilesList){
			
			paramMap.put("category", category);
			
			
			if(null != record.getImages()){
	     		//out.print("<IMG SRC="+record.getImages().get(0).getUrl()+" WIDTH=80px; HEIGHT =80px style=float:left;>");
				paramMap.put("imgSrc", record.getImages().get(0).getUrl());
	     	}
	     	else{
	     		//out.print("<IMG SRC='./user.png' style='float:left;' width=80px; height=80px>");
	     		paramMap.put("imgSrc", "");
	     	}
	     	
			paramMap.put("source", record.getSource().getName());
			paramMap.put("url", record.getSource().getUrl());
			paramMap.put("personMatch", record.getQueryPersonMatch());
			
	     	//out.print("<strong>Source :  </strong>"+ record.getSource().getName()); 
	     	//out.print("<br>");
	     	//String url = record.getSource().getUrl();
	     	//out.print("<strong>URL : </strong><a word-wrap:break-word; href="+url+">"+url+"</a>");

	     	//out.print("<br>");
	     	//out.print("<strong>Catagory : </strong>"+ record.getSource().getCategory());
	     	//out.print("<br>");
	     	//out.print("<span style='color:#FFFFFF;background:#000000'> " +record.getQueryPersonMatch() + "</span>");
	     	//out.print("<br>");
	     	//out.print("<strong> Params match : </strong>" +record.isQueryParamsMatch());
	     	
	     	//out.print("<br>");
	     	//out.print("<hr>");
			object.add(paramMap);
     }
		//System.out.println("Inside getCatagories :" + object);
		return object;
	}

}