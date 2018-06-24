var bcrypt = require('bcryptjs');
var SchemaObject = require('schema-object');
const pgp   = require('pg-promise')(/*options*/);
const connection = {
    host: 'localhost',
    port: 5432,
    user: 'hacker',
    password: '',
    database: 'hackerbay'
};
var db      = pgp(connection);

const saltRounds = 10;

var User = new SchemaObject({
    email: String,
    password: String
}, {
    constructors: {
        default: function(values) {
            this.email = values.email
            this.password = bcrypt.hashSync(values.password + values.email, saltRounds);
        },
        fromEmail: function(email) {

        }
    },
    methods: {
        getEmail: function() { return this.email },
        save:   function() {
            db.none('INSERT INTO users(email, password) VALUES(${email}, ${password})', this.toObject()) 
            .then(()=>console.log('success')).then(()=>console.log('failure'));
        },
    },

});

module.exports = User