export const getColorForWhyChoose = (index: number) => {
  switch (index%4) {
    case 0:
      return ['#8717F8', '#fff']
    case 1:
      return ['#260056', '#fff']
    case 2:
      return ['#7000FF', '#fff']
    case 3:
      return ['#5400BE', '#fff']
    default:
      return ['#8717F8', '#fff']
  }
} 