import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  isFavorite?: boolean
  size?: 'small' | 'big'
}

const HeartButton = ({ isFavorite=false, onClick, size='big' }: Props) => {
  const [isLiked, setisLiked] = useState(isFavorite)

  return (
    <>
      { size == 'big' ?
        <button 
          onClick={() => setisLiked(!isLiked)}
          className='bg-[#EAEDFF] h-[45px] w-[45px] min-w-[45px] lg:h-[58px] lg:w-[58px] lg:min-w-[58px] rounded-full flex justify-center items-center hover:scale-105 transition-all'
        >
          <Image 
            src={isLiked ? '/images/Shop/filled-heart.svg' : '/images/Shop/heart.svg'}
            width={32}
            height={32}
            alt='.'
            className='w-4 h-4 lg:w-5 lg:h-5'
          />
        </button> :
        <button 
          onClick={() => setisLiked(!isLiked)}
          className='bg-[#EAEDFF] h-[34px] w-[34px] min-w-[34px] lg:h-[58px] lg:w-[58px] lg:min-w-[58px] rounded-full flex justify-center items-center hover:scale-105 transition-all'
        >
          <Image 
            src={isLiked ? '/images/Shop/filled-heart.svg' : '/images/Shop/heart.svg'}
            width={32}
            height={32}
            alt='.'
            className='w-3 h-3 lg:w-4 lg:h-4'
          />
        </button>
      }
    </>
  )
}

export default HeartButton