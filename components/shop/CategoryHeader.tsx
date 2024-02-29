import Image from "next/image"
import { ProductCategory } from "../../types"

type Props = {
category: ProductCategory
}

const CategoryHeader = ({ category }: Props) => {
    return(
        <section id='category-header' className=''>
            <div className='bg-secondary w-full gap-4 rounded-[24px] sm:rounded-[35px] flex flex-col items-center justify-center py-6 md:py-14 relative mx-auto overflow-hidden'>
                <h1 className='font-bold text-onSecondary text-[18px] md:text-[32px] pt-[80px] md:pt-0'>{category.category}</h1>
                <p className='md:text-[16px] text-onSecondary text-[14px] text-center max-w-[85%] md:max-w-[50%] lg:md:max-w-[60%]'>{category.description}</p>
                <Image src='/images/Shop/Ellipse 19 (2).svg' alt='Hero blue circle' width={200} height={200} className='absolute -right-10 -top-12 z-[5] w-[150px] md:w-[200px]' />
                <Image src='/images/Shop/Polygon 3 (3).svg' className='absolute left-4 md:left-7 top-7 md:top-12 rotate-90 w-[80px] md:w-[120px]' width={120} height={120} alt='Polygon img' />
            </div>
        </section>
    )
}

export default CategoryHeader