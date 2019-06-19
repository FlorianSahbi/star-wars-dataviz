'use strict';
/**
 * 
 * Lire le dossier et retourner les fichiers
 * Lire chaque fichier du dossier et parser le JSON
 * Pour chaque node d'un episode ouvrir le fichier correspondant
 * 
 */
const fs = require('fs');


class dataManip {

    getInteractionsFiles() {
        let files = ['starwars-episode-1-interactions.json',
            'starwars-episode-2-interactions.json',
            'starwars-episode-3-interactions.json',
            'starwars-episode-4-interactions.json',
            'starwars-episode-5-interactions.json',
            'starwars-episode-6-interactions.json',
            'starwars-episode-7-interactions.json'];

        fs.readdir(`../newInteractions`, (err, files) => {
        })
        return files;
    }

    resetFile() {
        fs.readdir(`../targetDataSet/people`, (err, files) => {
            for (const file of files) {
                fs.readFile(`../targetDataSet/people/${file}`, (err, data) => {
                    data = JSON.parse(data);
                    data.people.films = [];
                    data = JSON.stringify(data, null, 2);

                    fs.writeFile(`../targetDataSet/people/${file}`, data, (err) => {
                        if (err) {
                            throw err
                        }
                        else {
                            console.log(`${file} : Done`);
                        }
                    })
                })
            }
        })
    }

    adaptEpisode(episodeNumber) {
        switch (episodeNumber) {
            case 1: return 4;
            case 2: return 5;
            case 3: return 6;
            case 4: return 1;
            case 5: return 2;
            case 6: return 3;
            case 7: return 7;
        }
    }

    setMovies(fileName) {
        fs.readFile(`../newInteractions/${fileName}`, (err, data) => {
            if (err) {
                throw err;
            } else {
                let episodeNumber = Number(fileName.match(/[0-9]+/g)[0]);
                episodeNumber = this.adaptEpisode(episodeNumber);
                
                data = JSON.parse(data);
                data.nodes.forEach(node => {
                    fs.readFile(`../targetDataSet/people/${node.idSwapi}.json`, (err, charFile) => {
                        if (err) {
                            throw err
                        }
                        console.log(`Adding film ${episodeNumber} for character : ${node.idSwapi}`)
                        let charData = JSON.parse(charFile);

                        charData.people.films.push(episodeNumber)

                        charData = JSON.stringify(charData, null, 2);

                        setTimeout(() => {

                            fs.writeFile(`../targetDataSet/people/${node.idSwapi}.json`, charData, (err) => {
                                if (err) {
                                    throw err
                                }
                                else {
                                    console.log(`Done`);
                                }
                            });
                        }, 2000);

                    })
                });
            }
        })
    }

    unitTest() {
        console.log('it works');
    }

}

const manipData = new dataManip;

manipData.unitTest();
// manipData.resetFile();
// manipData.setMovies();
let film1 = manipData.getInteractionsFiles()[0];
let film2 = manipData.getInteractionsFiles()[1];
let film3 = manipData.getInteractionsFiles()[2];
let film4 = manipData.getInteractionsFiles()[3];
let film5 = manipData.getInteractionsFiles()[4];
let film6 = manipData.getInteractionsFiles()[5];
let film7 = manipData.getInteractionsFiles()[6];
// console.log(film1)
manipData.setMovies(film1);



