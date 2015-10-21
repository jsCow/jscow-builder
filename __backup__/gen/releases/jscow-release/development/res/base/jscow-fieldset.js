/*
 * jsCow.res.components.fieldset
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: August 18 10:30:00 2011
 */

/**
Die Fieldset-Komponente kann f�r das visuelle Gruppieren von beliebigen Komponenten verwendet werden.
�ber verf�gbare Events, kann von au�en auf unterschiedliche Aktionen reagiert werden.

@author Mario Linz
@class jsCow.res.components.fieldset
@type Object
@module jsCow.res.components.fieldset
@constructor 
*/
jsCow.res.components.fieldset = function() { }
jsCow.res.components.fieldset.prototype = {

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
		this.setModel(jsCow.res.model.fieldset);
		// set view
		this.setView(jsCow.res.view.fieldset);
		// set controller
		this.setController(jsCow.res.controller.fieldset);
		
		return this;
	},
	
	/**
	Setzt den Titel/Legend der Fieldset Komponente.
	
	@method setTitle
	@return {Object} Instanz der jsCow-Komponente.
	@event setTitle
	**/
	setTitle: function(l) {
		this.globalEvents.trigger("setTitle", {
			legend: l
		}, this);
		
		return this;
	}
	
}

/**
MVC-Model der Komponente jsCow.res.model.checkbox

@author Mario Linz
@class jsCow.res.model.fieldset
@type Object
@module jsCow.res.model.fieldset
@constructor 
*/
jsCow.res.model.fieldset = function() {
	
	/**
	Systemname oder Bezeichnung des Model.
	
	@property type
	@type String
	@default "jsCow.res.model.checkbox"
	**/
	this.type = "jsCow.res.model.fieldset";	// system variable

	/**
	Konfiguration des Model.

	@property config
	@type Object
	@default "{
		globalDisabled: false,
		enabled: true,
		lastLegend: "",
		legend: ""
	}"
	**/
	this.config = {
		globalDisabled: false,
		enabled: true,
		lastLegend: "",
		legend: ""
	}
	
};
jsCow.res.model.fieldset.prototype = {

	/**
	Wird bei Initialisierung des Komponenten-Model automatisch vom Framework ausgef�hrt.
	
	@method init
	**/
	init: function() {
		this.globalEvents.trigger("viewInit", this.getConfig(), this.getCmp());
	},
	
	/**
	Setzt den Titel des Fieldset und updatet den View.
	
	@method setTitle
	**/
	setTitle: function(e) {	
		if (this.isEnabled()) {
			this.setConfig({ 
				lastLegend: this.getConfig("legend"),
				legend: e.data.legend
			});
			
			this.globalEvents.trigger("viewUpdate", this.getConfig(), this.getCmp());
		}
		
		return this;
	}
	
};

/**
MVC-View der Komponente jsCow.res.view.fieldset

@author Mario Linz
@class jsCow.res.view.fieldset
@type Object
@module jsCow.res.view.fieldset
@constructor 
*/
jsCow.res.view.fieldset = function() {

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
	@default "jsCow.res.view.fieldset"
	**/
	this.type = "jsCow.res.view.fieldset";		// system variable
	
	/**
	Objekt f�r alle ben�tigten HTML-DOM Elemente der Komponente.
	
	@property dom
	@type Object
	@default "{}"
	**/
	this.dom = {};
	this.dom.main = $('<fieldset/>').addClass('jscow-fieldset');
	this.dom.legend = $('<legend/>').addClass('jscow-fieldset-legend').appendTo(this.dom.main);
	this.dom.content = $('<div/>').addClass('jscow-fieldset-content clearfix').appendTo(this.dom.main);
	
};
jsCow.res.view.fieldset.prototype = {
	
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
		
		this.dom.legend.html(cfg.legend);
		
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
				
				this.dom.main.addClass('jscow-fieldset-disabled').removeClass('jscow-fieldset');
				
			// Enabled
			}else{
				
				this.dom.main.addClass('jscow-fieldset').removeClass('jscow-fieldset-disabled');
				
				this.dom.legend.html(cfg.legend);
				
				// Hide / Show
				if (cfg.hide) this.dom.main.addClass('jscow-hide'); else this.dom.main.removeClass('jscow-hide');
				
			}
			
		}
		
		return this;
	}
	
};

/**
MVC-Constroller der Komponente jsCow.res.controller.fieldset

@author Mario Linz
@class jsCow.res.controller.fieldset
@type Object
@module jsCow.res.controller.fieldset
@constructor 
*/
jsCow.res.controller.fieldset = function() {

	/**
	Systemname oder Bezeichnung des Controller.

	@property type
	@type String
	@default "jsCow.res.controller.checkbox"
	**/
	this.type = "jsCow.res.controller.fieldset";
	
};
jsCow.res.controller.fieldset.prototype = {
	
	/**
	Die init Methode des MVC-Controller wird automatisch vom Framework ausgef�hrt, wenn der Controller Initialisiert wird.
	
	@method init
	**/
	init: function() {
		// ...
	},
	
	/**
	Nimmt das Event "setTitle" entgegen und f�hrt sofern diese existiert, eine entsprechende Handler-Methode im Model aus.
	
	@method handleSetTitle
	@param {Object} e Event-Parameter, die an die Methode �bergeben werden. 
	**/
	handleSetTitle: function(e) {
		if (this.isMethodExists(this.getModel().setTitle)) this.getModel().setTitle(e);
		
		return this;
	}
	
};
