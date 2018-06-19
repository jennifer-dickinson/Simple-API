data = ""

module.exports = function(app, db) {
    app.get('/', (req, res) => {
        res.send('{ status: success }\n');
    });
    app.post('/data', (req, res) => {
        data = req.body['data']
        res.send("{ data : \'" + data + "\' }");
    });
    app.get('/data', (req, res) => {
        res.send("{ data : \'" + data + "\' }")
    });

};