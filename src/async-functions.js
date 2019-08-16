const fetch = require("node-fetch")

const getTatooineResidents = () =>
    fetch("https://swapi.co/api/planets/1/")
        .then(tatooineData => tatooineData.json())
        .then(tatooineJson => tatooineJson.residents)
        .catch(err => `The following error occured while trying to retrieve residents from https://swapi.co/api/planets/1/:\n${err}`)

const promiseMeAString = (aString) =>
    new Promise((resolve, reject) => {
        if (typeof aString === "string") {
            resolve("You kept the Promise!")
        }
        if (aString === null) {
            reject("You have failed me!")
        }
    })

module.exports = {
    getTatooineResidents,
    promiseMeAString,
}