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

    var nodes = `   SELECT * 
                    FROM characters AS c
                    JOIN films_characters AS fc 
                    ON c.character_id = fc.character_id
                    JOIN films AS f
                    ON fc.film_id = f.film_id
                    WHERE f.episode_id = ${nodeId}`;

    var links = `   SELECT *
                    FROM links AS l
                    WHERE l.episodeId = ${linkId}`;

    con.query(nodes, (err, result) => {
        if (err) { throw err }
        result.forEach(element => {
            let node = {
                id: element.character_id,
                name: element.name,
                img: `character${element.character_id}`
            }
            data.nodes.push(node);
        });
    });

    con.query(links, (err, result) => {
        if (err) { throw err }
        result.forEach(element => {
            let link = {
                source: element.newSourceId,
                target: element.newTargetId,
                value: element.value/100*5,
            }
            // value: element.value/100*5

            data.links.push(link);
        });
    });
    setTimeout(() => {
        res.send(data);
    }, 4000);
};
