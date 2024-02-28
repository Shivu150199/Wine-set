import { unique } from '../unique'
import { gMean, gMedian, gMode } from './gammaCalc'

const Gamma = () => {
  return (
    <div>
      <table border="1" align="center" width="60%">
        <caption>Gamma Measure</caption>
        <thead>
          <tr>

          <th>Measure</th>
          {/* mapping all classes */}
          {unique.map((item, index) => {
            return <th key={index}>class {item}</th>
          })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Gamma Mean</th>
            {/* mapping the data imported from Gamma */}
            {gMean.map((item, index) => {
              return <td key={index}>{item}</td>
            })}
          </tr>
          <tr>
            <th>Gamma Median</th>
            {gMedian.map((item, index) => {
              return <td key={index}>{item}</td>
            })}
          </tr>
          <tr>
            <th>Gamma Mode</th>
            {gMode.map((item, index) => {
              return <td key={index}>{item}</td>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Gamma
