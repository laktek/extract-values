(function() {

	var extractValues = function(str, pattern, options) {
		options = options || {};
		var delimiters = options.delimiters || ["{", "}"];
		var lowercase = options.lowercase;
		var whitespace = options.whitespace;

		var special_chars_regex = /[\\\^\$\*\+\.\?\(\)]/g;
		var token_regex = new RegExp( delimiters[0] + "([^" + delimiters.join("") + "\t\r\n]+)" + delimiters[1], "g");
		var tokens = pattern.match(token_regex);
		var pattern_regex = new RegExp(pattern.replace(special_chars_regex, "\\$&").replace(token_regex, "(\.+)"));

		if (lowercase) {
			str = str.toLowerCase();
		}

		if (whitespace) {
			str = str.replace(/\s+/g, function(match) {
				var whitespace_str = "";
				for (var i = 0; i < whitespace; i++) {
					whitespace_str = whitespace_str + match.charAt(0);
				}
				return whitespace_str;
			});
		}

		var matches = str.match(pattern_regex);

		if (!matches) {
			return null;
		}

    // Allow exact string matches to return an empty object instead of null
    if (!tokens) {
      return (str === pattern) ? {} : null;
    }

		matches = matches.splice(1);
		var output = {};
		for (var i=0; i < tokens.length; i++) {
			output[tokens[i].replace( new RegExp( delimiters[0] + "|" + delimiters[1], "g"), "")] = matches[i];
		}

		return output;
	};

	if(typeof(window) !== "undefined") {
		window.extractValues = extractValues;
	} else {
		module.exports = extractValues;
	}

})();
