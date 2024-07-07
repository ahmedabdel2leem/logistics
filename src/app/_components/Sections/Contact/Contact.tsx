
import Button from '../../common/Button/Button'
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import './contact.css'
function Contact() {
    return (
        <section id='contactUs' className="contact  relative -bottom-20 pt-20 z-10">
            <div className="contactUs flex   justify-center">
                <div className="w-customWidth flex justify-between items-start flex-col lg:flex-row space-y-9 lg:space-y-0">
                    <div className="contactDetails space-y-12 basis-2/5">
                        <div className="detailsHeader ">
                            <h3 className="text-6xl mb-10 font-nova font-light">Get in Touch</h3>
                            <p className="text-thin max-w-[500px]">Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea <br /> parturient phasellus aliquam. Gravida amet leo quis nam nibh.</p>
                        </div>
                        <div className="contactInfo space-y-4">
                            <div className="flex space-x-9 ">
                                <div className="phone contactData">
                                    <BiPhoneCall size={24} className='text-mainColor' />
                                    <div>
                                        +966 58 168 0000
                                    </div>
                                </div>
                                <div className="email contactData">
                                    <MdAlternateEmail size={24} className='text-mainColor' />
                                    <div>Customercare@duroub.com</div>
                                </div>
                            </div>
                            <div className="location">

                                <div className="address   contactData">
                                    <HiOutlineLocationMarker size={25} className='text-mainColor' />
                                    <div>Business park, near to Jamjoom center, Al Hamrah dist. P.O.<br /> box: 8960, KSA. Jeddah 21492
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form py-10 px-14 bg-[#F2F4F9] rounded-2xl basis-3/5">
                        <form className='' action="">

                            <input className='w-full' type="text" placeholder="Full Name" />


                            <input className='w-full' type="text" placeholder="Email" />


                            <input className='w-full' type="text" placeholder="Subject " />

                            <textarea className='w-full' rows={3} placeholder="Your Message" />


                            <div className='mt-11'>
                                <Button text='Send' color='' />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact
