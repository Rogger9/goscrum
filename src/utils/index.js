export const filterByStatus = arr => {
  return arr?.reduce((acc, task) => {
    acc[task.status]
      ? acc[task.status].push(task)
      : acc[task.status] = [task]
    return acc
  }, {})
}

export const limitString = str => {
  const CHARACTER_LIMIT = 170
  if (str.length < CHARACTER_LIMIT) return { string: str, addButton: false }
  return {
    string: str.slice(0, CHARACTER_LIMIT - 3).concat('...'),
    addButton: true
  }
}
