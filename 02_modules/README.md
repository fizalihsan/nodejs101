
* Simple parser which adds up the values for each letter from the log file
* `module.exports = Parser` exports the `Parser` object constructor from module `parser_client.js`, this is so clients can create instances of `Parser` object

```bash
$ node parser_client.js
{ A: 2, B: 14, C: 6 } 
```