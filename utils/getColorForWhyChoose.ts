export const getColorForWhyChoose = (index: number) => {
  switch (index%4) {
    case 0:
      return ['#FF7A00', '#00071E']
    case 1:
      return ['#00071E', '#fff']
    case 2:
      return ['#AE5400', '#fff']
    case 3:
      return ['#7D3E03', '#fff']
    default:
      return ['#FF7A00', '#00071E']
  }
} 