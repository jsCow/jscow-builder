/* 
 * jsCow.res.components.bar
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: August 18 10:30:00 2011
 */
 
/**
BAR-Komponente zur Anwendung innerhalb einer administrativen Benutzeroberfl�che.
�ber verf�gbare Events, kann von au�en auf unterschiedliche Aktionen reagiert werden.

@author Mario Linz
@class jsCow.res.components.bar
@type Object
@module jsCow.res.components.bar
@constructor 
*/
jsCow.res.components.bar = function() { }
jsCow.res.components.bar.prototype = {

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
		this.setModel(jsCow.res.model.bar);
		// set view
		this.setView(jsCow.res.view.bar);
		// set controller
		this.setController(jsCow.res.controller.bar);
		
		return this;
	}
	
}

/*
 * jsCow.res.model.bar - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: October 25 22:00:00 2011
 */

/**
MVC-Model der Komponente jsCow.res.model.bar

@author Mario Linz
@class jsCow.res.model.bar
@type MVC-Model
@module jsCow.res.model.bar
@constructor 
*/
jsCow.res.model.bar = function() {
	
	/**
	Systemname oder Bezeichnung des Model.

	@property type
	@type String
	@default "jsCow.res.model.bar"
	**/
	this.type = "jsCow.res.model.bar";	// system variable
	
	/**
	Konfiguration des Model.

	@property config
	@type Object
	@default "{
		enabled: true
	}"
	**/
	this.config = {
		enabled: true
	}
	
};
jsCow.res.model.bar.prototype = {

	/**
	Wird bei Initialisierung des Komponenten-Model automatisch vom Framework ausgef�hrt.
	
	@method init
	**/
	init: function() {
		this.globalEvents.trigger("viewInit", this.getConfig(), this.getCmp());
	}
	
};

/*
 * jsCow.res.view.bar - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: October 25 22:00:00 2011
 */

/**
MVC-View der Komponente jsCow.res.view.bar

@author Mario Linz
@class jsCow.res.view.bar
@type MVC-View
@module jsCow.res.view.bar
@constructor 
*/
jsCow.res.view.bar = function() {
	
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
	@default "jsCow.res.view.bar"
	**/
	this.type = "jsCow.res.view.bar";		// system variable
	
	/**
	Objekt f�r alle ben�tigten HTML-DOM Elemente der Komponente.
	
	@property dom
	@type Object
	@default "{}"
	**/
	this.dom = {};
	this.dom.main = $('<div/>').addClass('jscow-bar clearfix');
	this.dom.content = $('<div/>').addClass('jscow-bar-content clearfix').appendTo(this.dom.main);
	
};
jsCow.res.view.bar.prototype = {
	
	/**
	Die init Methode des MVC-View wird meist �ber das Event "viewInit" in der init Methode des Model ausgef�hrt.
	Zu welchem Zeitpunkt dies passiert, ist dem Entwickler �berlassen.
	(Es empfiehlt sich jedoch das Triggern der View-Initialisierung �ber die Init-Methode des Models auszuf�hren.)
	
	@example Model.init: function() {
		this.globalEvents.trigger("viewInit", this.getConfig(), this.getCmp());
	}
	@method init
	**/
	init: function(c) {
		
		var cfg = c.data;
		
		this.update(c);
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
				
				this.dom.main.addClass('jscow-bar-disabled').removeClass('jscow-bar');
				
			// Enabled
			}else{
				
				this.dom.main.addClass('jscow-bar').removeClass('jscow-bar-disabled');
				
			}
			
			// Hide / Show
			if (cfg.hide) this.dom.main.addClass('jscow-hide'); else this.dom.main.removeClass('jscow-hide');
			
		}
		
		return this;
	}
	
};

/*
 * jsCow.res.controller.bar - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: October 25 22:00:00 2011
 */

/**
MVC-Controller der Komponente jsCow.res.controller.bar

@author Mario Linz
@class jsCow.res.controller.bar
@type MVC-Controller
@module jsCow.res.controller.bar
@constructor 
*/
jsCow.res.controller.bar = function() {

	/**
	Systemname oder Bezeichnung des Controller.

	@property type
	@type String
	@default "jsCow.res.controller.bar"
	**/
	this.type = "jsCow.res.controller.bar";
	
};
jsCow.res.controller.bar.prototype = {
	
	/**
	Die init Methode des MVC-Controller wird automatisch vom Framework ausgef�hrt, wenn der Controller Initialisiert wird.
	
	@method init
	**/
	init: function() {
		// ...
	}
	
};
