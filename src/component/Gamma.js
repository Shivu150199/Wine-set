import React from 'react'
import { unique } from './unique'
import gMean from './gammaMean'



const Gamma = () => {
  return (
    <div>
      <table border="1" width="100%">
        <thead>
          <th>Measure</th>
          {unique.map((item, index) => {
            return <th key={index}>class{item}</th>
          })}
        </thead>
        <tbody>
          <tr>
            <th>Gamma Mean</th>
{
  gMean.map((item, index) => {
    return <td key={index}>{item}</td>
  })
}
           
          </tr>
          <tr>
            <th>Gamma Median</th>
         
          </tr>
          <tr>
            <th>Gamma Mode</th>
           
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Gamma
