const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');

/*  The following was implemented in week 2
    using: https://www.youtube.com/watch?v=Z1ktxiqyiLA
*/
const cookieParser      = require('cookie-parser');
const exphbs            = require('express-handlebars');
const expressValidator  = require('express-validator');
const flash             = require('connect-flash');
const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy;
// End week 2 implementation

/*  The following was implemented to support postgresql
    using https://expressjs.com/en/guide/database-integration.html#postgresql
*/
const pgp   = require('pg-promise');
const dbproperties = {
    host: 'localhost',
    port: 5432,
    user: 'hacker',
    password: 'hackerbay',
}
var db      = pgp(dbproperties);




const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true}));
app.set('json spaces', 4);

require('./app/routes')(app, {});
app.listen(port, () => {
    console.log('We are live on ' + port);
});
