"use strict";

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: 'swdv'
});

con.connect(err => {
    if (err) {
        throw err;
    }
});


exports.getAllInteractionsAction = (req, res) => {

    var query = `SELECT s.name AS sourceName, t.name AS targetName, l.value
             FROM links AS l
             INNER JOIN characters AS s
             ON l.sourceId = s.character_id
             INNER JOIN characters AS t
             ON l.targetId = t.character_id
             ORDER BY s.name ASC`;

    con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
    });
};

exports.getInteractionAction = (req, res) => {
    var tab = [];
    let removeDuplicata = (node) => {
        if (tab.indexOf(node.id) === -1) {
            tab.push(node.id);
            return true;
        } else {
            return false;
        }
    };

    var query2 = `SELECT s.name AS sourceName, 
                    s.character_id AS sourceCharacterId, 
                    t.name AS targetName, 
                    t.character_id AS targetCharacterId, 
                    l.value
                    FROM links AS l
                    INNER JOIN characters AS s
                    ON l.sourceId = s.character_id
                    INNER JOIN characters AS t
                    ON l.targetId = t.character_id
                    WHERE s.name = '${req.params.characterName}'
                    ORDER BY s.name ASC`;

    con.query(query2, (err, result) => {
        if (err) {
            throw err;
        }

        let data = {
            "nodes": [],
            "links": []
        }
        result.forEach(element => {
            let nodeTarget = {
                "id": element.targetCharacterId,
                "name": element.targetName
            }

            let nodeSource = {
                "id": element.sourceCharacterId,
                "name": element.sourceName
            }

            let link = {
                "source": element.sourceCharacterId,
                "target": element.targetCharacterId,
                "value": element.value
            }
            data.links.push(link);
            data.nodes.push(nodeTarget);
            data.nodes.push(nodeSource);


        });
        data.nodes = data.nodes.filter(removeDuplicata);
    });
};

exports.getInteractionByEpisodeIdAction = (req, res) => {
    let episodeId = req.params.episodeId;
    let nodeId = null;
    let linkId = null;
    switch (episodeId) {
        case 'I': nodeId = 4; linkId = 4; break;
        case 'II': nodeId = 5; linkId = 5; break;
        case 'III': nodeId = 6; linkId = 6; break;
        case 'IV': nodeId = 1; linkId = 1; break;
        case 'V': nodeId = 2; linkId = 2; break;
        case 'VI': nodeId = 3; linkId = 3; break;
        case 'VII': nodeId = 7; linkId = 7; break;
    }
    let data = {
        "nodes": [],
        "links": []
    }

    var nodes = `   SELECT c.name AS char_name,
                    c.character_id AS char_id,
                    c.affiliation AS char_affiliation,
                    c.mass AS char_mass,
                    c.height AS char_height,
                    c.gender AS char_gender,
                    c.img AS char_img,
                    s.name AS species_name
                    FROM characters AS c
                    JOIN films_characters AS fc
                    ON c.character_id = fc.character_id
                    JOIN species AS s
                    ON c.species = s.species_id
                    WHERE fc.film_id = ${nodeId}`;

    var links = `   SELECT *
                    FROM links AS l
                    WHERE l.episodeId = ${linkId}`;

    con.query(nodes, (err, result) => {
        if (err) {
            throw err
        }

        result.forEach(element => {

            if (element.char_mass === null || element.char_mass === undefined || element.char_mass === "null" || element.char_mass === "undefined") {
                element.char_mass = "Unknown";
            }

            if (element.char_height === null || element.char_height === undefined || element.char_height === "null" || element.char_height === "undefined") {
                element.char_height = "Unknown";
            }

            let node = {
                name: element.char_name,
                id: element.char_id,
                affiliation: element.char_affiliation,
                mass: element.char_mass,
                height: element.char_height,
                gender: element.char_gender,
                species: element.species_name,
                // img: element.char_img,
                img: `character${element.char_id}`,
                homeworld: element.planet_name,
            }
            data.nodes.push(node);
        });
    });

    con.query(links, (err, result) => {
        if (err) {
            throw err
        }
        result.forEach(element => {
            let link = {
                source: element.newSourceId,
                target: element.newTargetId,
                value: element.value / 100 * 5,
            }
            data.links.push(link);
        });
    });
    setTimeout(() => {
        res.send(data);
    }, 500);
};

exports.getRadarDataAction = (req, res) => {
    var { characterId, episodeId } = req.params;
    console.log(characterId, episodeId);
    var queryInteractionsDroids = ` SELECT SUM(l.value) AS sum 
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON l.newSourceId = sc.character_id 
                                    JOIN characters as tc 
                                    ON l.newTargetId = tc.character_id 
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.character_id = ${characterId}
                                    AND s.name = 'Droid'
                                    AND l.episodeId = ${episodeId}`;

    var queryDroidsTotal = ` SELECT SUM(l.value) AS sum 
                             FROM characters AS sc 
                             JOIN links as l 
                             ON l.newSourceId = sc.character_id 
                             JOIN characters as tc 
                             ON l.newTargetId = tc.character_id 
                             JOIN species as s 
                             ON tc.species = s.species_id 
                             WHERE s.name = 'Droid'
                             AND l.episodeId = ${episodeId}`;

    var queryInteractionsHumans = ` SELECT SUM(l.value) AS sum
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON sc.character_id = l.newSourceId
                                    JOIN characters as tc 
                                    ON tc.character_id = l.newTargetId
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.character_id = ${characterId}
                                    AND s.name = 'human'
                                    AND l.episodeId = ${episodeId}`;

    var queryHumansTotal = ` SELECT SUM(l.value) AS sum 
                             FROM characters AS sc 
                             JOIN links as l 
                             ON l.newSourceId = sc.character_id 
                             JOIN characters as tc 
                             ON l.newTargetId = tc.character_id 
                             JOIN species as s 
                             ON tc.species = s.species_id 
                             WHERE s.name = 'human'
                             AND l.episodeId = ${episodeId}`;

    var queryInteractionsAliens = ` SELECT SUM(l.value) AS sum 
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON l.newSourceId = sc.character_id 
                                    JOIN characters as tc 
                                    ON l.newTargetId = tc.character_id 
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.character_id = ${characterId}
                                    AND s.name != 'Droid'
                                    AND s.name != 'Human'
                                    AND l.episodeId = ${episodeId}`;

    var queryAliensTotal = ` SELECT SUM(l.value) AS sum 
                             FROM characters AS sc 
                             JOIN links as l 
                             ON l.newSourceId = sc.character_id 
                             JOIN characters as tc 
                             ON l.newTargetId = tc.character_id 
                             JOIN species as s 
                             ON tc.species = s.species_id 
                             WHERE s.name != 'Human'
                             AND s.name != 'Droid'
                             AND l.episodeId = ${episodeId}`;

    var queryInteractionsLight = `  SELECT SUM(l.value) AS sum
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON l.newSourceId = sc.character_id 
                                    JOIN characters as tc 
                                    ON l.newTargetId = tc.character_id 
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.character_id = ${characterId}
                                    AND tc.affiliation = 'light'
                                    AND l.episodeId = ${episodeId}`;

    var queryLightTotal = ` SELECT SUM(l.value) AS sum 
                             FROM characters AS sc 
                             JOIN links as l 
                             ON l.newSourceId = sc.character_id 
                             JOIN characters as tc 
                             ON l.newTargetId = tc.character_id 
                             JOIN species as s 
                             ON tc.species = s.species_id 
                             WHERE tc.affiliation = 'light'
                             AND l.episodeId = ${episodeId}`;

    var queryInteractionsDark = `   SELECT SUM(l.value) AS sum 
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON l.newSourceId = sc.character_id 
                                    JOIN characters as tc 
                                    ON l.newTargetId = tc.character_id 
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.character_id = ${characterId}
                                    AND tc.affiliation = 'dark'
                                    AND l.episodeId = ${episodeId}`;

    var queryDarkTotal = `  SELECT SUM(l.value) AS sum 
                            FROM characters AS sc 
                            JOIN links as l 
                            ON l.newSourceId = sc.character_id 
                            JOIN characters as tc 
                            ON l.newTargetId = tc.character_id 
                            JOIN species as s 
                            ON tc.species = s.species_id 
                            WHERE tc.affiliation = 'dark'
                            AND l.episodeId = ${episodeId}`;

    var queryInteractionsNeutral = ` SELECT SUM(l.value) AS sum 
                                     FROM characters AS sc 
                                     JOIN links as l 
                                     ON l.newSourceId = sc.character_id 
                                     JOIN characters as tc 
                                     ON l.newTargetId = tc.character_id 
                                     JOIN species as s 
                                     ON tc.species = s.species_id 
                                     WHERE sc.character_id = ${characterId}
                                     AND tc.affiliation = 'neutral'
                                     AND l.episodeId = ${episodeId}`;

    var queryNeutralTotal = `   SELECT SUM(l.value) AS sum 
                                FROM characters AS sc 
                                JOIN links as l 
                                ON l.sourceId = sc.character_id 
                                JOIN characters as tc 
                                ON l.newTargetId = tc.character_id 
                                JOIN species as s 
                                ON tc.species = s.species_id 
                                WHERE tc.affiliation = 'neutral'
                                AND l.episodeId = ${episodeId}`;

    var interactions = [0, 0, 0, 0, 0, 0]

    var value = {
        droids: {
            part: 0,
            total: 0,
        },
        humans: {
            part: 0,
            total: 0,
        },
        aliens: {
            part: 0,
            total: 0,
        },
        light: {
            part: 0,
            total: 0,
        },
        dark: {
            part: 0,
            total: 0,
        },
        neutral: {
            part: 0,
            total: 0,
        }
    }

    var getPercent = (part, total) => {
        return 100 * part / total;
    }


    con.query(queryInteractionsDroids, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.droids.part = result[0].sum;
    });

    con.query(queryDroidsTotal, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.droids.total = result[0].sum;
    });

    con.query(queryInteractionsHumans, (err, result) => {
        if (err) {
            throw err
        }
        // if (result[0].sum === null || result[0].sum === undefined) {
        //     result[0].sum = 0;
        // }
        console.log('ok')
        console.log(result)
        console.log(queryInteractionsHumans)
        console.log('call human')
        console.log(result[0].sum)

        value.humans.part = result[0].sum;
    });

    con.query(queryHumansTotal, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.humans.total = result[0].sum;
    });

    con.query(queryInteractionsAliens, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.aliens.part = result[0].sum;
    });

    con.query(queryAliensTotal, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.aliens.total = result[0].sum;
    });

    con.query(queryInteractionsLight, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.light.part = result[0].sum;
    });

    con.query(queryLightTotal, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.light.total = result[0].sum;
    });

    con.query(queryInteractionsDark, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.dark.part = result[0].sum;
    });

    con.query(queryDarkTotal, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.dark.total = result[0].sum;
    });

    con.query(queryInteractionsNeutral, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.neutral.part = result[0].sum;
    });

    con.query(queryNeutralTotal, (err, result) => {
        if (err) {
            throw err
        }
        if (result[0].sum === null) {
            result[0].sum = 0;
        }
        value.neutral.total = result[0].sum;
    });

    setTimeout(() => {
        console.log(value);
        interactions[1] = Math.round(getPercent(value.droids.part, value.droids.total)*3);
        interactions[5] = Math.round(getPercent(value.humans.part, value.humans.total)*3);
        interactions[0] = Math.round(getPercent(value.aliens.part, value.aliens.total)*3);
        interactions[2] = Math.round(getPercent(value.dark.part, value.dark.total)*3);
        interactions[4] = Math.round(getPercent(value.light.part, value.light.total)*3);
        interactions[3] = Math.round(getPercent(value.neutral.part, value.neutral.total)*3);
        console.log(interactions);
        res.send(interactions);
    }, 500);
};