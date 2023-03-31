export const addItemToArray = (array, item) => [...array, item]

export const removeItemFromArrayByIndex = (array, index) => {
  const newArray = [...array]
  newArray.splice(index, 1)
  return newArray
}
