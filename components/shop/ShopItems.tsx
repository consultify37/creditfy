import React from 'react'
import { Product, ProductCategory } from '../../types'
import ShopItem from './ShopItem'

type Props = {
  products: Product[]
  categories: ProductCategory[]
}

const ShopItems = ({ products, categories }: Props) => {
  return (
    <div className=''>
      { categories.map((category) => (
        products.reduce((prev, curr) => (curr.category == category.category ? prev + 1 : prev ),  0) != 0 ?
        <ShopItem 
          key={category.description}
          category={category}
          products={products.filter((product) => product.category == category.category )}
        /> : null
      )) }
    </div>
  )
}

export default ShopItems

// products.filter((product) => product.category == category.category )