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
            const { idSwapi, title, episode_id, director, producer, release_date, url} = data.film;
            var sql = `INSERT INTO films(film_id, title, episode_id, director, producer, release_date, url) 
                        VALUES (${idSwapi},"${title}",${episode_id},"${director}","${producer}","${release_date}","${url}")`;
            con.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("1 record inserted");
                }
            });
        })
    })
});

