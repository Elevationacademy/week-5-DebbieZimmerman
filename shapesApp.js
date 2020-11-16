// const circleUtilities = require('./circleUtils');
// console.log(circleUtilities);

const circleUtilities = require('./circleUtils')

const r = 4
console.log(`The area of a circle with radius ${r} is ${circleUtilities.calcCircleArea(r)}`)
//^prints "The area of a circle with radius 4 is 50.26544"

const dbName = "SQL_DB_1102"
const dbPassword = "e3!accT"

module.exports = {
    dbName: dbName,
    dbPassword: dbPassword
}


//for another file to access dbName
// let dbData = require("./shapesApp")
// console.log(dbData.dbName)