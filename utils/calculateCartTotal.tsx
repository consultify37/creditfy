import { Product } from "../types"

export const calculateCartTotal = (products: Product[]) => {
  const total = products.reduce((prev, curr) => {
    return prev + curr.price
  }, 0)

  return Math.round(total*100)/100
}