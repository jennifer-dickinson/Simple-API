data = ""

module.exports = function(app, db) {
    // This is the default api request
    app.get('/', (req, res) => {
        res.send('{ status: success }\n');
    });

    // The following saves some string to the global variable data
    app.post('/data', (req, res) => {
        data = req.body['data']
        res.send("{ data : \'" + data + "\' }\n");
    });

    // The following retrieves the global variable data
    app.get('/data', (req, res) => {
        res.send("{ data : \'" + data + "\' }\n")
    });

};