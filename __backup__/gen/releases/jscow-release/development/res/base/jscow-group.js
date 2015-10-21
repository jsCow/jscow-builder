/*
 * jsCow.res.components.group
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: August 18 10:30:00 2011
 */

/**
Komponente zur Gruppierung von beliebigen Komponenten.
Die Group-Komponente hat neben den allgemeinen Komponenten-Methoden keine spezifischen Methoden.

@author Mario Linz
@class jsCow.res.components.group
@type Object
@module jsCow.res.components.group
@constructor 
*/
jsCow.res.components.group = function() {}
jsCow.res.components.group.prototype = {

	/**
	Init-Methode, die in der Initialisierung der Komponente ausgef�hrt wird.
	
	@method init
	@return {Object} Instanz der jsCow-Komponente.
	**/
	init: function() {
		
		return this;
	},

	/**
	Setzt die Standard-MVC Klassen (Model, View, Controller) f�r die Komponente.
	Diese Methode hat keine Parameter, da sie automatisch bei der Initialisierung der Komponente vom Framework ausgef�hrt wird.
	
	@method setDefaultMVC
	@return {Object} Instanz der jsCow-Komponente.
	**/
	setDefaultMVC: function() {
		
		// set model
		this.setModel(jsCow.res.model.group);
		// set view
		this.setView(jsCow.res.view.group);
		// set controller
		this.setController(jsCow.res.controller.group);
		
		return this;
	}
	
}

/*
 * jsCow.res.model.group - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: October 25 22:00:00 2011
 */

/**
MVC-Model der Komponente jsCow.res.model.group

@author Mario Linz
@class jsCow.res.model.group
@type Object
@module jsCow.res.model.group
@constructor 
*/
jsCow.res.model.group = function() {
	
	/**
	Systemname oder Bezeichnung des Model.
	
	@property type
	@type String
	@default "jsCow.res.model.group"
	**/
	this.type = "jsCow.res.model.group";	// system variable
	
	/**
	Konfiguration des Model.

	@property config
	@type Object
	@default "{
		globalDisabled: false,
		enabled: true
	}"
	**/
	this.config = {
		globalDisabled: false,
		enabled: true
	}
	
};
jsCow.res.model.group.prototype = {

	/**
	Wird bei Initialisierung des Komponenten-Model automatisch vom Framework ausgef�hrt.
	
	@method init
	**/
	init: function() {
		this.globalEvents.trigger("viewInit", this.getConfig(), this.getCmp());
	}
	
};

/*
 * jsCow.res.view.group - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: October 25 22:00:00 2011
 */

/**
MVC-View der Komponente jsCow.res.view.group

@author Mario Linz
@class jsCow.res.view.group
@type Object
@module jsCow.res.view.group
@constructor 
*/
jsCow.res.view.group = function() {

	/**
	Systemvariable des View. Wird vom Framework ben�tigt.

	@property execInit
	@type Boolean
	@default "false"
	**/
	this.execInit = false;					// system variable
	
	/**
	Systemname oder Bezeichnung des View.

	@property type
	@type String
	@default "jsCow.res.view.group"
	**/
	this.type = "jsCow.res.view.group";		// system variable
	
	/**
	Objekt f�r alle ben�tigten HTML-DOM Elemente der Komponente.
	
	@property dom
	@type Object
	@default "{}"
	**/
	this.dom = {};
	this.dom.main = $('<div/>').addClass('clearfix');
	this.dom.content = $('<div/>').appendTo(this.dom.main);
	
};
jsCow.res.view.group.prototype = {
	
	/**
	Die init Methode des MVC-View wird meist �ber das Event "viewInit" in der init Methode des Model ausgef�hrt.
	Zu welchem Zeitpunkt dies passiert, ist dem Entwickler �berlassen.
	(Es empfiehlt sich jedoch das Triggern der View-Initialisierung �ber die Init-Methode des Models auszuf�hren.)
	
	@example Model.init: function() {
		this.globalEvents.trigger("viewInit", this.getConfig(), this.getCmp());
	}
	@method init
	**/
	init: function(cfg) {
		
		var cfg = cfg.data;
		
	},
	
	/**
	�ber die Methode "update" wird standardm��ig ein Update des View ausgef�hrt.
	Dieses Update kann auch �ber das globale Event "update" ausgef�hrt werden.
	
	@method update
	@param {Object} e Event-Parameter, die an die Methode �bergeben werden. 
	Wird die Methode aus dem View herraus direkt aufgerufen, so muss darauf geachtet werden, dass die zu �bergebenen Parameter in der Event-Data Struktur �bergeben werden.
	**/
	update: function(cfg) {
		var cfg = cfg.data;
		if (cfg) {
			
			// Disabled
			if (!cfg.enabled || cfg.globalDisabled) {
				
				
				
			// Enabled
			}else{
				
				// Hide / Show
				if (cfg.hide) this.dom.main.addClass('jscow-hide'); else this.dom.main.removeClass('jscow-hide');
				
			}
			
		}
		
		return this;
	}
	
};

/*
 * jsCow.res.controller.group - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: October 25 22:00:00 2011
 */

/**
MVC-Controller der Komponente jsCow.res.controller.group

@author Mario Linz
@class jsCow.res.controller.group
@type Object
@module jsCow.res.controller.group
@constructor 
*/
jsCow.res.controller.group = function() {

	/**
	Systemname oder Bezeichnung des Controller.

	@property type
	@type String
	@default "jsCow.res.controller.group"
	**/
	this.type = "jsCow.res.controller.group";
	
};
jsCow.res.controller.group.prototype = {
	
	/**
	Die init Methode des MVC-Controller wird automatisch vom Framework ausgef�hrt, wenn der Controller Initialisiert wird.
	
	@method init
	**/
	init: function() {
		// ...
	}
	
};
