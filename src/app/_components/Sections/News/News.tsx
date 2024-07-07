import Image from "next/image"
import Button from "../../common/Button/Button"

import img from '@/assets/news.png'
import arrow from '@/assets/arrow2.png'
import LayerArrow from '@/assets/Arrow.svg'
import blueArrow from '@/assets/Arrow-blue.svg'
import Link from "next/link"


function News() {
    return (
        <section id="news" className="news py-32 overflow-hidden">
            <div className="banner pb-10  flex flex-col items-center "   >
                <div className='w-[90%] text-center md:text-start '>
                    <div className="bannerTitle text-6xl    mb-5 font-nova font-light">Latest News</div>
                    <div className='flex flex-col md:flex-row  items-center space-y-8 md:space-y-0 md:justify-between  '>
                        <p className="BannerDesc max-w-[550px]    line-clamp-2 text-lg font-nova  font-semibold text-slate-800 ">Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh.</p>

                        <Link href={""} className="text-lg font-semibold flex flex-wrap group max-w-fit items-center">
                            <p className={`pr-1 font-nova text-black text-xl`} >
                                All News
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
            <div className="mainNews flex   justify-center">
                <div className="w-customWidth flex flex-col space-y-8 lg:space-y-0  lg:flex-row lg:space-x-5 ">

                    <div className="newsImage w-full lg:basis-1/2 ">
                        <div className=" relative basis-[28rem] group overflow-hidden rounded-xl p-0  lg:h-full bg-black ">
                            <div className='relative w-full h-full'>
                                <div className="date  absolute font-thin text-sm top-10 left-10 z-10 bg-secondryColor text-center text-white py-2 ps-6 rounded-s-full after:absolute  after:border-t-[18px] after:border-t-transparent after:left-full after:top-0 after:h-full  after:border-b-[18px] after:border-b-transparent after:bg-clip-padding  after:border-l-[24px] after:border-l-secondryColor  ">
                                    <div className="bg-clip-padding">09 May 2023 </div>
                                </div>

                                <Image
                                    src={img}
                                    alt='servicesImage'
                                    className='w-full h-full object-cover transform scale-105'
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-bg-opacity duration-300 flex ">
                                    <div className="absolute  bottom-10 group-hover:bottom-20  duration-500 left-10 space-y-4 ">
                                        <p className="text-white     text-2xl font-light">Lorem ipsum dolor sit amet consectetur <br /> lacus auctor  amet varius in ...</p>
                                        <p className="hiddenP absolute  group-hover:opacity-100 opacity-0 transition-opacity duration-300 line-clamp-2 text-white font-thin tracking-widest">Lorem ipsum dolor sit amet consectetur. Libero velit tristique porta at <br />. Rhoncus amet euismod congue ultrices nunc malesuada ...</p>
                                    </div>
                                    <div className="topArrow  absolute -right-20 top-10 group-hover:right-10 transition-all duration-500 ">
                                        <Image src={LayerArrow} className='w-16 ' alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newsData flex flex-col justify-between space-y-4 ">
                        {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => {
                            return <div key={i} className="newsItem rounded-xl  flex-col flex space-y-2 bg-[#F2F4F9] py-6 px-4">
                                <div className="date text-sm text-blue-900 font-normal italic">09 May 2023</div>
                                <div className="flex justify-between items-baseline pe-2 ">
                                    <div className="news text-xl font-medium">Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in ...</div>
                                    <button className="  group flex text-nowrap font-nova font-semibold text-base relative text-mainColor items-center  ml-20 transform hover:text-black hover:scale-125 hover:-translate-x-10  transition duration-300">
                                        <div>
                                            Read More
                                        </div>
                                        <Image src={arrow} className=" absolute left-full  inline ms-1 box-border w-fit group-hover:-left-1 group-hover:opacity-0 transition-all duration-500 ease-out" alt="arrow" />
                                        <Image src={blueArrow} alt="blueArrow" width={30} className="absolute ps-2  group-hover:left-full left-[150px] top-10 group-hover:top-0  opacity-0 group-hover:opacity-100   transition-all duration-700  " />
                                    </button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News