var extractValues = function(str, pattern, options) {
	options = options || {};
	var delimeters = options.delimeters || ["{", "}"];
	var whitespace = options.whitespace;

	var special_chars_regex = /[\\\^\$\*\+\.\?\(\)]/g;
	var token_regex = new RegExp( delimeters[0] + "([^" + delimeters.join("") + "\t\r\n]+)" + delimeters[1], "g");
	var tokens = pattern.match(token_regex);
	var pattern_regex = new RegExp(pattern.replace(special_chars_regex, "\\$&").replace(token_regex, "(\.+)"));

	if (whitespace) {
		str = str.replace(/\s+/g, function(match) {
			var whitespace_str = "";
			for (var i = 0; i < whitespace; i++) {
				whitespace_str = whitespace_str + match.charAt(0);
			};
			return whitespace_str;
		});
	};

	var matches = str.match(pattern_regex)

	if (!matches) {
		return null;
	}

	matches = matches.splice(1);
	var output = {};
	for (var i=0; i < tokens.length; i++) {
		output[tokens[i].replace( new RegExp( delimeters[0] + "|" + delimeters[1], "g"), "")] = matches[i];
	}

	return output;
}

module.exports = extractValues;
