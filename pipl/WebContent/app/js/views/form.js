pipl.views.form = new Ext.form.FormPanel(
		{
			//fullscreen: true,
			id : 'searchForm',
			//layout : 'fit', 
			scroll : 'vertical',
			items : [/*{
			                xtype: 'titlebar',
			                title: 'People Search',
			                docked: 'top'
			            },*/
					{
						xtype : 'fieldset',
						items : [ {
							xtype : 'textfield',
							name : 'fname',
							label : 'First name:'
						}, {
							xtype : 'textfield',
							name : 'mname',
							label : 'Middle name:'
						}, {
							xtype : 'textfield',
							name : 'lname',
							label : 'Last name:'
						}, {
							xtype : 'textfield',
							name : 'rname',
							label : 'Raw name:'
						}, {
							xtype : 'textfield',
							name : 'email',
							label : 'E -mail:'
						}, {
							xtype : 'textfield',
							name : 'phone',
							label : 'Phone:'
						}, {
							xtype : 'textfield',
							name : 'uname',
							label : 'User name:'
						}, 
						{
		                    xtype: 'selectfield',
		                    label: 'Country:',
		                    name: 'country',
		                    //valueField: 'IN',
		                   // displayField: 'India',
		                    //options: [],
			                store : countriesStore,
		                    listeners: {
		                        change: function (select, newValue, oldValue) {
		                        	
		                        	
		                           /* if (oldValue) {
		                                var debug = Ext.String.format('<p><b>newValue:</b> {0}</p><p><b>oldValue:</b> {1}</p>',
		                                                Ext.JSON.encode(newValue.data),
		                                                Ext.JSON.encode(oldValue.data));
		                                Ext.Msg.alert('selectfield change dispatched:', debug);
		                            } else {
		                                alert('oldValue is undefined');
		                            }*/
		                        } // change
		                    } // listeners
		                },
		                {
							xtype : 'textfield',
							name : 'state',
							label : 'State:'
						},
		                /* {
		                    xtype: 'selectfield',
		                    label: 'State:',
		                    name: 'state',
		                    options: [
							           {text: '', value:''},
							           {text: ' ', value:''},
							           {text: ' ',  value: ''},
			                           {text: ' ', value: ''},
			                        ],
		                    listeners: {
		                        change: function (select, newValue, oldValue) {
		                            if (oldValue) {
		                                var debug = Ext.String.format('<p><b>newValue:</b> {0}</p><p><b>oldValue:</b> {1}</p>',
		                                                Ext.JSON.encode(newValue.data),
		                                                Ext.JSON.encode(oldValue.data));
		                                Ext.Msg.alert('selectfield change dispatched:', debug);
		                            } else {
		                                alert('oldValue is undefined');
		                            }
		                        } // change
		                    } // listeners
		                },  
		                {
							xtype : 'textfield',
							name : 'city',
							label : 'City:'
						}, {
							xtype : 'textfield',
							name : 'fage',
							label : 'From Age :'
						}, {
							xtype : 'textfield',
							name : 'tage',
							label : 'To age:'
						},*/ ]
					// items
					},
					{
						xtype : 'toolbar',
						layout : {
							pack : 'center'
						}, // layout
						ui : 'plain',
						items : [
								{
									xtype : 'button',
									text : 'Submit',
									ui : 'confirm',
									handler : function(btn, evt) {
										var values = pipl.views.form
												.getValues();
										// Ext.Msg.alert('Welcome', Ext.String.format('{0} {1}', values.fname, values.lname));
										pipl.backButton.show();
										piplWS(values);
									} // handler
								},
								{
									xtype : 'button',
									text : 'Reset',
									ui : 'decline',
									handler : function(btn, evt) {
										Ext.Msg
												.confirm(
														'',
														'Are you sure you want to reset this form?',
														function(btn) {
															if (btn === 'yes') {
																pipl.views.form
																		.setValues({
																			fname : '',
																			mname : '',
																			lname : '',
																			rname : '',
																			email : '',
																			phone : '',
																			uname : '',
																			country : '',
																			state : '',
																			city : ''
																			//fage : '',
																			//tage : ''
																		}); // contactForm()
															} // switch
														}); // confirm()
									}
								} ]
					// items (toolbar)
					},
					{
					  	layout:'fit',
					  	xtype: 'toolbar',
				        dock: 'bottom',
				        text : 'API KEY',
				        items: [{
				            xtype: 'selectfield',
				           // label: 'API KEY',
				            name: 'key',
				            id:'termopt',
				            listeners: {
				            	change: {
				                    fn: function(){
				                    	/*var term = this.getValue();
				                    	
				                    	pipl.views.form.update('');
				    					
				    					loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
				    					loadingMask.show();
										*/
										}
								}
							},
							options: [
							           {text: 'Sample key', value: 'samplekey'},
							           {text: 'Comprehensive key', value:'7zgj8ndvj3nx5znwakd5har2'},
							           {text: 'Advanced key', value:'wsjwyqyyt2rrvyf4xrz2ctgy'},
							           {text: 'Quick key',  value: 'eufj9vwjyqzjcg3bq8kthvbr'}
			                          
			                        ]
				        }]
					  }]
		// items (formpanel)
		});// create()

function piplWS(values) {
	//Ext.Msg.alert('Welcome', Ext.String.format('{0} {1}', values.fname, values.lname));
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();

	Ext.util.JSONP
			.request({

				url : './SearchAll',
				params : {
					format : 'json',
					callback : 'callback',
					// ws: 'searchpipl',
					key : values.key,
					fname : values.fname,
					mname : values.mname,
					lname : values.lname,
					rname : values.rname,
					email : values.email,
					phone : values.phone,
					uname : values.uname,
					country : values.country,
					state : values.state,
					city : values.city,
					fage : values.fage,
					toage : values.tage
				},
				method : 'GET',
				callbackKey : 'callback',
				callback : function(result) {
					if (result) {
						if (result != null || result != 'undefined'
								|| result != ' ') {
							
							//alert("result[0].length "+result[0].length);
							if(result[0].length > 40){
								if (result[0].substring(0,5) == "Sorry") {
									   alert(result[0]);
									   //pipl.views.errorpage.update(applStatusTpl.applyTemplate(result));
									   //var applStatus = goCampus.views.applStatus;
									   // pipl.views.viewport.setActiveItem(applStatus, { type: 'slide', direction: 'left' });	
								}
							}
							else{
								var resultslist = pipl.views.resultslist;
								var searchContainer = pipl.views.resultslistContainer;
	
								Ext.StoreMgr.clear('resultsModel');
								resultsStore.removeAll();
								for ( var i = 0; i < result.length; i++) {
									resultsStore.add(result[i]);
								}
								var categorymatched = [];
								var categorytemp = "";
	
								//alert("resultsStore.getAt(i).data" +resultsStore.getAt(i).data);
								for ( var i = 0; i < resultsStore.getCount(); i++) {
									if (i == 0) {
										categorytemp = resultsStore.getAt(i).data.category;
										categorymatched
												.push(resultsStore.getAt(i).data);
	
									}
									if (resultsStore.getAt(i).data.category == categorytemp) {
									} else {
										categorytemp = resultsStore.getAt(i).data.category;
										categorymatched
												.push(resultsStore.getAt(i).data);
									}
								}
								Ext.StoreMgr.clear('resultsModel');
								resultsStore.removeAll();
								resultsStore.add(categorymatched);
								//coursecataloglist.refresh();
								resultslist.bindStore(resultsStore);
								resultslist.addListener('itemTap', function(list,index) {
									var sublist = [];
									//sublist  = result[i];
									var record = list.store.getAt(index);
									var category = record.get('category');
									//alert("***  category  *** :" +category);
									//alert("***  resultsStore.getAt(i).data.category  *** :" +result.getAt(0).data.category);
									for ( var i = 0; i < result.length; i++) {
											//alert("result[i].data " + result[i].length);
											var subresults = result[i];
											for (var k = 0; k < subresults.length; k++){
												if (subresults[k].data.category == category) {
													//alert("matched");												
														sublist.push(subresults[k].data);
												}
											}
											/*alert("***  resultsStore.getAt(i).data.category == category  *** :" +(result[i].data.category == category));
											if (result[i].data.category == category) {
												alert("matched");
												
													sublist.push(result[i].getAt(i).data);
											}*/
									}
									//alert("sublist : "+sublist);
									pipl.navigationBar.setVisible(true);
									pipl.navigationBar.doComponentLayout();
									var backBtn = pipl.backButton;
									backBtn.setHandler(function() {
										var backBtn = pipl.backButton;
										backBtn.setHandler(function() {
											pipl.backButton.setVisible(false);
											var formPanel = pipl.views.form;
											//pipl.backButton.setHandler(backHome);
											pipl.views.viewport.setActiveItem(formPanel, { type: 'slide', reverse: true });
	
										});
										pipl.views.viewport.setActiveItem( searchContainer, {type : 'slide', reverse : true	});
									});
	
									var detailedPanel = pipl.views.detailedPanel;
									//var toolbar = Ext.getCmp('coursedetailtoolbar');
									//toolbar.setTitle(subject);									 
									detailedPanel.update('');
									detailedPanel.update(categoryTpl.applyTemplate(sublist));
	
									pipl.views.viewport.setActiveItem(detailedPanel, {type : 'slide',	direction : 'left' });
	
								});
	
								//alert("Category ..."+resultsStore.getAt(0).data.category);
								//alert( resultslist.store.getAt(0).value);
	
								resultslist.doComponentLayout();
								searchContainer.doLayout();
								// alert("count :"+resultsStore.getCount());
	
								pipl.views.viewport.setActiveItem(searchContainer,
										{
											type : 'slide',
											direction : 'left'
										});
						}
						}
					} else {
						Ext.Msg.alert("Error. Server not responding");
					}
					loadingMask.hide();
				}
			});
}

/* function piplWS(values){
//Ext.Msg.alert('Welcome', Ext.String.format('{0} {1}', values.fname, values.lname));
//loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
//loadingMask.show();
Ext.Ajax.request({
   url: './SearchAll',
   params: {
       //format: 'json',
       callback: 'callback',
                // ws: 'searchpipl',
                 fname: values.fname,
				   mname: values.mname,
				   lname: values.lname,
				   rname: values.rname,
				   email: values.email,
				   phone: values.phone,
				   uname: values.uname,
				   country: values.country,
				   state: values.state,
				   city: values.city,
				   fage: values.fage,
				   toage: values.tage
   },                            
   success: function(response, opts) {
	   //alert("success :"+response.responseText);
      //var obj = Ext.decode(response.responseText);
	   if(response.responseText){
     	  if(response.responseText != null || response.responseTextt != 'undefined' || response.responseText != ' '){
     		  alert("<" + response.responseText + ">");
     		  Ext.StoreMgr.clear('resultsModel');							
     		  resultsStore.removeAll();							 
     		  resultsStore.add(response.responseText);
     	  }
	   }
	   
	
	  var searchContainer = pipl.views.resultslistContainer;
	  pipl.views.viewport.setActiveItem(searchContainer, { type: 'slide', direction : 'left' });
   },
   failure: function(response, opts) {
	   var searchpan = pipl.views.search;
	   var searchContainer = pipl.views.searchContainer;
	   pipl.views.viewport.setActiveItem(searchContainer, { type: 'slide', direction : 'left' });
       //console.log('server-side failure with status code ' + response.status);
   }
});
}*/

