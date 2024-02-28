import data from '../../data/data'
import { unique } from '../unique'

// const [data, setData] = useState(wineData)
export let mean = []
export let median = []
export let mode = []
unique.forEach((item) => {
  let count = 0
  let sum = 0
  let value = []
  data.forEach((obj) => {
    if (item == obj.Alcohol) {
      value.push(Number(obj.Flavanoids))
      count++
      sum += Number(obj.Flavanoids)
    }
  })

  let sortedArray = value.sort((a, b) => a - b)
  const middleIndex = Math.floor(sortedArray.length / 2)
  if (sortedArray.length % 2 == 0) {
    median.push((sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2)
  } else {
    median.push(sortedArray[middleIndex])
  }

  // mode.push(modes)
  //   return modes.length === numbers.length ? [] : modes;

  value = value.slice().sort((x, y) => x - y)

  var bestStreak = 1
  var bestElem = value[0]
  var currentStreak = 1
  var currentElem = value[0]

  for (let i = 1; i < value.length; i++) {
    if (value[i - 1] !== value[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak
        bestElem = currentElem
      }

      currentStreak = 0
      currentElem = value[i]
    }

    currentStreak++
  }

  currentStreak > bestStreak ? mode.push(currentElem) : mode.push(bestElem)

  let means = (sum / count).toFixed(3)
  mean.push(means)
})
