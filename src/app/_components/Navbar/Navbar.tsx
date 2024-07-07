'use client'
import Image from "next/image";
import React, { useState } from "react";
import logoWhite from "@/assets/logoWhite.svg";
import { IoMenuOutline } from "react-icons/io5";


function Navbar() {

    const [isVisiable, setIsVisiable] = useState<boolean>(false)
    return (
        <nav className="w-full z-[999] top-0 fixed left-0 py-5 flex justify-center  bg-gradient-to-b from-black bg-opacity-10">
            <div className="Navbar lg:flex  w-customWidth justify-between items-center">
                <div className="flex lg:w-1/4  justify-between">
                    <div className="logo  w-1/4 lg:w-60  ">
                        <Image src={logoWhite} alt="logo" className="" />
                    </div>
                    <div className='w-1/2 flex justify-end lg:hidden cursor-pointer' onClick={() => setIsVisiable(!isVisiable)} >
                        <IoMenuOutline size={50} color="white" />
                    </div>
                </div>

                <div className={` block text-center lg:flex w-4/4 lg:w-3/4 lg:bg-none  ${isVisiable ? 'bg-gradient-to-t from-blue-950 bg-opacity-10' : 'hidden'}  `}>
                    <div className="Navbar-links flex  lg:w-3/4 justify-center items-center text-white">
                        <ul className="lg:flex lg:space-x-9 space-y-9 lg:space-y-0">
                            <li className="nav-link">
                                <a href="#about">About Us</a>
                            </li>

                            <li className="nav-link">
                                <a href="#services">Services</a>
                            </li>

                            <li className="nav-link">
                                <a href="#news">News</a>
                            </li>
                            <li className="nav-link">
                                <a href="#carers">Carers</a>
                            </li>

                            <li className="nav-link">
                                <a href="#contactUs">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lang w-1/4 mx-auto lg:mx-0  p-4">
                        <div className="bg-red  flex lg:justify-end justify-center ">
                            <div className=" flex w-fit font-semibold   rounded-full border border-secondryColor overflow-hidden ">
                                <div className=" relative en text-mainColor text-center  bg-secondryColor py-0.5 pl-2 pr-1 after:absolute after:bg-red after:z-50  after:border-t-[12px] after:border-t-transparent after:left-full after:top-0 after:h-full  after:border-b-[15px] after:border-b-transparent  after:border-l-[12px] after:border-l-secondryColor">En</div>
                                <div className="px-2.5 ml-2 text-center text-white py-0.5 ">ع</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
