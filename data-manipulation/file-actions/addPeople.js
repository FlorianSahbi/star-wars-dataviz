'use strict';

const fs = require('fs');
const nullChar = [{ oldName: 'ODD BALL', name: 'Odd ball', idSwapi: 9990 },
{ oldName: 'FANG ZAR', name: 'Fang zar', idSwapi: 9991 },
{ oldName: 'GIDDEAN DANU', name: 'Giddean danu', idSwapi: 9992 },
{
    oldName: 'CLONE COMMANDER GREE',
    name: 'Clone commander gree',
    idSwapi: 9993
},
{
    oldName: 'CLONE COMMANDER CODY',
    name: 'Clone commander cody',
    idSwapi: 9994
},
{
    oldName: 'CAPTAIN ANTILLES',
    name: 'Captain antilles',
    idSwapi: 9995
},
{ oldName: 'RIEEKAN', name: 'Rieekan', idSwapi: 9996 },
{ oldName: 'DERLIN', name: 'Derlin', idSwapi: 9997 },
{ oldName: 'ZEV', name: 'Zev', idSwapi: 9998 },
{ oldName: 'PIETT', name: 'Piett', idSwapi: 9999 },
{ oldName: 'OZZEL', name: 'Ozzel', idSwapi: 99910 },
{ oldName: 'DACK', name: 'Dack', idSwapi: 99911 },
{ oldName: 'JANSON', name: 'Janson', idSwapi: 99912 },
{ oldName: 'NEEDA', name: 'Needa', idSwapi: 99913 },
{ oldName: 'CAMIE', name: 'Camie', idSwapi: 99914 },
{ oldName: 'MOTTI', name: 'Motti', idSwapi: 99915 },
{ oldName: 'DODONNA', name: 'Dodonna', idSwapi: 99916 },
{ oldName: 'GOLD LEADER', name: 'Gold leader', idSwapi: 99917 },
{ oldName: 'RED LEADER', name: 'Red leader', idSwapi: 99918 },
{ oldName: 'RED TEN', name: 'Red ten', idSwapi: 99919 },
{ oldName: 'GOLD FIVE', name: 'Gold five', idSwapi: 99920 },
{ oldName: 'JERJERROD', name: 'Jerjerrod', idSwapi: 99921 },
{ oldName: 'BOUSHH', name: 'Boushh', idSwapi: 99922 },
{ oldName: 'PK-4', name: 'Pk-4', idSwapi: 99923 },
{ oldName: 'TC-14', name: 'Tc-14', idSwapi: 99924 },
{ oldName: 'DOFINE', name: 'Dofine', idSwapi: 99925 },
{ oldName: 'RUNE', name: 'Rune', idSwapi: 99926 },
{ oldName: 'TEY HOW', name: 'Tey how', idSwapi: 99927 },
{ oldName: 'SIO BIBBLE', name: 'Sio bibble', idSwapi: 99928 },
{ oldName: 'JIRA', name: 'Jira', idSwapi: 99929 },
{ oldName: 'KITSTER', name: 'Kitster', idSwapi: 99930 },
{ oldName: 'WALD', name: 'Wald', idSwapi: 99931 },
{ oldName: 'FODE/BEED', name: 'Fode/beed', idSwapi: 99932 },
{ oldName: 'RABE', name: 'Rabe', idSwapi: 99933 },
{ oldName: 'GENERAL CEEL', name: 'General ceel', idSwapi: 99934 },
{ oldName: 'BRAVO TWO', name: 'Bravo two', idSwapi: 99935 },
{ oldName: 'BRAVO THREE', name: 'Bravo three', idSwapi: 99936 },
{
    oldName: 'SENATOR ASK AAK',
    name: 'Senator ask aak',
    idSwapi: 99937
},
{ oldName: 'ORN FREE TAA', name: 'Orn free taa', idSwapi: 99938 },
{ oldName: 'SOLA', name: 'Sola', idSwapi: 99939 },
{ oldName: 'JOBAL', name: 'Jobal', idSwapi: 99940 },
{ oldName: 'RUWEE', name: 'Ruwee', idSwapi: 99941 },
{ oldName: 'CLIEGG', name: 'Cliegg', idSwapi: 99942 },
{ oldName: 'SUN RIT', name: 'Sun rit', idSwapi: 99943 },
{
    oldName: 'LOR SAN TEKKA',
    name: 'Lor san tekka',
    idSwapi: 99944
},
{ oldName: 'KYLO REN', name: 'Kylo ren', idSwapi: 99945 },
{ oldName: 'UNKAR PLUTT', name: 'Unkar plutt', idSwapi: 99946 },
{ oldName: 'GENERAL HUX', name: 'General hux', idSwapi: 99947 },
{
    oldName: 'LIEUTENANT MITAKA',
    name: 'Lieutenant mitaka',
    idSwapi: 99948
},
{ oldName: 'BALA-TIK', name: 'Bala-tik', idSwapi: 99949 },
{ oldName: 'SNOKE', name: 'Snoke', idSwapi: 99950 },
{ oldName: 'MAZ', name: 'Maz', idSwapi: 99951 },
{ oldName: 'SNAP', name: 'Snap', idSwapi: 99952 },
{
    oldName: 'ADMIRAL STATURA',
    name: 'Admiral statura',
    idSwapi: 99953
},
{ oldName: 'YOLO ZIFF', name: 'Yolo ziff', idSwapi: 99954 },
{
    oldName: 'COLONEL DATOO',
    name: 'Colonel datoo',
    idSwapi: 99955
},
{ oldName: 'ELLO ASTY', name: 'Ello asty', idSwapi: 99956 },
{ oldName: 'JESS', name: 'Jess', idSwapi: 99957 },
{ oldName: 'NIV LEK', name: 'Niv lek', idSwapi: 99958 }]


nullChar.forEach(char => {
    let data = {
        "people": {
            "name": char.name,
            "gender": null,
            "homeworld": null,
            "films": [],
            "species": null,
            "url": null,
            "desc": [],
            "idSwapi": char.idSwapi,
            "height": null,
            "mass": null,
            "skin_color": null,
            "eye_color": null,
            "birth_year": null,
        }
    }
    data = JSON.stringify(data, null, 2);
    fs.writeFile(`./targetDataSet/people/${char.idSwapi}.json`, data, (err) => {
        if (err) {
            throw err
        }
        else {
            console.log(` : Done`);
        }
    });
})





