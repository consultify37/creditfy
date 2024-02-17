import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import WhyUsCart from "./FeaturedProducts.jsx"
import {useEffect, useRef, useState} from 'react'
import { backCarousel, nextCarousel } from "../../../utils/functions"

const OurHelp = () => {
    const cardRef = useRef<HTMLAnchorElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [scrollAmount, setScrollAmount] = useState<number>(0)
    useEffect(() => {
        if(!carouselRef || !carouselRef.current)
            return console.log('nu exista')
        carouselRef.current.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        })
    }, [scrollAmount])
    return(
        <div className='w-full mt-32'>
            <div className='flex justify-between items-center'>
                <h3 className='text-[32px] text-white font-bold'>Consultify vine în ajutorul tău<br /> cu produse digitale pentru scalarea afacerii tale</h3>
                <div className='flex flex-row'>
                    <span className='bg-[#7000FF] w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer mr-2' onClick={() => backCarousel(setScrollAmount, carouselRef, cardRef)}>
                        <AiOutlineArrowLeft className='text-[#260056]' size={18} />
                    </span>
                    <span className='bg-[#7000FF] w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer' onClick={() => nextCarousel(setScrollAmount, carouselRef, cardRef)}>
                        <AiOutlineArrowRight className='text-[#260056]' size={18} />
                    </span>
                </div>
            </div>
            {/* Cart */}
            {/* <WhyUsCart /> */}
        </div>
    )
}

export default OurHelp