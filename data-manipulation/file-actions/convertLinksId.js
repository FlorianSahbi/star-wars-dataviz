'use strict';

const fs = require('fs');

fs.readdir(`./targetDataSet/interactions`, (err, files) => {
    if (err) { console.log(err) }
    if (err) throw err;
    files.forEach((file, i) => {
        console.log(`${i} / ${files.length - 1}`);
        if (file !== '.git') {
            fs.readFile(`./targetDataSet/interactions/${file}`, (err, data) => {
                console.log(`lecture de ${file}`)
                if (err) { console.log(err) }
                data = JSON.parse(data);

                switch (file) {
                    case 'starwars-episode-1-interactions.json':
                        data.links.forEach(link => {
                            link.episodeId = 4;
                        })
                        break;
                    case 'starwars-episode-2-interactions.json':
                        data.links.forEach(link => {
                            link.episodeId = 5;
                        })
                        break;
                    case 'starwars-episode-3-interactions.json':
                        data.links.forEach(link => {
                            link.episodeId = 6;
                        })
                        break;
                    case 'starwars-episode-4-interactions.json':
                        data.links.forEach(link => {
                            link.episodeId = 1;
                        })
                        break;
                    case 'starwars-episode-5-interactions.json':
                        data.links.forEach(link => {
                            link.episodeId = 2;
                        })
                        break;
                    case 'starwars-episode-6-interactions.json':
                        data.links.forEach(link => {
                            link.episodeId = 3;
                        })
                        break;
                    case 'starwars-episode-7-interactions.json':
                        data.links.forEach(link => {
                            link.episodeId = 7;
                        })
                        break;
                }


                data.nodes.forEach((node, i) => {
                    data.links.forEach((link, j) => {
                        if (i === link.source) {
                            link.newTarget = node.swapiId;
                        }
                        if (i === link.target) {
                            link.newSource = node.swapiId;
                        }
                    })
                })

                console.log(data.links);



                setTimeout(() => {
                    data = JSON.stringify(data, null, 2);
                    fs.writeFile(`./targetDataSet/interactions/${file}`, data, (err) => {
                        if (err) { throw err }
                        else {
                            console.log(`${file} OK`)
                        }
                    });
                }, 2000);

            });
        }
    })
})
