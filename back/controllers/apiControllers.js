"use strict";

var mysql = require('mysql');
const fs = require('fs');


// var con = mysql.createConnection({
//     host: "remotemysql.com",
//     user: "EzDMCTuE86",
//     password: "s97esNZn0u",
//     database: "EzDMCTuE86"
// });

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
    console.log('call interation')
    let episodeId = req.params.episodeId;
    let nodeId = null;
    let linkId = null
    switch (episodeId) {
        case 'I':
            nodeId = 1;
            linkId = 4;
            break;
        case 'II':
            nodeId = 2;
            linkId = 5;
            break;
        case 'III':
            nodeId = 3;
            linkId = 6;
            break;
        case 'IV':
            nodeId = 4;
            linkId = 1;
            break;
        case 'V':
            nodeId = 5;
            linkId = 2;
            break;
        case 'VI':
            nodeId = 6;
            linkId = 3;
            break;
        case 'VII':
            nodeId = 7;
            linkId = 7;
            break;

    }
    let data = {
        "nodes": [],
        "links": []
    }

    var nodes = `   SELECT *, c.name AS char_name, p.name AS planet_name, s.name AS species_name
                    FROM characters AS c
                    JOIN films_characters AS fc 
                    ON c.character_id = fc.character_id
                    JOIN films AS f
                    ON fc.film_id = f.film_id
                    JOIN  planets AS p
                    ON c.homeworld = p.planet_id
                    JOIN species AS s
                    ON c.species = s.species_id
                    WHERE f.episode_id = ${nodeId}`;

    var links = `   SELECT *
                    FROM links AS l
                    WHERE l.episodeId = ${linkId}`;

    con.query(nodes, (err, result) => {
        if (err) {
            throw err
        }
        // console.log(result)
        result.forEach(element => {
            let node = {
                id: element.character_id,
                name: element.char_name,
                img: `character${element.character_id}`,
                affiliation: element.affiliation,
                gender: element.gender,
                species: element.species_name,
                homeworld: element.planet_name,
                mass: element.mass,
                height: element.height
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
            // value: element.value/100*5

            data.links.push(link);
        });
    });
    setTimeout(() => {
        res.send(data);
    }, 4000);
};

exports.getRadarDataAction = (req, res) => {
    var { characterName, episodeId } = req.params;
    var queryInteractionsDroids = ` SELECT SUM(l.value) AS sum 
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON l.sourceId = sc.character_id 
                                    JOIN characters as tc 
                                    ON l.targetId = tc.character_id 
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.name LIKE '%${characterName}%'
                                    AND s.name = 'Droid'
                                    AND l.episodeId = ${episodeId}`;

    var queryDroidsTotal = ` SELECT SUM(l.value) AS sum 
                             FROM characters AS sc 
                             JOIN links as l 
                             ON l.sourceId = sc.character_id 
                             JOIN characters as tc 
                             ON l.targetId = tc.character_id 
                             JOIN species as s 
                             ON tc.species = s.species_id 
                             WHERE s.name = 'Droid'
                             AND l.episodeId = ${episodeId}`;

    var queryInteractionsHumans = ` SELECT SUM(l.value) AS sum 
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON l.sourceId = sc.character_id 
                                    JOIN characters as tc 
                                    ON l.targetId = tc.character_id 
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.name LIKE '%${characterName}%'
                                    AND s.name = 'Humans'
                                    AND l.episodeId = ${episodeId}`;

    var queryHumansTotal = ` SELECT SUM(l.value) AS sum 
                             FROM characters AS sc 
                             JOIN links as l 
                             ON l.sourceId = sc.character_id 
                             JOIN characters as tc 
                             ON l.targetId = tc.character_id 
                             JOIN species as s 
                             ON tc.species = s.species_id 
                             WHERE s.name = 'Humans'
                             AND l.episodeId = ${episodeId}`;

    var queryInteractionsAliens = ` SELECT SUM(l.value) AS sum 
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON l.sourceId = sc.character_id 
                                    JOIN characters as tc 
                                    ON l.targetId = tc.character_id 
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.name LIKE '%${characterName}%'
                                    AND s.name != 'Droid'
                                    AND s.name != 'Human'
                                    AND l.episodeId = ${episodeId}`;

    var queryAliensTotal = ` SELECT SUM(l.value) AS sum 
                             FROM characters AS sc 
                             JOIN links as l 
                             ON l.sourceId = sc.character_id 
                             JOIN characters as tc 
                             ON l.targetId = tc.character_id 
                             JOIN species as s 
                             ON tc.species = s.species_id 
                             WHERE s.name != 'Human'
                             AND s.name != 'Droid'
                             AND l.episodeId = ${episodeId}`;

    var queryInteractionsLight = `  SELECT SUM(l.value) AS sum
    FROM characters AS sc 
    JOIN links as l 
    ON l.sourceId = sc.character_id 
    JOIN characters as tc 
    ON l.targetId = tc.character_id 
    JOIN species as s 
    ON tc.species = s.species_id 
    WHERE sc.name LIKE '%${characterName}%'
    AND tc.affiliation = 'light'
    AND l.episodeId = ${episodeId}`;

    var queryLightTotal = ` SELECT SUM(l.value) AS sum 
                             FROM characters AS sc 
                             JOIN links as l 
                             ON l.sourceId = sc.character_id 
                             JOIN characters as tc 
                             ON l.targetId = tc.character_id 
                             JOIN species as s 
                             ON tc.species = s.species_id 
                             WHERE tc.affiliation = 'light'
                             AND l.episodeId = ${episodeId}`;

    var queryInteractionsDark = `   SELECT SUM(l.value) AS sum 
                                    FROM characters AS sc 
                                    JOIN links as l 
                                    ON l.sourceId = sc.character_id 
                                    JOIN characters as tc 
                                    ON l.targetId = tc.character_id 
                                    JOIN species as s 
                                    ON tc.species = s.species_id 
                                    WHERE sc.name LIKE '%${characterName}%'
                                    AND tc.affiliation = 'dark'
                                    AND l.episodeId = ${episodeId}`;

    var queryDarkTotal = `  SELECT SUM(l.value) AS sum 
                            FROM characters AS sc 
                            JOIN links as l 
                            ON l.sourceId = sc.character_id 
                            JOIN characters as tc 
                            ON l.targetId = tc.character_id 
                            JOIN species as s 
                            ON tc.species = s.species_id 
                            WHERE tc.affiliation = 'dark'
                            AND l.episodeId = ${episodeId}`;

    var queryInteractionsNeutral = ` SELECT SUM(l.value) AS sum 
                                     FROM characters AS sc 
                                     JOIN links as l 
                                     ON l.sourceId = sc.character_id 
                                     JOIN characters as tc 
                                     ON l.targetId = tc.character_id 
                                     JOIN species as s 
                                     ON tc.species = s.species_id 
                                     WHERE sc.name LIKE '%${characterName}%'
                                     AND tc.affiliation = 'neutral'
                                     AND l.episodeId = ${episodeId}`;

    var queryNeutralTotal = `   SELECT SUM(l.value) AS sum 
                                FROM characters AS sc 
                                JOIN links as l 
                                ON l.sourceId = sc.character_id 
                                JOIN characters as tc 
                                ON l.targetId = tc.character_id 
                                JOIN species as s 
                                ON tc.species = s.species_id 
                                WHERE tc.affiliation = 'neutral'
                                AND l.episodeId = ${episodeId}`;

    var interactions = {
        droids: 0,
        humans: 0,
        aliens: 0,
        light: 0,
        dark: 0,
        neutral: 0
    }

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
        if (result[0].sum === null) {
            result[0].sum = 0;
        }

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
        // console.log(interactions)
        console.log(value)
        interactions.droids = Math.round(getPercent(value.droids.part, value.droids.total));
        interactions.humans = Math.round(getPercent(value.humans.part, value.humans.total));
        interactions.aliens = Math.round(getPercent(value.aliens.part, value.aliens.total));
        interactions.dark = Math.round(getPercent(value.dark.part, value.dark.total));
        interactions.light = Math.round(getPercent(value.light.part, value.light.total));
        interactions.neutral = Math.round(getPercent(value.neutral.part, value.neutral.total));
        res.send(interactions);
    }, 5000);
};