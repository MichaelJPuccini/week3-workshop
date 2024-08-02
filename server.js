const PORT = 3000;

var express = require('express'); //used for routing
var formidable = require('formidable');

var app = express();
var http = require('http').Server(app); //used to provide http functionality

app.use (express.static(__dirname + '/www')); //serve static files from the public directory
app.use(express.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(express.json()) // parse application/json

var loginAccounts = [
    {email: 'admin@com.au', password: 'admin'},
    {email: 'user@com.au', password: 'user'},
    {email: 'guest@com.au', password: 'guest'}
];

// Week 3 Task 3
app.post('/account', function(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;

    // Check if the email and password match any of the accounts
    let account = loginAccounts.find(account => account.email === customer.email && account.password === customer.password);
    if (account) {
        console.log("Successful Login for " + customer.email);
        res.send ({valid: true});
    } else {    
        console.log("Login Attempt Failed for " + customer.email);
        res.send ({valid: false});
    }

    // res.send(customer);
});

let server = http.listen (PORT, function () {
    // let port = server.address().port;
    console.log(`Server listening on: http://localhost:${PORT}/`);
});
