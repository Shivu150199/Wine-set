import data from '../data/data'
export let unique = []
data.forEach((item) => {
  if (!unique.includes(item.Alcohol)) {
    unique.push(item.Alcohol)
  }
})
