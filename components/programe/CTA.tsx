import Image from "next/image";
import Link from "next/link";

interface CTAProps {
  title: string;
  linkText: string;
  linkHref: string;
}

export default function CTA({ title, linkText, linkHref }: CTAProps) {
  return(
      <section className="w-full mt-16 md:mt-24">
				<div className="relative">
					<div className="w-full flex relative flex-col h-[300px] lg:h-[400px] overflow-hidden justify-center items-center px-6 py-6 lg:py-12 lg:px-12 bg-secondary rounded-3xl">
							<Image src='/images/CTA/circle-thin.svg' className="absolute md:left-0 -left-12 top-[0px] w-[100px] z-10 lg:w-[200px]" alt='triangle' width={250} height={250}/>
							<Image src='/images/CTA/circle.svg' className="absolute right-0 -bottom-[12px] md:bottom-0 w-[80px] lg:w-[220px] z-10" alt='triangle' width={146} height={146}/>
								<h2 className="text-onSecondary text-lg lg:text-4xl font-bold mb-8 z-10 max-w-[750px] text-center">{
											title.split('<purple>').map((item, index) => (
													<div key={item+index}>
															{index == 1 ? <span className="text-primary">{item}</span> : <span>{item}</span>}
													</div>
											))
									}</h2>
								<Link className="py-4 bg-primary text-center text-onPrimary rounded-[28.5px] font-semibold px-6 md:px-10 text-sm md:text-[16px] transition-all hover:scale-[1.05]" href={linkHref}>{linkText}</Link>
						</div>
						<Image src='/images/CTA/triangle.svg' className="absolute right-[-1.5rem] top-[-3rem] w-[80px] lg:w-[110px] z-10" alt='triangle' width={146} height={146}/>
						<Image src='/images/proces/hexagon.svg' className="absolute -left-6 -bottom-6 lg:-left-[80px] z-10 lg:-bottom-[50px] w-[60px] lg:w-[160px]" alt='triangle' width={250} height={250}/>
				</div>
      </section>
  )
}