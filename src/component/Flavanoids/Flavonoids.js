import React, { useEffect, useState } from 'react'
import wineData from '../../data/data'
import { unique } from '../unique'
import { mean, median, mode } from './flavanoidCalc'

const Flavonoids = () => {
  return (
    <table border="1" align="center" width="60%">
      <caption>Flavanoids Measure</caption>
      <thead>
        <tr>
          <th>Measure</th>
          {unique.map((item, index) => {
            return <th key={index}>class {item}</th>
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
