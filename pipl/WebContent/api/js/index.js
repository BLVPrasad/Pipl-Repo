var App = new Ext.Application({  
	name : 'pipl',  
	useLoadMask : true, 
	//tabletStartupScreen: 'app/img/pipl_launch.png',
   // phoneStartupScreen: 'app/img/pipl_launch.png',
   // icon: 'app/img/pipl_icon1.png',
    glossOnIcon: true, 
	launch : function () { 
		
		pipl.header = new Ext.Toolbar({
            ui : 'none',
            cls: 'header',
            dock: 'top',
            height: '70px'
            //title: '<img src="app/img/pipl_launch1.png" width="250px" height="80px" />'	
        });
		
		pipl.ourlogoBar = new Ext.Toolbar({
		    dock: 'bottom',			
		    width  : '100%',
		    //cls : 'logo'
		    cls: 'small_title',
		    title:'<span><p>&nbsp;&nbsp;Powered by Hexaware<img src="app/img/hexlogo.png" height="20px" style="display:inline;position:absolute;padding:1px;margin:5px"></p></span>'
		});
		
		pipl.backButton = new Ext.Button({
            text: 'Back',
            ui: 'back',
            handler: backHome,
			hidden: true,
			scope: this
			
        });
		
		
		pipl.newToDoButton = new Ext.Button({
            id: 'newNoteButton',
		    text: 'New',
		    ui: 'action',
			hidden: true,
			scope: this
			
        });
		
		pipl.spacer = [
			{
				xtype:'spacer'
			}
		];		
		
		
		pipl.navigationBar = new Ext.Toolbar({
            ui: 'dark',
            dock: 'top',			
            title: 'pipl',  
			hidden: 'true',          
            items: [ pipl.backButton, {xtype:'spacer'}, pipl.newToDoButton ]
        });
		
		pipl.headerPanel = new Ext.Panel({
        	items: [pipl.header],
        	dock:'top',
			border: '0px'
        });
		
		
		pipl.mainList = new Ext.List({
			id:'mainList',
			ui:'round',
			useLoadMask:true,
			store: 'mainListStore',
			itemTpl: '<div class="icon" <tpl if="icon"> style="background-image: url({icon})"</tpl> ></div>'
						+ '<span class="name">{title} <br>'
			 			+ '<span class="tertiary">{desc}</span>'
						+ '</span>',
			onItemDisclosure: function(record){


			}
		});
		
		pipl.mainListContainer = new Ext.Panel({
			id: 'mainListContainer',
			layout: 'fit'
			//html: 'This Main List Container',
			//items: [pipl.mainList]
			
            
        });		
		
		pipl.views.viewport = new Ext.Panel({  
		    fullscreen : true,  
		    layout : 'card',  
		    cardAnimation : 'slide',
		    items: [				
		            	pipl.views.formPanel
			]
			//dockedItems: [pipl.headerPanel,pipl.navigationBar,pipl.ourlogoBar] 
		});		
		
		
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

function newNote(){
	var saveBtn = pipl.newToDoButton;
		saveBtn.setText('Save');
		saveBtn.setHandler(saveNote);
		var backBtn = pipl.backButton;
		backBtn.setHandler(function(){
						var newBtn = pipl.newToDoButton;
						newBtn.setText('New');
						newBtn.setHandler(newNote);
						backBtn.setHandler(backHome);
						var notesListContainer = Ext.getCmp('notesListContainer');
					    //var noteEditor = pipl.views.noteEditor;											
	              		pipl.views.notespanel.setActiveItem(notesListContainer, {    			      
	                		type: 'slide',              			
	                        reverse: true		  
	                     });
					},this);
			var now = new Date();
            var noteId = now.getTime();
            var note = Ext.ModelMgr.create(
                { id: noteId, date: now, title: '', narrative: '' },
                'Note'
            );
        pipl.views.noteEditor.load(note);
        pipl.views.notespanel.setActiveItem('noteEditor', {type: 'slide', direction: 'left'});
}



function saveNote() {		 
    	var noteEditor = Ext.getCmp('noteEditor');						                
        var currentNote = noteEditor.getRecord();
        
        noteEditor.updateRecord(currentNote);

        var errors = currentNote.validate();
        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.getByField('title')[0].message, Ext.emptyFn);
            return;
        }

        var notesList = pipl.views.notesList;
        var notesStore = notesList.getStore();

        if (notesStore.findRecord('id', currentNote.data.id) === null) {
            notesStore.add(currentNote);
        }

        notesStore.sync();
        notesStore.sort([{ property: 'date', direction: 'DESC'}]);

        notesList.refresh();

		var newBtn = pipl.newToDoButton;
		newBtn.setText('New');
		newBtn.setHandler(newNote);
		
		var backBtn = pipl.backButton;
		backBtn.setHandler(backHome);
		
        pipl.views.notespanel.setActiveItem('notesListContainer', { type: 'slide', direction: 'right' });

}

function backHome() {
		var mainListContainer = pipl.mainListContainer;
		if (pipl.views.viewport.getActiveItem() === mainListContainer) {
			    mainListContainer.onBackTap();	
		}else{
			pipl.views.viewport.setActiveItem(pipl.mainListContainer, { type: 'slide', reverse: true });	
			pipl.backButton.hide();
			pipl.newToDoButton.hide();
		}
}
