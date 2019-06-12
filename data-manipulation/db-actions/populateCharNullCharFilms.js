var mysql = require('mysql');
const fs = require('fs');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: 'swdv'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

fs.readdir(`../targetDataSet/people`, (err, files) => {
    files.forEach(file => {
        let fileId = Number(file.match(/[0-9]+/g)[0]);
        if (fileId > 999) {
            fs.readFile(`../targetDataSet/people/${file}`, (err, data) => {
                data = JSON.parse(data);
                data.people.films.forEach(film => {
                    console.log(film)
                    console.log(data.people.idSwapi)
                    var sql = `INSERT INTO films_characters(film_id, character_id) VALUES (${film},${data.people.idSwapi})`;
                    con.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log("1 record inserted");
                    })
                });
            })
        }
    })
})

