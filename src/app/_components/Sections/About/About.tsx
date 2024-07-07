import Banner from '../../common/Banner/Banner'
import './about.css';
import img1 from '@/assets/facts/img1.png'
import img2 from '@/assets/facts/img2.png'
import img3 from '@/assets/facts/img3.png'
import img4 from '@/assets/facts/img4.png'
import AboutImages from '../../AboutImages/AboutImages';
import { IImages } from '@/types';
import Image from 'next/image';

type Props = {

}
const _images: IImages[] = [
    { img: img4, title: '25C to +25C', descraption: 'Multi temperature WH’s Order fulfillment DC' },
    { img: img1, title: 'One united', descraption: 'SAP EWM Voice picking' },
    { img: img2, title: '+60,000', descraption: 'Pallets' },
    { img: img3, title: '+300', descraption: 'Workforce employees' },
]

function About({ }: Props) {

    return (
        <>
            <section id='about' className='aboutSection -mb-[150px]'>


                <div className="aboutBg h-dvh w-full relative ">
                    <Banner

                        buttonText='Explore more'
                        button={true}
                        title='About Duroub Logistics'
                        position='Bannercenter'
                        desc='Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh. Sed urna commodo urna bibendum nulla cras tellus. Sit lacus dictum porttitor tellus sed fames arcu velit. Quam leo proin ipsum molestie. Nibh magna porttitor ac ipsum blandit eget vestibulum.'
                    />
                </div >
                <div className='relative -top-[150px] flex justify-end '>
                    <div className='parent flex w-fit rounded-l-xl  overflow-hidden'>
                        {_images.map((el: IImages, index: number) => <>
                            <AboutImages key={index} item={el} index={index} />
                        </>
                        )}
                    </div>
                </div>


            </section>
        </>
    )
}

export default About