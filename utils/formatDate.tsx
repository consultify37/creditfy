const monthsDictionary = [
  'Ianuarie',
  'Februarie',
  'Martie',
  'Aprilie',
  'Mai',
  'Iunie',
  'Iulie',
  'August',
  'Septembrie',
  'Octombrie',
  'Noiembrie',
  'Decembrie'
]

export const formatDate = (date: Date) => {
  return date.getDate() + ' ' + monthsDictionary[date.getMonth()] + ' ' + date.getFullYear()
}