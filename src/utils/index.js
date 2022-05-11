export const divideTasksByType = arr => {
  const initialValues = {
    new: [],
    inProcess: [],
    finished: []
  }

  return arr?.reduce((acc, item) => {
    acc[item.type].push(item)
    return acc
  }, initialValues)
}

const CHARACTER_LIMIT = 170
export const limitString = str => {
  if (str.length > CHARACTER_LIMIT) {
    return {
      string: str.slice(0, CHARACTER_LIMIT - 3).concat('...'),
      addButton: true
    }
  }

  return {
    string: str,
    addButton: false
  }
}
