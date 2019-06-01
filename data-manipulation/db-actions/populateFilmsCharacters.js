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

fs.readdir(`./targetDataSet/films`, (err, files) => {
    files.forEach(file => {
        fs.readFile(`./targetDataSet/films/${file}`, (err, data) => {
            data = JSON.parse(data);

            data.film.characters.forEach(character => {
                const { idSwapi } = data.film;
                var sql = `INSERT INTO films_characters(film_id, character_id) VALUES (${idSwapi},${character})`;

                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                })
            })
        })
    })
})

