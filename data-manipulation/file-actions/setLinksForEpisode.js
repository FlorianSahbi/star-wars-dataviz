'use strict';

const fs = require('fs');

fs.readdir(`./newInteractions`, (err, files) => {
    for (const file of files) {
        fs.readFile(`./newInteractions/${file}`, async (err, data) => {
            if (err) {
                throw err;
            } else {
                data = JSON.parse(data);
                
                if(file === "starwars-episode-1-interactions.json") {
                    data.nodes.forEach((node, i) => {
                        data.links.forEach((link, j) => {
                            if (link.source === node.interactionId) {
                                link.newSource = node.idSwapi;
                            }
                            if (link.target === node.interactionId) {
                                link.newTarget = node.idSwapi;
                            }
                            link.episodeId = 4;
                        })
                    });
                }
                if(file === "starwars-episode-2-interactions.json") {
                    data.nodes.forEach((node, i) => {
                        data.links.forEach((link, j) => {
                            if (link.source === node.interactionId) {
                                link.newSource = node.idSwapi;
                            }
                            if (link.target === node.interactionId) {
                                link.newTarget = node.idSwapi;
                            }
                            link.episodeId = 5;
                        })
                    });
                }
                if(file === "starwars-episode-3-interactions.json") {
                    data.nodes.forEach((node, i) => {
                        data.links.forEach((link, j) => {
                            if (link.source === node.interactionId) {
                                link.newSource = node.idSwapi;
                            }
                            if (link.target === node.interactionId) {
                                link.newTarget = node.idSwapi;
                            }
                            link.episodeId = 6;
                        })
                    });
                }
                if(file === "starwars-episode-4-interactions.json") {
                    data.nodes.forEach((node, i) => {
                        data.links.forEach((link, j) => {
                            if (link.source === node.interactionId) {
                                link.newSource = node.idSwapi;
                            }
                            if (link.target === node.interactionId) {
                                link.newTarget = node.idSwapi;
                            }
                            link.episodeId = 1;
                        })
                    });
                }
                if(file === "starwars-episode-5-interactions.json") {
                    data.nodes.forEach((node, i) => {
                        data.links.forEach((link, j) => {
                            if (link.source === node.interactionId) {
                                link.newSource = node.idSwapi;
                            }
                            if (link.target === node.interactionId) {
                                link.newTarget = node.idSwapi;
                            }
                            link.episodeId = 2;
                        })
                    });
                }
                if(file === "starwars-episode-6-interactions.json") {
                    data.nodes.forEach((node, i) => {
                        data.links.forEach((link, j) => {
                            if (link.source === node.interactionId) {
                                link.newSource = node.idSwapi;
                            }
                            if (link.target === node.interactionId) {
                                link.newTarget = node.idSwapi;
                            }
                            link.episodeId = 3;
                        })
                    });
                }
                if(file === "starwars-episode-7-interactions.json") {
                    data.nodes.forEach((node, i) => {
                        data.links.forEach((link, j) => {
                            if (link.source === node.interactionId) {
                                link.newSource = node.idSwapi;
                            }
                            if (link.target === node.interactionId) {
                                link.newTarget = node.idSwapi;
                            }
                            link.episodeId = 7;
                        })
                    });
                }


             

                data = JSON.stringify(data, null, 2);
                setTimeout(() => {
                    fs.writeFile(`./newInteractions/${file}`, data, (err) => {
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
})


