import Image from "next/image"
import Link from "next/link"
import { Article } from "../../../types"

type Props = {
    article: Article
    cardRef: React.RefObject<HTMLElement>
}

const NewsItem = ({ article, cardRef }: Props) => {
    return(
        <article className='w-[280px] bg-[#F5F5F5] rounded-[16px] snap-end shadow-lg mb-4' ref={cardRef}>
            <Image src={article.mainImage.image} placeholder='blur' blurDataURL={article.mainImage.image} alt={article.title} width={300} height={300} className='w-full aspect-video h-48 object-cover rounded-[20px_20px_0_0]'/>
            <h3 className='text-secondary font-bold text-base p-2'>{article.title}</h3>
            <div className='flex justify-between p-2 px-[10px] pb-3 items-center'>
                <p className='text-[#828282] text-sm'>{article.formattedCreatedAt}</p>
                <Link href={`/blog/${article.id}`} className='text-primary font-bold text-sm underline hover:scale-105 transition-all'>citește mai mult</Link>
            </div>
        </article>
    )
}
export default NewsItem