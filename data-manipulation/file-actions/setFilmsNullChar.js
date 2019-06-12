//*
//*
//* 
//* 
//*
'use strict';

const fs = require('fs');

fs.readdir(`../targetDataSet/people`, (err, files) => {
    for (const file of files) {
        let charId = Number(file.match(/[0-9]+/g)[0])
        // if (charId > 999) {

            fs.readFile(`../targetDataSet/people/${file}`, (err, peopleData) => {
                if (err) {
                    console.log(err);
                } else {
                    peopleData = JSON.parse(peopleData);
                    peopleData.people.films = [];

                    fs.readdir(`../newInteractions`, (err, intFiles) => {
                        intFiles.forEach(intFile => {
                            let episodeId = Number(intFile.match(/[0-9]+/g)[0]);
                            switch (episodeId) {
                                case 1: episodeId = 4; break;
                                case 2: episodeId = 5; break;
                                case 3: episodeId = 6; break;
                                case 4: episodeId = 1; break;
                                case 5: episodeId = 2; break;
                                case 6: episodeId = 3; break;
                            }
                            fs.readFile(`../newInteractions/${intFile}`, (err, n) => {
                                if (err) {
                                    throw err;
                                } else {
                                    n = JSON.parse(n);
                                    n.nodes.forEach(ch => {
                                        if (ch.name === peopleData.people.name) {
                                            peopleData.people.films.push(episodeId);
                                        }
                                    })

                                }
                            
                            });
                        })
                    })

                    
                    setTimeout(() => {
                        peopleData = JSON.stringify(peopleData);
                        fs.writeFile(`../targetDataSet/people/${file}`, peopleData, (err) => {
                            if (err) {
                                throw err
                            }
                            else {
                                console.log(`${file} : Done`);
                            }
                        });
                    }, 5000);
                }
            })

        // }

                            


    }
})
