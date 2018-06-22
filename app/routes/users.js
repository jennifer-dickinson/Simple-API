module.exports = function(app, db){
    app.post('/user/signup', (req, res) => {
        var email = req.body['email'];
        var password = req.body['password'];
        // console.log(email, password);

        //Validation
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is required').notEmpty();


        var errors =  req.validationErrors();

        if (errors) {
            console.log('There are errors');
            console.log(errors);
        } else {
            console.log('No errors');
        }

        res.send('{email: ' + email +', password: ' + password + '}');
    });
};