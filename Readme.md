## ExtractValues

This is a simple helper to extract values from a string based on a pattern.

### Examples

```javascript

    extractValues("/2012/08/12/test.html", "/{year}/{month}/{day}/{title}.html")
    >> { "year": "2012", "month": "08", "day": "12", "title": "test" }

    extractValues("John Doe <john@example.com> (http://example.com)", "{name} <{email}> ({url})")
    >> {"name": "John Doe", "email": "john@example.com", "url": "http://example.com" }

    extractValues("from 4th October  to 10th  October", "from `from` to `to`", { whitespace: 1, delimiters: ["`", "`"] })
    >> {"from": "4th October", "to": "10th October" }

    extractValues("Convert 1500 Grams to Kilograms", "convert {quantity} {from_unit} to {to_unit}", { lowercase: true })
    >> {"quantity": "1500", "from_unit": "grams", "to_unit": "kilograms" }]

```

### How to Use

#### Install as a NPM package

```
    npm install extract-values
```

* Then `require` in your project.
    
```javascript
    var extractValues = require("extract-values");
```

#### Use with web apps (in Browser)

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src='extract_values.js'></script>
    <script type="text/javascript">
        var parsedDate = extractValues("/2012/08/12/test.html", "/{year}/{month}/{day}/{title}.html")
        //{ "year": "2012", "month": "08", "day": "12", "title": "test" }
    </script>
</head>
<body></body>
</html>
```

### Unit Tests

Run `node tests.js`.

```shell
$ node tests.js
14 tests pass
```

### Options

**whitespace** - normalizes the whitespace in the input string, so it can be aligned with the given pattern. You can define the number of continous whitespaces to contain in the string. Making it zero (0) will remove all whitespaces.

**lowercase** - converts the input string to lowercase before matching.

**delimiters** - If specify the delimiters used in the pattern to define the values. Default delimiters are `{` and `}`.

### Licence

[MIT LICENSE](https://github.com/laktek/punch/blob/master/LICENSE)
