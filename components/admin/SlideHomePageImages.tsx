import Image from 'next/image'
import React from 'react'
import ReactLoading from 'react-loading'
import { Slide } from '../../types'

type Props = {
  slides: Slide[]
  handleDelete: (image: any) => void
  isFetching: boolean
}

const SlideHomePageImages = ({ slides, handleDelete, isFetching }: Props) => {
  return (
    <div>
      {
        isFetching ?
        <div className='flex flex-col justify-center items-center h-full w-[242px] xl:w-[484px]'>
          <ReactLoading type="spin" color="#FF7A00" width={32} height={32} />
        </div> : 
        <div className='flex flex-col'>
          {
            slides.map((image, index) => (
              <div className='relative' key={image.link+index}>
                <Image 
                  src={ typeof image.image == 'string' ? image.image : URL.createObjectURL(image.image)}
                  alt='mock-slide'
                  width={346}
                  height={133}
                  className='rounded-xl bg-[#e6e6e6] h-[186px] w-[484px] mb-4 object-cover'
                />
                <svg width="24" height="24" className='absolute top-4 right-4 cursor-pointer hover:scale-[1.05] transition-all' onClick={() => handleDelete(image)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#FF7A00"/>
                  <rect x="14.8281" y="7.75732" width="2" height="10" rx="1" transform="rotate(45 14.8281 7.75732)" fill="#FF7A00"/>
                  <rect x="16.2422" y="14.8284" width="2" height="10" rx="1" transform="rotate(135 16.2422 14.8284)" fill="#FF7A00"/>
                </svg>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default SlideHomePageImages