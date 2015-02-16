var applicationPreferences = {

	get : function(key, success, fail) {
		cordova.exec(success, fail, "ApplicationPreferences", "get", [ key ]);
	},

	set : function(key, value, success, fail) {
		cordova.exec(success, fail, "ApplicationPreferences", "set", [ key,
				value ]);
	},

	load : function(success, fail) {
		cordova.exec(success, fail, "ApplicationPreferences", "load", []);
	},

	show : function(activity, success, fail) {
		cordova.exec(success, fail, "ApplicationPreferences", "show",
				[ activity ]);
	},

	clear : function(success, fail) {
		cordova.exec(success, fail, "ApplicationPreferences", "clear", []);
	},

	remove : function(keyToRemove, success, fail) {
		cordova.exec(success, fail, "ApplicationPreferences", "remove",
				[ keyToRemove ]);
	}

}
// applicationPreferences

module.exports = applicationPreferences;
