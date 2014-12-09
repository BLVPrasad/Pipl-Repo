var App = new Ext.Application({  
	name : 'pipl',  
	useLoadMask : true, 
	//tabletStartupScreen: 'app/img/pipl_launch.png',
   // phoneStartupScreen: 'app/img/pipl_launch.png',
   // icon: 'app/img/pipl_icon1.png',
    glossOnIcon: true, 
	launch : function () { 
		
		pipl.backButton = new Ext.Button({
            text: 'Back',
            ui: 'back',
            handler: backHome,
			hidden: true,
			scope: this
			
        });
		
		pipl.navigationBar = new Ext.Toolbar({
            ui: 'dark',
            dock: 'top',			
            title: 'People Search',  
			hidden: false,          
            items: [ pipl.backButton ]
        });
		
		pipl.ourlogoBar = new Ext.Toolbar({
		    dock: 'bottom',			
		    width  : '100%',
		    //cls : 'logo'
		    cls: 'small_title',
		    title:'<span><p>&nbsp;&nbsp;Powered by Hexaware<img src="app/img/hexlogo.png" height="20px" style="display:inline;position:absolute;padding:1px;margin:5px"></p></span>'
		});
		
		pipl.views.viewport = new Ext.Panel({  
		    fullscreen : true,  
		    layout : 'card',  
		    cardAnimation : 'slide',
		    items: [				
		            pipl.views.form
			],
			dockedItems: [pipl.navigationBar, pipl.ourlogoBar] 
		});
		
		pipl.spacer = [
		   			{
		   				xtype:'spacer'
		   			}
		   		];		
		
		/*pipl.header = new Ext.Toolbar({
            ui : 'none',
            cls: 'header',
            dock: 'top',
            height: '70px'
            //title: '<img src="app/img/pipl_launch1.png" width="250px" height="80px" />'	
        });
		
		

		pipl.headerPanel = new Ext.Panel({
        	items: [pipl.header],
        	dock:'top',
			border: '0px'
        });

       	*/
		
	}
});

function onBackTap(){
	var mainListContainer = pipl.mainListContainer;
	if (pipl.views.viewport.getActiveItem() === mainListContainer) {
		    mainListContainer.onBackTap();
	}else{
		pipl.views.viewport.setActiveItem(pipl.mainListContainer, { type: 'slide', reverse: true });	
		pipl.backButton.hide();
		pipl.newToDoButton.hide();
	}				      
}

function backHome() {
		var mainListContainer = pipl.mainListContainer;
		if (pipl.views.viewport.getActiveItem() === mainListContainer) {
			    mainListContainer.onBackTap();	
		}else{
			pipl.views.viewport.setActiveItem(pipl.mainListContainer, { type: 'slide', reverse: true });	
			pipl.backButton.hide();
		}
}