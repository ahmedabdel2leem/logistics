import Image from 'next/image'
import style from './footer.module.css'
import logoWhite from '@/assets/LogoWhite.svg'
import img2 from '@/assets/Vector.png'
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className={`${style.footer} `}>
            <div className="relative">
                <div className={`${style.about}  w-[90%] py-24 mx-auto flex items-center lg:items-end lg:space-x-60 flex-col lg:flex-row
            `}>
                    <div className="logo space-y-7 ">
                        <Image src={logoWhite} alt='logo white' />
                        <p className='font-thin text-white'>Lorem ipsum dolor sit amet consectetur. Quis <br /> suspendisse congue id ac mi pretium.</p>
                    </div>
                    <div className="links space-y-9 mt-10 lg-mt-0">
                        <div className='space-y-5  text-center lg:text-start'>
                            <h3 className=' text-lg text-slate-400 font-light '>Company</h3>
                            <div className="sections text-white flex font-light text-sm space-x-4 tracking-widest flex-wrap leading-10">
                                <Link className='nav-link' href={'#about'} >About Us</Link>
                                <Link className='nav-link' href={'#services'} >Services</Link>
                                <Link className='nav-link' href={'#news'} >News</Link>
                                <Link className='nav-link' href={'#carers'} >Careers</Link>
                                <Link className='nav-link' href={'#contactUs'} >Contact Us</Link>
                                <Link className='nav-link' href={''} >Terms & Conditions</Link>
                                <Link className='nav-link' href={''} >Privacy Policy</Link>
                            </div>
                        </div>
                        <div className="social flex lg:space-x-6 space-y-4 lg:space-y-0 items-center lg:justify-start justify-center flex-col lg:flex-row ">
                            <h3 className='text-white font-thin text-center'> Follow Us</h3>
                            <div className="socialmedia flex text-xs  space-x-6">
                                <Link href={''}>
                                    <FaFacebookF color='white' />
                                </Link>
                                <Link href={''}>
                                    <BsTwitterX color='white' />
                                </Link>
                                <Link href={''}>
                                    <BsInstagram color='white' />
                                </Link>
                                <Link href={''}>
                                    <FaLinkedinIn color='white' />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='footerVector max-w-full absolute bottom-24 left-0 '>
                    <Image src={img2} alt='vector' />
                </div>
                <div className='copyRights flex justify-between text-white font-thin text-xs py-8 w-[90%] mx-auto'>
                    <p>Copyright @ 2023 Duroub Logistics. All Rights Reserved</p>
                    <p>Developed by Brackets Technology</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
