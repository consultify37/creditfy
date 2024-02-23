import React from 'react'
import { Product } from '../../types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  product: { product: Product, quantity: number, amount: number }
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className='border-[#EDF0FF] border-2 rounded-[12px] mt-6 p-4 py-6'>
      <div className='flex flex-row'>
        <Image 
          src={product.product.image.image}
          width={256}
          height={256}
          alt='.'
          className='h-auto w-1/3 max-w-[200px] mr-4'
        />
        <div className='flex flex-col justify-between'>
          <p className='text-secondary text-[14px] font-semibold mt-2'>{product.product.name}</p>
          <div className='flex flex-row items-center mt-3 w-full'>   
            <p className='font-semibold text-[14px] text-secondary mr-8'>cantitate</p>
            <p className='font-semibold text-[14px] text-secondary'>{ product.quantity } buc</p>
          </div>
          <div className='flex flex-row items-center mt-3 w-full'>   
            <p className='font-semibold text-[14px] text-secondary mr-8'>subtotal</p>
            <p className='font-semibold text-[14px] text-secondary'>{ Math.round(product.amount*100)/100 } lei</p>
          </div>
        </div>
      </div>

      <Link 
        target='_blank'
        download={product.product.name}
        href={product.product.file.url} 
        className='flex flex-row justify-center items-center bg-primary rounded-lg w-full p-3 mt-6 hover:scale-105 transition-all' 
      >
        <p className='font-semibold text-onPrimary text-[14px]'>descarcă</p>
        <Image 
          src='/images/Cont/folder-download (1) 1.svg'
          width={128}
          height={128}
          alt='.'
          className='w-[14px] h-[14px] ml-2'
        />
      </Link>
    </div>
  )
}

export default ProductCard