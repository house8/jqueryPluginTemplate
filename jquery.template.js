/**
 * plugin v0.0.1 - jQuery PlugIn Template
 *
 */

;(function($){

	var defaults = {

		// GENERAL VARS
		var1: 'String',
		var2: 13,
		var3: true,

		// CALLBACKS
		publicFunction1: function() {},
		publicFunction2: function() {}
	}

	$.fn.plugin = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).plugin(options)});
			return this;
		}

		// create a namespace (namespace) to be used throughout the plugin
		var namespace = {};
		
		// set a reference to our namespace element
		var el = this;


		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			
			// merge user-supplied options with the defaults
			namespace.settings = $.extend({}, defaults, options);

			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function( ){
			console.log( "1. call - private function from -init-" );
		}

		var loadElements = function( ){
			console.log( "3. call - private function from public function" );		
		}

		var start = function(){
			// if infinite loop, prepare additional slides	
		}

		

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		el.publicFunction1 = function(){
			console.log( "2. call - public function" );
			loadElements( );
		}

		el.publicFunction2 = function(){
			
		}

		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);
