import Image from 'next/image'
import React from 'react'
import { Product } from '../../../types'
import { useCartContext } from '../../../context/CartContext'
import HeartButton from '../HeartButton'
import { calculateCartTotal } from '../../../utils/calculateCartTotal'

type Props = {
  products: Product[]
}

const Products = ({ products }: Props) => {
  const { handleRemoveProduct } = useCartContext()

  return (
    <div className="flex flex-col lg:flex-row">
      <div className='flex flex-col'>
        <div className='bg-[#F8F9FF] w-full rounded-[10px] flex flex-row p-4 mt-8'>
          <Image 
            src='/images/Shop/cart/comment-info.svg'
            width={128}
            height={128}
            alt='.'
            className='w-6 h-6 lg:w-7 lg:h-7 mr-4'
          />
          <p className='text-secondary text-[14px] lg:text-[16px]'>Produsele vor fi livrate atât pe adresa de email, in urma confirmării plății, cât și în contul dvs.</p>
        </div>

        <div className='flex flex-col bg-[#F8F8F8] p-4 pt-0 mt-8 rounded-[10px]'>
          { products.map((product) => (
            <div 
              key={product.id}
              className='flex flex-row bg-[#fff] rounded-[10px] mt-4 p-1 py-2'
            >
              <Image 
                src={product.image.image}
                width={256}
                height={256}
                alt='.'
                className='w-[80px] h-auto object-contain mr-2 self-start'
              />
              <div className='flex flex-col'>
                <p className='text-secondary font-semibold text-[14px] mt-2 mb-1'>{ product.name }</p>
                { product.onSale &&
                  <p className="text-[#7C9EF8] text-[14px] lg:text-[16px] font-base opacity-90 line-through font-semibold">
                    {product.oldPrice} lei
                  </p>
                }
                <p className='text-[18px] lg:text-[36px] font-bold text-price' >{ product.price }</p>

                <div className='flex flex-row items-center mt-6'>
                  <HeartButton size='small' />
                  <div className='mx-4 border-r-[1px] h-[28px] border-[#BBC9FF]'></div>
                  <button
                    className='text-red-500 text-[14px] font-semibold'
                    onClick={() => handleRemoveProduct(product) }
                  >
                    Șterge din coș
                  </button>
                </div>
              </div>
            </div>
          )) }

          <div className='flex flex-row justify-between items-center mt-6'>
            <p className='font-bold text-secondary'>Subtotal:</p>
            <p className='font-bold text-secondary'>{ calculateCartTotal(products) } lei</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products