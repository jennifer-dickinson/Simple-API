const express           = require('express');
const path              = require('path');
const bodyParser        = require('body-parser');
const cookieParser      = require('cookie-parser');
const exphbs            = require('express-handlebars');
const expressValidator  = require('express-validator');
const flash             = require('connect-flash');
const session           = require('express-session');
const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy;

const app = express();
const port = process.env.PORT || 8000;

/* Database connection set up */
const pgp   = require('pg-promise')(/*options*/);
const connection = {
    host: 'localhost',
    port: 5432,
    user: 'hacker',
    password: '',
    database: 'hackerbay'
};
var db      = pgp(connection);

app.listen(port, function() {
    console.log('Server started on port ' + port)
});

// BodyParser Middle Ware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

// JSON Formatting
app.set('json spaces', 4);
 
// Set Static Foler (style sheets, images, jquery)
app.use(express.static(path.join(__dirname, 'pubic')));

// Express Session
app.use(session({ 
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
          var namespace = param.split('.')
          , root = namespace.shift()
          , formParam = root;

        while(namespace.length) {
            formParam += '[' +  namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg : msg,
            value: value,
        };
    }
}));

// Connect Flash
app.use(flash());

// Global Variables
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});



routes = require('./app/routes');
users = require('./app/routes/users');

app.use('/', routes);
app.use('/users', users);

 
// View engine
// app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
// app.set('view engine', 'handlebars');


db.any('SELECT * FROM product').then(
    eh => {console.log(eh);}
)