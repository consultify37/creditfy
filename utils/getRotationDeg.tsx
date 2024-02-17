export const getRotationDeg = (index: number) => {
  switch (index) {
    case 0:
      return 'rotate-[20deg]'
    case 1:
      return 'rotate-[33deg]'
    case 2: 
      return 'rotate-[-10deg]'
  }
}