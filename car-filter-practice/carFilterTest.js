import { filterCars } from './carFilter'

describe('test filterCars', () => {

  it('returns empty array when empty array passed in', () => {
    expect(filterCars([])).toBe([])
  })
})