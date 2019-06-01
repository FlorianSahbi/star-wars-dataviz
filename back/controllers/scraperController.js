"use strict";

const rp = require('request-promise');
const mysql = require('mysql');
const $ = require('cheerio');



exports.getSetsImageAction = (req, res) => {


    async function getRRP(url) {
        console.log(url);
        await rp(url)
            .then(html => {
                let valueLength = $('.text > dl > dd', html).length;
                for (let index = 0; index < valueLength; index++) {
                    let text = $('.text > dl > dd', html).eq(index).text();
                    if (text.includes('$') || text.includes('€') || text.includes('£') && text.includes('/')) {
                        console.log(text);
                        break;
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    // getRRP(url);

    var con = mysql.createConnection({
        host: "remotemysql.com",
        user: "EzDMCTuE86",
        password: "s97esNZn0u",
        database: "EzDMCTuE86"
    });
    

    con.connect(err => {
        if (err) { console.log('err') };

        con.query("SELECT set_num FROM `sets`", (err, result) => {

            if (err) throw err;
            var url = 'https://brickset.com/sets/';
            result.forEach(r => {
                let myurl = `${url}${r.set_num}`;
                getRRP(myurl);
            });
        });
    });
};
