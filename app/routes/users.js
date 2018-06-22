function signup(req, res) {
    var email = req.body['email'];
    var password = req.body['password'];

    //Valide email
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    // req.checkBody('email', 'User already exists').custom();

    req.checkBody('password', 'Password is required').notEmpty();

    //Check email
    

    var errors =  req.validationErrors();
    if (errors) {
        res.status(400).send('{ error: ' + JSON.stringify(errors[0]['msg']) + '}');
    }
    else {
         res.status(200).send('{ msg: "Valid part signup needs to be implemented" }');
        // res.status(200).send('{session: <token> }\n');
    }
}

function login(req, res) {
    res.status(200).send('{ msg: "Need to implement this" }\n');
}

module.exports = function(app, db){
    app.post('/user/signup', (req, res) => signup(req, res));
    app.post('/user/login', (req, res) => login(req, res));

};