import React, { useEffect, useState } from 'react'
import wineData from '../data/data'
import { unique } from './unique'


const Flavonoids = () => {
  const [data, setData] = useState(wineData)
  //   let [sum, setSum] = useState(0)
//   let unique = []
//   data.forEach((item) => {
//     if (!unique.includes(item.Alcohol)) {
//       unique.push(item.Alcohol)
//     }
//   })
  let mean = []
  let median = []
  let mode = []
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

    // console.log(value)

    // console.log(count)
    console.log(data)

    let means = (sum / count).toFixed(3)
    mean.push(means)
  })
  //   console.log(median)
  console.log(mode)
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Measure</th>
          {unique.map((item, index) => {
            return <th key={index}>class{item}</th>
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Flavanoids Mean</th>
          {mean.map((item, index) => {
            return <td key={index}>{item}</td>
          })}
        </tr>
        <tr>
          <th>Flavanoids Median</th>
          {median.map((item, index) => {
            return <td key={index}>{item}</td>
          })}
        </tr>
        <tr>
          <th>Flavanoids Mode</th>
          {mode.map((item, index) => {
            return <td key={index}>{item}</td>
          })}
        </tr>
      </tbody>
    </table>
  )
}

export default Flavonoids
