const express           = require('express');
const path              = require('path');
const bodyParser        = require('body-parser');
const cookieParser      = require('cookie-parser');
const exphbs            = require('express-handlebars');
const expressValidator  = require('express-validator');
const flash             = require('connect-flash');
const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy;

const app = express();
const port = 8000;

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

app.listen(port);

// BodyParser Middle Ware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

app.set('json spaces', 4);

require('./app/routes')(app, db);
// require('./app/routes/users')(app, db);




// View engine
// app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
// app.set('view engine', 'handlebars');


db.any('SELECT * FROM product').then(
    eh => {console.log(eh);}
)