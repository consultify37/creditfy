import React from 'react'

type Props = {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({ className='', onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-16 xl:px-20 py-3 lg:py-4 lg:w-fit w-full bg-primary flex items-center justify-center mr-4 rounded-full hover:scale-105 transition-all ${className}`}
    >
      <p className='text-onPrimary font-semibold text-[14px]'>Adaugă în coș</p>
    </button>
  )
}

export default Button