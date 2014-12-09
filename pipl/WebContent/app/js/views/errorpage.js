var errorTpl = new Ext.XTemplate([
		                                      
       '<tpl for=".">',
       '<tpl if="descr3">',	
             '<div class="appstatemplname">My Applications</div>',
             '<br>',
             '<center><div class="applicationstatus11"><span><img src="app/img/PS_CS_STATUS_OPEN_ICN.GIF"/> - Complete</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="app/img/PS_CS_STATUS_WAITLIST_ICN.GIF"/> - In Complete</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="app/img/PS_CS_STATUS_SUCCESS_ICN.GIF"/>- Admitted</span></div></center>',
             '<div class="cname">',
                   '<div><span class="appsubtitle">(App.No.{appNo})</span> </div>',
                   '<div class="rowDiv"><span class="applicationstatus"> {descr2}</span></div>',
                   '<div class="rowDiv"><span class="applicationsubhed">{descr3},</span><span class="applicationsubhed">{career}, </span><span class="applicationsubhed">{institute},</span><tpl if="descr50==\'Complete\'"><img src="app/img/PS_CS_STATUS_OPEN_ICN.GIF" align="right"/></tpl><tpl if="descr50==\'InComplete\'"><img src="app/img/PS_CS_STATUS_WAITLIST_ICN.GIF" align="right"/></tpl></div>',
                   '<div class="rowDiv"><span class="applicationstatusdate">App.Date - {admAppDate}</span></div>',
             '</div>',
             '<div class="tertiary">This Application is {descr50}</div>',
       '</tpl>',
       
       '<tpl if="appNotexists==\'\'">',
		'<div class="errorMsg">Applications not available</div>',
		'</tpl>',
       '</tpl>',
       '<tpl if="length == 0">',			
		 '<div class="errorMsg"> not available</div>',
		 '</tpl>'
]);

 

       
pipl.views.errorpage = new Ext.Panel({
      id: 'errorpage',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'app_Status',
			  	xtype: 'toolbar',
			  	title: 'Application Status',
				cls:'small_title',
				ui:'light'
			  }] 
	  
});







       
/*goCampus.views.errorPanel = new Ext.Panel({
      id: 'errorpanel',           
      //layout : 'card',
      scroll : 'vertical',
	  styleHtmlContent: true,
      html : '<div class="errorMsg"> Enter wrong input </div>',
	  dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
        title: 'Faculties',
		cls:'small_title',
		ui:'light'
	  }]
});
*/

