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
import { IImages } from '@/types';


type Props = {

}
const _images: IImages[] = [
    { img: img1, title: "Transportation, distribution & last mile" },
    { img: img2, title: "Warehousing multi temperature (25C to ..." },
    { img: img3, title: "Cross border transport" },
    { img: img4, title: "4PL & Control tower" },
]
function Services({ }: Props) {

    return (
        <section id='services' className='pt-32'>
            <div className="banner  flex flex-col items-center "   >
                <div className='w-[90%]'>
                    <div className="bannerTitle text-6xl md:text-start text-center font-sans mb-10 font-thin">Duroub Services</div>
                    <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between  items-center'>
                        <p className="BannerDesc text-base    max-w-[500px] ">Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh.</p>

                        <Button text='All services' color='' />
                    </div>
                </div >
            </div>
            <div className='flex  justify-center overflow-hidden relative -bottom-40' >

                <Carousel className='max-w-[90%] w-[90%] carousel '>
                    <CarouselContent className='space-x-4   '>
                        {_images.map(({ img, title }: IImages) => <CarouselItem className=" relative basis-[28rem] group overflow-hidden rounded-xl p-0   bg-black h-[26rem] ">
                            <div className='w-full h-full'>
                                <Image
                                    src={img}
                                    alt='servicesImage'
                                    className='w-full h-full object-cover transform scale-105'
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-100 opacity-50 group-hover:opacity-70 transition-opacity duration-300 flex ">
                                    <p className="text-white  absolute bottom-10 left-5 text-4xl font-light">{title}</p>
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