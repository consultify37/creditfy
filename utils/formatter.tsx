import Image from "next/image"
import Link from "next/link"

export const formatter = (node: any, index: number) => {
  if (node.type === 'tag' && node.name === 'img') {
      return (
          <Image 
              key={node.attribs.src}
              src={node.attribs.src}
              width={1024}
              height={1024}
              alt='image'
              className="w-full h-auto rounded-3xl mt-6 md:mt-8"
          />
      )
  } else if (node.type === 'tag' && node.name === 'h2') {
      
      return (
          <h2
              key={node.children[0].data}
              className="text-[22px] md:text-[24px] font-semibold mt-6 md:mt-8"
          >
              {node.children[0].data}
          </h2>
      )
  } else if (node.type === 'tag' && node.name === 'h1') {
      
      return (
          <h1
              key={node.children[0].data}
              className="text-[26px] md:text-[28px] font-semibold"
          >
              {node.children[0].data}
          </h1>
      )
  } else if (node.type === 'tag' && node.name === 'h3') {
      
      return (
          <h3
              key={node.children[0].data}
              className="text-[18px] md:text-[20px] font-semibold"
          >
              {node.children[0].data}
          </h3>
      )
  } else if (node.type === 'tag' && node.name === 'p' ) {
		return node.children.map((node: any) => {
			if ( node.data ) {
				return (
					<p
						key={Math.random()}
						className="text-[14px] md:text-[16px]"
					>
						{node.data}
					</p>
				)
			} else if (node.type === 'tag' && node.name === 'img') {
				return (
						<Image 
								key={node.attribs.src}
								src={node.attribs.src}
								width={1024}
								height={1024}
								alt='image'
								className="w-full h-auto rounded-3xl mt-6 md:mt-8"
						/>
				)
			} else if (node.type === 'tag' && node.name === 'a') {
				return (
					<Link
						key={node.children[0].data}
						href={node.attribs.href}
						target="_blank"
						className="text-[14px] md:text-[16px] text-blue-500 font-semibold"
				>
						{node.children[0].data}
				</Link>
				)
			}
		})
  }
}