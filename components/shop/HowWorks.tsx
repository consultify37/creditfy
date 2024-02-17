import Image from "next/image"
import Button from "./Button"

type Props = {
  items: {
    title: string
    description: string
  }[]
  title: string
  buttonTitle?: string
  buttonAction?: () => void
}

const HowWorks = ({ items, title, buttonTitle, buttonAction }: Props) => {
  return(
    <div className={"relative overflow-hidden bg-secondary w-full flex flex-col items-center rounded-[22px] py-10 " + ( buttonTitle ? 'pb-6' : "")}>

      <h2 className="font-bold text-onSecondary lg:text-[24px]" >{ title }</h2>

      <div className="relative flex flex-col mt-10 lg:mt-6 w-full px-8">
        <div className="relative bg-[#4B0096] flex flex-col lg:flex-row w-full p-4 pt-8 rounded-[14px] z-[1]">
          { items.map((item, index) => (
            <div className="flex flex-row mb-4" key={index}>
              <div className="bg-secondary rounded-full flex justify-center items-center w-12 h-12 min-w-[48px] mr-4">
                <p className="font-semibold text-onPrimary text-[24px]">{ index+1 }</p>
              </div>
              <div>
                <p className="font-bold text-onSecondary mb-1">{ item.title }</p>
                <p className="text-[14px] text-onSecondary">{ item.description }</p>
              </div>
            </div>
          ))}
        </div>

        <Image 
          src='/images/Polygon 3 (3).svg'
          width={256}
          height={256}
          alt="."
          className="absolute -top-8 left-4 w-16 h-16 lg:w-32 lg:h-32 lg:-top-14"
        /> 

        { buttonTitle &&
          <Button 
            className="self-center mt-8"
            onClick={buttonAction}
          />
        } 
      </div>

      { buttonTitle &&
        <Image 
          src='/images/Ellipse 19.svg'
          width={256}
          height={256}
          alt="."
          className="absolute bottom-8 right-0 lg:bottom-auto lg:-top-16 w-32 h-32 lg:w-64 lg:h-64"
        /> 
      }
    </div> 
  )
}

export default HowWorks