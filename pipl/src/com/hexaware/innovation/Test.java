package com.hexaware.innovation;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.pipl.api.search.SearchAPIError;
import com.pipl.api.search.SearchAPIRequest;
import com.pipl.api.search.SearchAPIResponse;

public class Test {

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
			try {
				
				SearchAPIRequest searchRequest = new SearchAPIRequest.Builder()
				 										.apiKey("7zgj8ndvj3nx5znwakd5har2")
				 										.firstName("Immanuel")
												        .middleName("J")
												        .lastName("Kingsley")
												        .rawName("")
												        .email("ImmanuelK@hexaware.com")
												        .phone("")
												        .username("")
												        .country("")
												        .state("")
												        .city("")
												        //.fromAge(0)
												        //.toAge(0)
												        //.exactName(false)
												        .build();

				String searchResponse;
				
				//SearchAPIResponse searchResponse1 = (SearchAPIResponse)searchRequest.send(true);
				ArrayList list = searchRequest.send(true);
				System.out.println("***************     List ***************"+ list);
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				//String json = gson.toJson(list.get(0));
				//System.out.println(json);

				//System.out.println(parse(searchResponse1));
			} catch (SearchAPIError e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (URISyntaxException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}
}





