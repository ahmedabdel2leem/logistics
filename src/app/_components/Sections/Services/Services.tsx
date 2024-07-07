import Button from './../../common/Button/Button';
import img1 from '@/assets/services/services1.png'
import img2 from '@/assets/services/services2.png'
import img3 from '@/assets/services/services3.png'
import img4 from '@/assets/services/services4.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import './services.css'
import Image, { StaticImageData } from 'next/image';
import LayerArrow from '@/assets/Arrow.svg'
import blueArrow from '@/assets/Arrow-blue.svg'
import { IImages } from '@/types';
import Link from 'next/link';


const _images: IImages[] = [
    { img: img1, title: "Transportation, distribution & last mile" },
    { img: img2, title: "Warehousing multi temperature (25C to ..." },
    { img: img3, title: "Cross border transport" },
    { img: img4, title: "4PL & Control tower" },
]
function Services() {

    return (
        <section id='services' className='pt-44 mt-0 '>
            <div className="banner2  flex flex-col items-center "   >
                <div className='w-[90%]'>
                    <div className="bannerTitle text-6xl md:text-start leading-3 text-center font-nova mb-10 font-light">Duroub Services</div>
                    <div className='flex  flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between  items-center'>
                        <p className="BannerDesc  max-w-[550px]    line-clamp-2 text-lg font-nova  font-semibold text-slate-800 ">Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh.</p>

                        <Link href={""} className="text-lg font-semibold flex flex-wrap group max-w-fit items-center">
                            <p className={`pr-1 font-nova text-black text-xl`} >
                                All Services
                            </p>
                            {/* <Arrow /> */}
                            <div className="relative">
                                <Image
                                    className=" transform group-hover:translate-x-3 duration-500 transition "
                                    src={blueArrow}
                                    alt="arrow"
                                    width={30}

                                />

                            </div>
                        </Link >
                    </div>
                </div >
            </div>
            <div className='flex  justify-center overflow-hidden relative -bottom-20 ' >

                <Carousel className='max-w-[90%] w-[90%] carousel '>
                    <CarouselContent className='space-x-4   '>
                        {_images.map(({ img, title }: IImages, index: number) => <CarouselItem key={index} className=" relative basis-[26rem] group overflow-hidden rounded-xl p-0   bg-black h-[25rem] ">
                            <div className='w-full h-full'>
                                <Image
                                    src={img}
                                    alt='servicesImage'
                                    className='w-full h-full object-cover transform scale-105'
                                />
                                <div className='layer absolute inset-0 bg-black bg-opacity-100 opacity-50 group-hover:opacity-70 transition-opacity duration-300'>

                                </div>
                                <div className="topArrow  absolute -right-20 top-10 group-hover:right-10 transition-all duration-500 ">
                                    <Image src={LayerArrow} className='w-16 ' alt="arrow" />
                                </div>
                                <div className=" flex ">
                                    <p className="text-white  absolute bottom-10 left-7 text-4xl font-nova font-light">{title}</p>
                                </div>
                            </div>
                        </CarouselItem>)}

                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default Services