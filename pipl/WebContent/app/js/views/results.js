pipl.views.resultslist = new Ext.List({
			id:'resultslist',
			ui:'round',
			//useLoadMask:true,
			store: 'resultsStore',		
			//autoLoad: true,	
			itemTpl: '<div><span class="name">{category}</span></div>',
			onItemDisclosure: function(record){
				
				
				
				
			}
});


pipl.views.resultslistContainer = new Ext.Panel({
			id: 'resultslistContainer',
			layout: 'fit',
			//html: 'This Main List Container',
			items: [pipl.views.resultslist],
			dockedItems: [{
			  	layout:'fit',
			  	xtype: 'toolbar',
		        title: 'Categories',
				cls:'small_title',
				ui:'light'
			  }]            
        });