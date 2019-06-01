'use strict';

const fs = require('fs');

fs.readdir(`./newInteractions`, (err, files) => {
    for (const file of files) {

        fs.readFile(`./newInteractions/${file}`, (err, data) => {
            if (err) {
                throw err;
            } else {
                data = JSON.parse(data);
                data.nodes.forEach(element => {
                    if (element.idSwapi > 999) {
                        fs.readFile(`./targetDataSet/people/${element.idSwapi}.json`, (err, charFile) => {
                            if (err) throw err;
                            charFile = JSON.parse(charFile);

                            charFile.people.films.push(Number(file.match(/[0-9]+/g)[0]))

                            charFile = JSON.stringify(charFile, null, 2);
                            setTimeout(() => {
                                fs.writeFile(`./targetDataSet/people/${element.idSwapi}.json`, charFile, (err) => {
                                    if (err) {
                                        throw err
                                    }
                                    else {
                                        console.log(`${file} : Done`);
                                    }
                                });
                            }, 5000);
                        })
                    }
                });
            }
        })

    }
})
