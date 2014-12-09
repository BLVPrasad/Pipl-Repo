var categoryTpl = new Ext.XTemplate([
                                     '<div align="right"><span ><img src="app/img/thumpsup.png" WIDTH=20px; HEIGHT =20px/>  Accurate </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="app/img/PS_CS_STATUS_OPEN_ICN.GIF"/>  Relevant </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="app/img/thumpdown.png" WIDTH=20px; HEIGHT=20px/>  Irrelevant </span></div>',
                                          '<tpl for=".">',
                                          '<tpl if="category">',
                                         
                                          '<div class="subheader"> {source} </div>',
                                           			'<div class="cname">',
                                           			'<tpl if="imgSrc">',
                                           					'<img src="{imgSrc}" WIDTH=80px; HEIGHT =80px style=float:left;></img>',
                                           		    '</tpl>',
                                           		    '<tpl if="imgSrc == \'\'">',
                                           		    	'<img src="app/img/user.png" WIDTH=80px; HEIGHT =80px style=float:left;></img>',
                                 		            '</tpl>',
                                      	     		'<strong>URL : </strong><a class="wordwrap" href={url}>{url}</a>',
                                           					// '<div><span class="persinfo"> {url} </span> </div>',
                                      	     		'<div><span class="desc">  Person Match :{personMatch}   </span><tpl if="personMatch==\'1\'"><img src="app/img/thumpsup.png" WIDTH=40px; HEIGHT =40px; /></tpl><tpl if="personMatch &gt; 0.500 && personMatch &lt; 1"><img src="app/img/PS_CS_STATUS_OPEN_ICN.GIF"/></tpl><tpl if="personMatch &lt; 0.500"><img src="app/img/thumpdown.png" WIDTH=40px; HEIGHT =40px /></tpl></span>',
                                      	     		'</div>',
                                      	     		'</div>',
                                           		'</tpl>',
                                      	'</tpl>',
                                      	'<tpl if="length == 0">',			
                                      		'<div class="errorMsg"> not available</div>',
                                      	 '</tpl>'
                                         ]);

pipl.views.detailedPanel = new Ext.Panel({
      id: 'detailedPanel',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      //cls : 'paddingCls',
	  dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
        title: 'Records',
		cls:'small_title',
		ui:'light'
	  }]
});