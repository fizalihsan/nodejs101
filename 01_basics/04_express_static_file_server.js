var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

// http://localhost:8080/test.txt
app.listen(8080);