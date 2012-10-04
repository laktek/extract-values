var extract_values = require("./extract_values.js");
var assert = require("assert");

var cases = [
	[["a:b,c:d", "a:{a},c:{c}"], { "a": "b", "c": "d" }],

	[["/2012/08/12/test.html", "/{year}/{month}/{day}/{title}.html"], { "year": "2012", "month": "08", "day": "12", "title": "test" }],

	[["Content-Type: text/html; charset=utf-8", "Content-Type: {mime}; charset={charset}"], {"mime": "text/html", "charset": "utf-8" }],

	[["/assets/images/logo.jpg", "{dirpath}/{basename}.{extension}"], { "dirpath": "/assets/images", "basename": "logo", "extension": "jpg" }],

	[["Lakshan Perera <lakshan@web2media.net> (http://laktek.com)", "{name} <{email}> ({url})"], {"name": "Lakshan Perera", "email": "lakshan@web2media.net", "url": "http://laktek.com" }],

	[["a:b,c:d", "a:{{a}},c:{{c}}", { delimeters: ["{{", "}}"] }], { "a": "b", "c": "d" }],

	[["red  blue   green", "{first} {second} {third}", { whitespace: 1 }], {"first": "red", "second": "blue", "third": "green" }],

	[["from 4th October  to 10th  October", "from `from` to `to`", { whitespace: 1, delimeters: ["`", "`"] }], {"from": "4th October", "to": "10th October" }],

	[["4th October  to 10th  October", "from `from` to `to`", { whitespace: 1, delimeters: ["`", "`"] }], null]

]

for (var i = 0; i < cases.length; i++) {
	assert.deepEqual(extract_values.apply(this, cases[i][0]), cases[i][1]);
}
