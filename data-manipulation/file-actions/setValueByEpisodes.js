'use strict';

const fs = require('fs');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: 'swdv'
});

con.connect(err => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + con.threadId);
});


fs.readdir(`./sourceDataSet/interactions`, (err, files) => {
    if (err) { 
        console.log(err) 
    }
    
    files.forEach((file, i) => {
        console.log(`${i} / ${files.length - 1}`);
        if (file !== '.git') {
            
            fs.readFile(`./sourceDataSet/interactions/${file}`, (err, data) => {
                if (err) { 
                    console.log(err) 
                }

                data = JSON.parse(data);

                data.nodes.forEach((node, i) => {
                    var sql = `SELECT name, character_id FROM characters WHERE name LIKE '%${node.name}%'`;
                    con.query(sql, (err, result) => {
                        if (err) { 
                            console.log(err) 
                        }
                        
                        result.forEach(res => {
                            node.swapiId = res.character_id;

                        })
                    });
                });
                console.log(`Dans ${file} : Fin lecture des nodes`);

                
                
                // setTimeout(() => {
                //     data = JSON.stringify(data, null, 2);
                //     fs.writeFile(`./targetDataSet/interactions/${file}`, data, (err) => {
                //         if (err) { throw err }
                //         else {
                //             console.log(`${file} OK`)
                //         }
                //     });

                // }, 10000);

            });
        }
    })
})
