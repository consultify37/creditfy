import React from "react"
import Link from "next/link"
import { Program } from "../../types"
import Image from "next/image"

type Props = {
    program: Program
    index?: number
    carousel?: boolean 
}

export default function FonduriComponent({ program, index=0, carousel=false }: Props) {
    return(
        <div 
            className={"rounded-4xl relative w-full xl:min-h-[400px] flex flex-col-reverse justify-between px-4 lg:px-20 py-2 bg-cover bg-no-repeat align-center " + (carousel ? " mx-2 md:mx-8 lg:flex-row" : ( index == 0 ? 'mt-[2rem] md:mt-[4rem]' : 'mt-[8rem]') + ( index % 2 == 0 ? " lg:flex-row" : " lg:flex-row-reverse")) }
            key={program.id}
        >   
            <Image 
                src={program.backgroundImage.image}
                width={2132}
                height={822}
                alt="image"
                className="w-full h-[360px] md:h-full absolute rounded-[35px] left-0 z-[1] top-0 object-cover object-left"
            />
            <div style={{background: "rgba(0, 0, 0, 0.45)", }} className="w-full h-[360px] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
            <div className="flex flex-col justify-center w-fit lg:max-w-[45%] self-center items-center rounded-2xl relative top-[40px] lg:top-[100px] z-[5] bg-secondary py-8 px-8">
                <h5 className="text-onSecondary text-[18px] lg:text-[26px] font-bold mb-6">{program.title}</h5>
                <ul className="list-disc list-inside">
                    { program.bulletPoints.map((bulletPoint, index) => (
                        <li key={index} className="text-[#E0E0E0] font-semibold text-[15px] xl:text-base mb-4">{ bulletPoint }</li>
                    ))}
                </ul>
                <Link className="py-3 mt-4 bg-primary text-onPrimary flex items-center rounded-[28.5px] font-semibold px-11 text-center sm:px-12 hover:scale-[1.05] transition-all" href={"/credite/" + program.id}>Aplică acum!</Link>
            </div>
            <div className={'flex flex-col justify-center pt-12 z-[1] ' + (index % 2 === 0 ? 'items-end' : 'items-start')}>
                <div className="lg:max-w-[280px] xl:max-w-[340px] 2xl:max-w-[400px]">
                    <p className={'text-white text-[20px] lg:text-[34px] font-extrabold lg:font-bold ' + (index % 2 === 0 ? 'text-right' : '')}>
                        { program.title2 }
                    </p>
                    <p className={'text-white text-[18px] lg:text-[28px] font-bold ' + (index % 2 === 0 ? 'text-right' : '')}>
                        { program.suma }
                    </p>
                    <p className={'text-white text-xs lg:text-base ' + (index % 2 === 0 ? 'text-right' : '')}>
                        { program.descriere }
                    </p>
                </div>
            </div>
        </div>
    )
}