import React from 'react'
import { Product } from '../../types'
import Image from 'next/image'
import { useFavoritesContext } from '../../context/FavoritesContext'
import { useCartContext } from '../../context/CartContext'

type Props = {
  product: Product
}

const FavoriteProductCard = ({ product }: Props) => {
  const { handleRemoveProductFromFavorites } = useFavoritesContext()
  const { handleAddProduct } = useCartContext()

  return (
    <div className='bg-admin-background rounded-[12px] flex flex-col lg:flex-row lg:justify-between mt-6 p-4 w-full'>
      <div className='flex flex-row sm:items-center '>
        <Image
          src={product.image.image}
          alt="cart image"
          placeholder="blur"
          blurDataURL="/images/whyus-cart-image.png"
          width={152}
          height={264}
          className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] object-contain rounded-[12px]"
        />
        <div className='flex flex-col mt-2 ml-2 sm:mt-0 sm:ml-6'>
          <p className='sm:text-[18px] font-bold text-secondary'>{ product.name }</p>
          <p className="text-price text-[16px] font-bold mt-4 sm:text-[18px]">
            {" "}
            {product.price} lei{" "}
            {product.onSale && (
              <s className="text-[#7C9EF8] text-[14px] font-base opacity-90">
                {product.oldPrice} lei
              </s>
            )}{" "} 
          </p>
        </div>
      </div>

      <div className='flex flex-col self-center mt-4 lg:mt-0 w-full sm:w-fit'>
        <button
          onClick={() => handleRemoveProductFromFavorites(product) }
          className='text-[14px] lg:text-[16px] font-semibold text-[#FF0F0F]'
        > 
          șterge de la favorite
        </button>
        <button 
          onClick={() => handleAddProduct(product)}
          className='flex flex-row justify-center items-center bg-primary rounded-[12px] w-full sm:w-fit p-3 lg:py-4 lg:px-14 hover:scale-105 transition-all mt-4' 
        >
          <p className='font-semibold text-onPrimary text-[14px] lg:text-[16px]'>adaugă în coș</p>
          <Image 
            src='/images/Cont/cart.svg'
            width={128}
            height={128}
            alt='.'
            className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] ml-2'
          />
        </button>
      </div>
    </div>
  )
}

export default FavoriteProductCard