import React from 'react'
import { Product } from '../../types'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  product: { product: Product, quantity: number, amount: number }
}

const ProductRow = ({ product }: Props) => {
  return (
    <tr className='border-[#EDF0FF] border-2 w-full'>
      <td className='py-4 pl-4'>
        <div className='flex flex-row items-center '>
          <Image
            src={product.product.image.image}
            width={128}
            height={128}
            alt={product.product.name}
            className='h-[73px] w-[73px] object-contain mr-4'
          />
          <p className='text-secondary font-semibold'>{product.product.name}</p>
        </div>
      </td>
      <td className='py-4 text-secondary '>x{product.quantity} buc</td>
      <td className='py-4 text-secondary '>{Math.round(product.amount*100)/100} lei</td>
      <td className='py-4 text-secondary pr-4'>
        <Link 
          target='_blank'
          download={product.product.name}
          href={product.product.file.url} 
          className='flex flex-row justify-center items-center bg-primary rounded-lg p-2 hover:scale-105 transition-all' 
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
      </td>
    </tr>
  )
}

export default ProductRow