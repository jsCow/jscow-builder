/*
 * jsCow.res.components.input
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: November 08 20:00:00 2011
 */
 
/**
Typische Formular Komponente zur Nutzung eines einzeligen Eingabefeldes.

@author Mario Linz
@class jsCow.res.components.input
@type Object
@module jsCow.res.components.input
@constructor 
*/
jsCow.res.components.input = function() {}
jsCow.res.components.input.prototype = {
	
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
		this.setModel(jsCow.res.model.input);
		// set view
		this.setView(jsCow.res.view.input);
		// set controller
		this.setController(jsCow.res.controller.input);
		
		return this;
	},
	
	/**
	Setzt den Wert des Eingabefeldes und l�st das Event "setValue" aus.
	
	@method setValue
	@event setValue
	@return {Object} Instanz der jsCow-Komponente.
	**/
	setValue: function(v) {
		this.globalEvents.trigger("setValue", {
			input: v
		}, this);
		
		return this;
	},
	
	/**
	Gibt den Wert des Eingabefeldes zur�ck.
	
	@method getValue
	@return {Object} Instanz der jsCow-Komponente.
	**/
	getValue: function() {
		return this.getConfig("input");
	},
	
	/**
	Setzt die Ausrichtung des Eingabefeldes innerhalb seiner Umgebungskomponente.
	
	@method setAlign
	@event setAlign
	@return {Object} Instanz der jsCow-Komponente.
	**/
	setAlign: function(align) {
		this.globalEvents.trigger("setAlign", {
			align: align
		}, this);
		
		return this;
	},
	
	/**
	L�st das Event "setDefaultText" aus und setzt den Default-Text des Eingabefeldes.
	
	@method setDefaultText
	@event setDefaultText
	@return {Object} Instanz der jsCow-Komponente.
	**/
	setDefaultText: function(t) {
		this.globalEvents.trigger("setDefaultText", {
			placeholder: t
		}, this);
		
		return this;
	},
	
	/**
	Gibt den Value des Placeholder des Eingabefeldes zur�ck.
	
	@method getDefaultText
	@event getDefaultText
	@return {Object} Instanz der jsCow-Komponente.
	**/
	getDefaultText: function() {
		return this.getConfig("placeholder");
	}
	
}

/*
 * jsCow.res.model.input - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: November 08 20:00:00 2011
 */

/**
MVC-Model der Komponente jsCow.res.model.input

@author Mario Linz
@class jsCow.res.model.input
@type Object
@module jsCow.res.model.input
@constructor 
*/
jsCow.res.model.input = function() {
	
	/**
	Systemname oder Bezeichnung des Model.
	
	@property type
	@type String
	@default "jsCow.res.model.checkbox"
	**/
	this.type = "jsCow.res.model.input";	// system variable

	/**
	Konfiguration des Model.

	@property config
	@type Object
	@default "{
		enabled: true,
		input: "",
		align: "left",
		placeholder: "..."
	}"
	**/
	this.config = {
		enabled: true,
		input: "",
		align: "left",
		placeholder: "..."
	};
	
};
jsCow.res.model.input.prototype = {

	/**
	Wird bei Initialisierung des Komponenten-Model automatisch vom Framework ausgef�hrt.
	
	@method init
	**/
	init: function() {
		this.globalEvents.trigger("viewInit", this.getConfig(), this.getCmp());
	},
	
	/**
	Setzt den Value des Eingabefeldes, speichert ihn in der Model-Konfiguration und updatet den View.
	
	@method setValue
	**/
	setValue: function(e) {	
		if (this.isEnabled()) {
			this.setConfig({ 
				input: e.data.input
			});
			
			this.globalEvents.trigger("viewUpdate", this.getConfig(), this.getCmp());
		}
		
		return this;
	},
	
	/**
	Setzt den Default-Text des Eingabefeldes, speichert ihn in der Model-Konfiguration und updatet den View.
	
	@method setDefaultText
	**/
	setDefaultText: function(e) {
		if (this.isEnabled()) {
			this.setConfig({ 
				placeholder: e.data.placeholder
			});
			
			this.globalEvents.trigger("viewUpdate", this.getConfig(), this.getCmp());
		}
		
		return this;
	},
	
	/**
	Setzt die Ausrichtung des Eingabefeldes, speichert ihn in der Model-Konfiguration und updatet den View.
	
	@method setAlign
	**/
	setAlign: function(e) {	
		this.setConfig({ 
			align: e.data.align
		});
		
		this.globalEvents.trigger("viewUpdate", this.getConfig(), this.getCmp());
		
		return this;
	}
	
};

/*
 * jsCow.res.view.input - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: November 08 20:00:00 2011
 */

/**
MVC-View der Komponente jsCow.res.view.input

@author Mario Linz
@class jsCow.res.view.input
@type Object
@module jsCow.res.view.input
@constructor 
*/
jsCow.res.view.input = function() {

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
	this.type = "jsCow.res.view.input";	// system variable
	
	/**
	Objekt f�r alle ben�tigten HTML-DOM Elemente der Komponente.
	
	@property dom
	@type Object
	@default "{}"
	**/
	this.dom = {};
	this.dom.main = $('<div/>').addClass('jscow-form-input-group');
	this.dom.group = $('<div/>').addClass('jscow-form-input').appendTo(this.dom.main);
	this.dom.input = $('<input/>').addClass('jscow-form-input-field').appendTo(this.dom.group);
	
};
jsCow.res.view.input.prototype = {
	
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
		
		var self = this.getCmp();
		var view = this;
		
		this.dom.input.val(cfg.input).keyup(function() {
			
			self.globalEvents.trigger("setValue", {
				input: view.dom.input.val()
			}, self);
			
		}).attr({
			placeholder: cfg.placeholder}
		);
		
		this.setAlign(cfg.align);
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
			
			if (!cfg.enabled || cfg.globalDisabled) {
				
				this.dom.group.addClass('jscow-form-input-disabled').removeClass('jscow-form-input');
				this.dom.input.attr("readonly","readonly");
				
			}else{
				
				this.dom.group.addClass('jscow-form-input').removeClass('jscow-form-input-disabled');
				this.dom.input.removeAttr("readonly");
				
				this.dom.input.val(cfg.input);
				this.dom.input.attr({placeholder: cfg.placeholder});
				
				this.setAlign(cfg.align);
				
				// Hide / Show
				if (cfg.hide) this.dom.main.addClass('jscow-hide'); else this.dom.main.removeClass('jscow-hide');
				
			}
			
		}
		return this;
	},
	
	/**
	Setzt die Ausrichtung des Inputfeldes.
	
	@method setAlign
	@param {String} align left|right|fillup
	**/
	setAlign: function(align) {
		switch (align) {
			case "left":
				this.dom.main.removeClass("jscow-align-none jscow-align-right").addClass("jscow-align-left");
			break;
			case "right":
				this.dom.main.removeClass("jscow-align-none jscow-align-left").addClass("jscow-align-right");
			break;
			case "fillup":
				this.dom.main.removeClass("jscow-align-left jscow-align-right").addClass("jscow-align-none");
			break;
			default:
				this.dom.main.removeClass("jscow-align-left jscow-align-right").addClass("jscow-align-none");
			break;
		}
	},
	
	/**
	Setzt die Focus CSS Klasse.
	
	@method setFocus
	@param {Object} e Event-Parameter, die an die Methode �bergeben werden. 
	**/
	setFocus: function(e) {
		this.dom.main.addClass("jscow-focus");
	}
	
};

/*
 * jsCow.res.controller.input - jsCow extention - JavaScript Library
 * http://www.gelight-tec.de/
 *
 * Copyright 2011, Mario Linz
 * http://www.gelight-tec.de/gui/license
 *
 * Date: November 08 20:00:00 2011
 */

/**
MVC-Controller der Komponente jsCow.res.controller.input

@author Mario Linz
@class jsCow.res.controller.input
@type Object
@module jsCow.res.controller.input
@constructor 
*/
jsCow.res.controller.input = function() {

	/**
	Systemname oder Bezeichnung des Controller.

	@property type
	@type String
	@default "jsCow.res.controller.input"
	**/
	this.type = "jsCow.res.controller.input";	// system variable
	
};
jsCow.res.controller.input.prototype = {
	
	/**
	Die init Methode des MVC-Controller wird automatisch vom Framework ausgef�hrt, wenn der Controller Initialisiert wird.
	
	@method init
	**/
	init: function() {
		// ...
	},
	
	/**
	Nimmt das Event "setValue" entgegen und f�hrt sofern diese existiert, eine entsprechende Handler-Methode im Model aus.
	
	@method handleSetValue
	@param {Object} e Event-Parameter, die an die Methode �bergeben werden. 
	**/
	handleSetValue: function(e) {
		if (this.isMethodExists(this.getModel().setValue)) this.getModel().setValue(e);
		
		return this;
	},
	
	/**
	Nimmt das Event "setDefaultText" entgegen und f�hrt sofern diese existiert, eine entsprechende Handler-Methode im Model aus.
	
	@method handleSetDefaultText
	@param {Object} e Event-Parameter, die an die Methode �bergeben werden. 
	**/
	handleSetDefaultText: function(e) {
		if (this.isMethodExists(this.getModel().setDefaultText)) this.getModel().setDefaultText(e);
		
		return this;
	},
	
	/**
	Nimmt das Event "setAlign" entgegen und f�hrt sofern diese existiert, eine entsprechende Handler-Methode im Model aus.
	
	@method handleSetAlign
	@param {Object} e Event-Parameter, die an die Methode �bergeben werden. 
	**/
	handleSetAlign: function(e) {
		if (this.isMethodExists(this.getModel().setAlign)) this.getModel().setAlign(e);
		
		return this;
	}
	
};

