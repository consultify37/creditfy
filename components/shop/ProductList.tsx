import React from 'react'
import { Product } from '../../types'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-8 mt-8 md:mt-10 mb-24 max-w-[320px] sm:max-w-none'>
        { products.map((item) => (
          <ProductCard
            key={item.id} 
            hasMargin={false}
            product={item}
            className='w-full sm:max-w-[320px] sm:mx-0'
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList