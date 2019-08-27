var router = require('./src/routes/routes');

var app = router(9000);

var pessoas = [
    {nome: "Bruno Amaral Futema", idade: 22 },
    {nome: "Amanda Cano", idade: 23 },
    {nome: "Alexandre Vardai", idade: 18 }
];

app.get('/pessoas', function (req, res) {
    res.write(JSON.stringify(pessoas, null, 2));
    res.end();
});

app.options('/pessoas', function (req, res) {
    res.end();
});