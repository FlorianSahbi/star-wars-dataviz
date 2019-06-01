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

fs.readdir(`./targetDataSet/planets`, (err, files) => {
    files.forEach(file => {
        fs.readFile(`./targetDataSet/planets/${file}`, (err, data) => {
            data = JSON.parse(data);
            const { idSwapi, name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, url } = data.planet;
            var sql = `INSERT INTO planets(planet_id, name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, url) 
                        VALUES (${idSwapi},"${name}","${rotation_period}","${orbital_period}","${diameter}","${climate}","${gravity}","${terrain}","${surface_water}","${population}","${url}")`;
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

