export const divideTasksByStatus = arr => {
  const initialValues = {
    NEW: [],
    'IN PROGRESS': [],
    FINISHED: []
  }

  return arr?.reduce((acc, item) => {
    acc[item.status].push(item)
    return acc
  }, initialValues)
}

const CHARACTER_LIMIT = 170
export const limitString = str => {
  if (str.length < CHARACTER_LIMIT) return { string: str, addButton: false }
  return {
    string: str.slice(0, CHARACTER_LIMIT - 3).concat('...'),
    addButton: true
  }
}
