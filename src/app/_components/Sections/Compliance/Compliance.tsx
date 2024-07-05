import shareIcon from '@/assets/share.svg'
import Image from 'next/image'
import roads from '@/assets/Frame 22.png'
import style from './style.module.css'
function Compliance() {

    return (
        <section id='carers' className="Compliance ">
            <div className="bg-[#002B87] flex justify-center py-40">
                <div className="complianceHeader w-[70%] ">
                    <div className="flex flex-col lg:flex-row lg:justify-around items-center md:items-start space-y-10 ">
                        <div className="headerLeft basis-2/5 space-y-5">
                            <h4 className='text-5xl  text-white font-light tracking-widest text-center md:text-start'>Our Compliance <br /> and Regulatory</h4>
                            <p className='text-base text-slate-50 font-thin'> Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh.</p>
                        </div>
                        <div className="tags w-fit items-center">

                            <div className='tags  flex-col flex w-full space-y-4  '>
                                <div className='flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4  '>
                                    <div className='complianceTags'>
                                        <div> Municipality</div>
                                        <Image src={shareIcon} alt='share' />
                                    </div>
                                    <div className='complianceTags'>
                                        <div> Civil Defense</div>
                                        <Image src={shareIcon} alt='share' />
                                    </div>
                                </div>
                                <div className='flex lg:flex-row flex-col  lg:space-x-4 lg:space-y-0 space-y-4'>
                                    <div className='complianceTags'>
                                        <div> SFDA</div>
                                        <Image src={shareIcon} alt='share' />
                                    </div>
                                    <div className='complianceTags'>
                                        <div> ISO 9001:2015</div>
                                        <Image src={shareIcon} alt='share' />
                                    </div>
                                </div>
                                <div className='flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4'>
                                    <div className='complianceTags'>
                                        <div> ISO 14000:2015</div>
                                        <Image src={shareIcon} alt='share' />
                                    </div>
                                    <div className='complianceTags'>
                                        <div> ISO 45001:2018</div>
                                        <Image src={shareIcon} alt='share' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.complianceBody}`}>
                <div className="wrapper text-center ">

                    <div className='roadsImg flex flex-col items-center'>
                        <Image src={roads} alt='roadsImg' className='' />
                        <div className='wrapperText mt-8 text-white text-6xl font-light tracking-wider'>Lorem ipsum dolor sit amet consectetur.<br /> Iaculis et eget nulla in at vulputate <br /> pellentesque a vel.</div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Compliance