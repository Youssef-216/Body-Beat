let express = require('express');
let app = express();

app.use('/', express.static('public'));

app.listen(4000, ( ) => {
    console.log("app is listening at localhost:4000");
});
