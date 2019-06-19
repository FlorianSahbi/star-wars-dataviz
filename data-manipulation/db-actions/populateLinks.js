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

fs.readdir(`../newInteractions`, (err, files) => {
    files.forEach(file => {
        fs.readFile(`../newInteractions/${file}`, (err, data) => {
            data = JSON.parse(data);

        

            data.links.forEach(link => {
                const { newSource, newTarget, value, target, source, episodeId } = link;
                var sql = `INSERT INTO links(sourceId, newSourceId, targetId, newTargetId, value, episodeId) 
                            VALUES (${source}, ${newSource}, ${target}, ${newTarget}, ${value}, ${episodeId})`;

                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                });
            });

        });
    })
});

