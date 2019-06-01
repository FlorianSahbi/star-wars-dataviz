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

fs.readdir(`./targetDataSet/species`, (err, files) => {
    files.forEach(file => {
        fs.readFile(`./targetDataSet/species/${file}`, (err, data) => {
            data = JSON.parse(data);
            const { idSwapi, name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, url } = data.species;
            var sql = `INSERT INTO species(species_id, name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, url) 
                        VALUES (${idSwapi},"${name}","${classification}","${designation}","${average_height}","${skin_colors}","${hair_colors}","${eye_colors}","${average_lifespan}",${homeworld},"${language}","${url}")`;
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

