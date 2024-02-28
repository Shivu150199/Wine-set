import data from '../data/data'
export let unique = []//storing the unique value of ALcohol
//accessing the unique class through the alcohol value 
data.forEach((item) => {
  if (!unique.includes(item.Alcohol)) {
    unique.push(item.Alcohol)
  }
})
