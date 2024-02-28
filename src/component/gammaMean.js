import { unique } from './unique'
import data from '../data/data'

// console.log(data)
let gMean = []
unique.forEach((unique) => {
  let gArray = []
  data.forEach((item) => {
    if (unique == item.Alcohol) {
      let gamma = (item.Ash * item.Hue) / item.Magnesium
      gArray.push(gamma)
    }
  })
  let mean = gArray.reduce((acc, item) => acc + item, 0) / 2
  gMean.push(mean.toFixed(3))
})

export default gMean
