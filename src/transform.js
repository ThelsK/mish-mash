const groupAdultsByAgeRange = (people) =>
    people.reduce((result, person) => {
        let ageCategory = ""
        if (person.age >= 51) {
            ageCategory = "51 and older"
        }
        else if (person.age >= 41) {
            ageCategory = "41-50"
        }
        else if (person.age >= 31) {
            ageCategory = "31-40"
        }
        else if (person.age >= 21) {
            ageCategory = "21-30"
        }
        else if (person.age >= 18) {
            ageCategory = "20 and younger"
        }
        if (ageCategory && !result[ageCategory]) {
            result[ageCategory] = []
        }
        if (ageCategory) {
            result[ageCategory].push(person)
        }
        return result
    }, {})

module.exports = {
    groupAdultsByAgeRange,
}