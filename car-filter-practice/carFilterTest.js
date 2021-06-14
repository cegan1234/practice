const chai = require('chai');
const expect = chai.expect;

const filterer = require('./carFilter')
const filterCars = filterer.filterCars;

describe('test filterCars', () => {

  it('returns empty array when empty array passed in', () => {
    expect(filterCars([])).to.deep.equal([])
  })

  it('filters correct list of cars', () => {
    const arrayOfCars = [
      {
        countryOfOrigin: "Germany",
        model: "BMW",
      },
      {
        countryOfOrigin: "Japan",
        model: "Toyota"
      }
    ]
    const expectedResult = [

      {
        countryOfOrigin: "Japan",
        model: "Toyota"
      }
    ]
     expect(filterCars(arrayOfCars,'Japan')).to.deep.equal(expectedResult)

  })

  it('returns an empty array if no cars match',()=> {
    const arrayOfCars = [
      {
        countryOfOrigin: "Germany",
        model: "BMW",
      },
      {
        countryOfOrigin: "Japan",
        model: "Toyota"
      }
    ]
    const expectedResult = []
    expect(filterCars(arrayOfCars,'USA')).to.deep.equal(expectedResult)

  })
})