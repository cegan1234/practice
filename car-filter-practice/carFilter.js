
module.exports.filterCars = function filterCars(cars, countryOfOrigin) {
    let carsThatMatchFilter = []
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i]
        if (car.countryOfOrigin === countryOfOrigin) {
            carsThatMatchFilter.push(car)
        }
    }
    return carsThatMatchFilter
}


