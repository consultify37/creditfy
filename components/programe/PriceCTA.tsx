import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  suma: string
}

const PriceCTA = ({ suma }: Props) => {
  return (
    <div className='relative w-full h-72 mt-12'>
      <Image src='/images/PaginaProgram/pentagon.svg' className="absolute md:left-[-2rem] left-[-1.5rem] top-[-2rem] md:top-[-2rem] w-[80px] h-[80px] md:w-[110px] md:h-[110px]  z-[1]" alt='pentagon' width={146} height={146}/>
      <Image src='/images/PaginaProgram/hexagon.svg' className="absolute right-[-1.5rem] md:right-[-1.5px] lg:right-[80px]  bottom-[-65px] lg:bottom-[-80px] w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]  z-[1]" alt='hexagon' width={132} height={132}/>
      <Image src='/images/PaginaProgram/triangle.svg' className="absolute right-[-1rem] md:right-[-1rem] top-[-2.5rem] md:top-[-3rem] w-[80px] h-[80px] md:w-[120px] md:h-[120px]  z-[1]" alt='triangle' width={132} height={132}/>
      <div className='relative rounded-3xl md:rounded-[38px] w-full bg-secondary border-[#D7E1FF] border-[10px] overflow-hidden flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 p-12'>
        <Image src='/images/rezultate/circle.svg' className="absolute left-[-100px] sm:left-[-80px] md:left-[-120px] bottom-[-79px] w-[200px] h-[200px] md:w-[300px] md:h-[300px]" alt='circle' width={250} height={250}/>

        <p className='text-onSecondary font-semibold text-[16px] md:text-[20px] text-center'>Pentru acest program, finanțarea este în valoare de:</p>
        <p className='text-onSecondary font-extrabold text-[24px] sm:text-[30px] md:text-[44px] mt-8 text-center'>{suma}</p>
        <Link href='/contact' className="py-4 bg-primary text-center text-white rounded-[28.5px] font-semibold px-10 text-sm md:text-[16px] transition-all hover:scale-[1.05] mt-8">Aplică acum!</Link>
      </div>
    </div>
  )
}

export default PriceCTA