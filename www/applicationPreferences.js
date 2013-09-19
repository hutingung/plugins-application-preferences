cordova.define("com.appgiraffe.plugins.prefs.applicationPreferences", function(require, exports, module) {//cordova.define("com.simonmacdonald.prefs.applicationPreferences", function(require, exports, module) {

	alert('Made it to here.');

	// var cordova = require('cordova');
	// var exec = require("cordova/exec");

	var AppPreferences = function() {

		var AppPreferencesError = function(code, message) {
			this.code = code || null;
			this.message = message || '';
		};

		alert('Made it to here 2.');

		AppPreferencesError.NO_PROPERTY = 0;
		AppPreferencesError.NO_PREFERENCE_ACTIVITY = 1;

		AppPreferences.prototype.get = function(key, success, fail) {
			cordova.exec(success, fail, "applicationPreferences", "get",
					[ key ]);
		};

		AppPreferences.prototype.set = function(key, value, success, fail) {
			cordova.exec(success, fail, "applicationPreferences", "set", [ key,
					value ]);
		};

		AppPreferences.prototype.load = function(success, fail) {
			cordova.exec(success, fail, "applicationPreferences", "load", []);
		};

		AppPreferences.prototype.show = function(activity, success, fail) {
			cordova.exec(success, fail, "applicationPreferences", "show",
					[ activity ]);
		};

		AppPreferences.prototype.clear = function(success, fail) {
			cordova.exec(success, fail, "applicationPreferences", "clear", []);
		};

		AppPreferences.prototype.remove = function(keyToRemove, success, fail) {
			cordova.exec(success, fail, "applicationPreferences", "remove",
					[ keyToRemove ]);
		};

		// var appPreferences = new AppPreferences();
		module.exports = appPreferences;

	}

});

/**
 * if (!window.plugins) { window.plugins = {}; } if
 * (!window.plugins.applicationPreference) {
 * window.plugins.applicationPreference =
 * cordova.require("cordova/plugin/applicationpreferences"); }
 */
});
