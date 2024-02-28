import { unique } from '../unique'
import data from '../../data/data'
//exporting the mean median and mode
export let gMean = []
export let gMedian = []
export let gMode = []
unique.forEach((unique) => {
  let gArray = []
  data.forEach((item) => {
    if (unique === item.Alcohol) {
      let gamma = (item.Ash * item.Hue) / item.Magnesium
      gArray.push(gamma)
    }
  })
  let mean = gArray.reduce((acc, item) => acc + item, 0) / 2//mean calculation logic
  gMean.push(mean.toFixed(3))
//median calculation
  let sortedArray = gArray.sort((a, b) => a - b)
  const middleIndex = Math.floor(sortedArray.length / 2)
  if (sortedArray.length % 2 === 0) {
    gMedian.push(
      ((sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2).toFixed(3)
    )
  } else {
    gMedian.push(sortedArray[middleIndex].toFixed(3))
  }
//mode calculation
  gArray = gArray.slice().sort((x, y) => x - y)

  var bestStreak = 1
  var bestElem = gArray[0]
  var currentStreak = 1
  var currentElem = gArray[0]

  for (let i = 1; i < gArray.length; i++) {
    if (gArray[i - 1] !== gArray[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak
        bestElem = currentElem
      }

      currentStreak = 0
      currentElem = gArray[i]
    }

    currentStreak++
  }

  currentStreak > bestStreak
    ? gMode.push(currentElem.toFixed(3))
    : gMode.push(bestElem.toFixed(3))
})
