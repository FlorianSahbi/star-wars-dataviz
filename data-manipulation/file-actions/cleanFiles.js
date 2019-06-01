'use strict';

const fs = require('fs');

fs.readdir('./sourceDataSet', (err, dir) => {
    dir.forEach(item => {
        if (item !== '.DS_Store') {
            fs.readdir(`./sourceDataSet/${item}`, (err, files) => {
                if (err) { console.log(err) }
                files.forEach(file => {
                    fs.readFile(`./sourceDataSet/${item}/${file}`, (err, data) => {
                        if (file !== '.git') {
                            if (err) { console.log(err) }
                            data = JSON.parse(data);

                            switch (item) {
                                case 'films':
                                    delete data.film.edited;
                                    delete data.film.created;
                                    delete data.film.starships;
                                    delete data.film.vehicles;
                                    delete data.film.planets;
                                    delete data.film.species;
                                    data.film.idSwapi = Number(data.film.url.match(/[0-9]+/g)[0]);
                                    data.film.characters = [
                                        ...data.film.characters.map(val =>
                                            Number(val.match(/[0-9]+/g)[0])
                                        )]
                                    break;

                                case 'interactions':
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
                                    break;

                                case 'people':
                                    delete data.people.created;
                                    delete data.people.edited;
                                    delete data.people.starships;
                                    delete data.people.vehicles;
                                    data.people.idSwapi = Number(data.people.url.match(/[0-9]+/g)[0]);
                                    if (data.people.homeworld) {
                                        data.people.homeworld = Number(data.people.homeworld.match(/[0-9]+/g)[0]);
                                    }
                                    data.people.films = [
                                        ...data.people.films.map(val =>
                                            Number(val.match(/[0-9]+/g)[0])
                                        )]
                                    data.people.species = [
                                        ...data.people.species.map(val =>
                                            Number(val.match(/[0-9]+/g)[0])
                                        )] 
                                    if (data.people.species.length > 0) {
                                        data.people.species.forEach(s => {
                                            data.people.species = s;
                                        })
                                    } else {
                                        data.people.species = null;
                                    }
                                    break;

                                case 'planets':
                                    delete data.planet.created;
                                    delete data.planet.edited;
                                    delete data.planet.films;
                                    data.planet.idSwapi = Number(data.planet.url.match(/[0-9]+/g)[0]);
                                    data.planet.residents = [
                                        ...data.planet.residents.map(val =>
                                            Number(val.match(/[0-9]+/g)[0])
                                        )]
                                    break;

                                case 'species':
                                    delete data.species.created;
                                    delete data.species.edited;
                                    delete data.species.films;
                                    data.species.idSwapi = Number(data.species.url.match(/[0-9]+/g)[0]);
                                    if (data.species.homeworld) {
                                        data.species.homeworld = Number(data.species.homeworld.match(/[0-9]+/g)[0]);
                                    }
                                    data.species.people = [
                                        ...data.species.people.map(val =>
                                            Number(val.match(/[0-9]+/g)[0])
                                        )]
                                    break;
                            }

                            data = JSON.stringify(data, null, 2);
                            setTimeout(() => {

                                fs.writeFile(`./targetDataSet/${item}/${file}`, data, (err) => {
                                    if (err) { 'throw err' }
                                    else {

                                    }
                                });
                            }, 10000);
                        }
                    })
                })
            })
        }
    })
})
