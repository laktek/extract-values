## ExtractValues

This is a simple helper to extract values from a string based on a pattern.

### Examples

```javascript

	extractValues("/2012/08/12/test.html", "/{year}/{month}/{day}/{title}.html")
	>> { "year": "2012", "month": "08", "day": "12", "title": "test" }

	extractValues("John Doe <john@example.com> (http://example.com)", "{name} <{email}> ({url})")
	>> {"name": "John Doe", "email": "john@example.com", "url": "http://example.com" }

	extractValues("from 4th October  to 10th  October", "from `from` to `to`", { whitespace: 1, delimeters: ["`", "`"] })
	>> {"from": "4th October", "to": "10th October" }
```

### How to Use

* Install as a NPM package

```
	npm install extract-values
```

* Then `require` in your project.
	
```javascript
	var extractValues = require("extract-values");
```

* For client-side use, simply copy and paste the function (`extract_values.js`) in to your source.

### Licence

[MIT LICENSE](https://github.com/laktek/punch/blob/master/LICENSE)
