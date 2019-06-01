'use strict';

const fs = require('fs');

const getFullInteractionsNodes = () => {
    let fullInteractions = [];
    return new Promise((resolve, reject) => {
        fs.readFile(`./sourceDataSet/interactions/starwars-full-interactions.json`, (err, file) => {
            if (err) {
                reject(err);
            } else {
                fullInteractions = JSON.parse(file);
                resolve(fullInteractions.nodes)
            }
        })
    })
}

fs.readdir(`./sourceDataSet/interactions`, (err, files) => {
    for (const file of files) {
        if (!file.includes('.git') && !file.includes('starwars-full-interactions.json')) {

            fs.readFile(`./sourceDataSet/interactions/${file}`, async (err, data) => {
                if (err) {
                    throw err;
                } else {
                    data = JSON.parse(data);
                    let nodesChar = data.nodes
                    let allInteractionsNodes = await getFullInteractionsNodes();

                   
                    nodesChar.forEach(currentNode => {
                        allInteractionsNodes.forEach(fullNode => {
                            if (currentNode.name === fullNode.name) {
                                currentNode.api = fullNode.api;
                            }
                        });
                    });

                    data = JSON.stringify(data, null, 2);
                    setTimeout(() => {
                        fs.writeFile(`./targetDataSet/interactions/${file}`, data, (err) => {
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

        }
    }
})

// fs.readdir('./sourceDataSet/interactions', (err, dir) => {
//     dir.forEach(item => {
//         if (item !== '.DS_Store') {
//             fs.readdir(`./sourceDataSet/${item}`, (err, files) => {
//                 if (err) { console.log(err) }
//                 files.forEach(file => {
//                     fs.readFile(`./sourceDataSet/${item}/${file}`, (err, data) => {
//                         if (file !== '.git') {
//                             if (err) { console.log(err) }
//                             data = JSON.parse(data);
//                             
//                         }
//                     })
//                 })
//             })
//         }
//     })
// })
