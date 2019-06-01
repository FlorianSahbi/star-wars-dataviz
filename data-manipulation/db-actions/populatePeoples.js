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

fs.readdir(`./targetDataSet/people`, (err, files) => {
    files.forEach(file => {
        fs.readFile(`./targetDataSet/people/${file}`, (err, data) => {
            data = JSON.parse(data);
            const { idSwapi, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, url, species } = data.people;
            var sql = `INSERT INTO characters(character_id, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, species, url) 
                            VALUES (${idSwapi},"${name}","${height}","${mass}","${hair_color}","${skin_color}","${eye_color}","${birth_year}","${gender}",${homeworld}, ${species}, "${url}")`;
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

