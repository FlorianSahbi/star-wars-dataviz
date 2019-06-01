'use strict';

const fs = require('fs');
const nullChar = [
    "ODD BALL",
    "FANG ZAR",
    "GIDDEAN DANU",
    "CLONE COMMANDER GREE",
    "CLONE COMMANDER CODY",
    "CAPTAIN ANTILLES",
    "RIEEKAN",
    "DERLIN",
    "ZEV",
    "PIETT",
    "OZZEL",
    "DACK",
    "JANSON",
    "NEEDA",
    "CAMIE",
    "MOTTI",
    "DODONNA",
    "GOLD LEADER",
    "RED LEADER",
    "RED TEN",
    "GOLD FIVE",
    "JERJERROD",
    "BOUSHH",
    "PIETT",
    "PK-4",
    "TC-14",
    "DOFINE",
    "RUNE",
    "TEY HOW",
    "SIO BIBBLE",
    "JIRA",
    "KITSTER",
    "WALD",
    "FODE/BEED",
    "RABE",
    "GENERAL CEEL",
    "BRAVO TWO",
    "BRAVO THREE",
    "SENATOR ASK AAK",
    "ORN FREE TAA",
    "PK-4",
    "SIO BIBBLE",
    "SOLA",
    "JOBAL",
    "RUWEE",
    "CLIEGG",
    "SUN RIT",
    "LOR SAN TEKKA",
    "KYLO REN",
    "UNKAR PLUTT",
    "GENERAL HUX",
    "LIEUTENANT MITAKA",
    "BALA-TIK",
    "SNOKE",
    "MAZ",
    "SNAP",
    "ADMIRAL STATURA",
    "YOLO ZIFF",
    "COLONEL DATOO",
    "ELLO ASTY",
    "JESS",
    "NIV LEK"
]
var uniqueChar = [];
var nodes = [];

for (const char of nullChar) {
    if (!uniqueChar.includes(char)) {
        uniqueChar.push(char);
    }
};



const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    console.log(s.toLocaleLowerCase().charAt(0).toUpperCase() + s.slice(1))
    return s.charAt(0).toUpperCase() + s.toLocaleLowerCase().slice(1)
  }

uniqueChar.forEach((uc,index) => {
    let node = {
        oldName: uc,
        name: capitalize(uc),
        idSwapi: Number(`999${index}`)
    }
    nodes.push(node);
});

console.log(nodes);