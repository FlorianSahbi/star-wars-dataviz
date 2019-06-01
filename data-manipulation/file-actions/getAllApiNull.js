'use strict';

const fs = require('fs');



const fetchNoApiChar = (nodes) => {
    let charApiNull = [];
    return new Promise((resolve, reject) => {
        nodes.forEach(node => {
            if (node.api === null) {
                if (!charApiNull.includes(node.name)) {
                    charApiNull.push(node.name)
                }
            }
        });
        resolve(charApiNull);
    })
}

fs.readdir(`./sourceDataSet/interactions`, (err, files) => {
    var fullArray = [];
    for (const file of files) {
        if (!file.includes('.git')) {
            fs.readFile(`./targetDataSet/interactions/${file}`, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    data = JSON.parse(data);
                    fetchNoApiChar(data.nodes).then(res => {
                        fullArray = [...res];
                    });
                


                    // charApiNull = JSON.stringify(charApiNull, null, 2);
                    // setTimeout(() => {
                    //     fs.writeFile(`./targetDataSet/misc/${file}`, data, (err) => {
                    //         if (err) {
                    //             throw err
                    //         }
                    //         else {
                    //             console.log(`${file} : Done`);
                    //         }
                    //     });
                    // }, 5000);
                }
            })

        }

    }
    console.log(fullArray)
})
