'use client'
import Image from "next/image";
import React, { useState } from "react";
import logoWhite from "@/assets/Logo -  White.svg";
import { IoMenuOutline } from "react-icons/io5";

import "./navbar.css";
function Navbar() {
    const [isVisiable, setIsVisiable] = useState<boolean>(false)
    console.log(isVisiable)
    return (
        <nav className="w-full z-[999] top-0 fixed left-0 pt-10 pb-10 flex justify-center bg-gradient-to-b from-blue-950 bg-opacity-10">
            <div className="Navbar lg:flex  w-customWidth justify-between items-center">
                <div className="flex lg:w-1/4  justify-between">
                    <div className="logo  w-1/2  ">
                        <Image src={logoWhite} alt="logo" className="w-52" />
                    </div>
                    <div className='w-1/2 flex justify-end lg:hidden' onClick={() => setIsVisiable(!isVisiable)} >
                        <IoMenuOutline size={50} color="white" />
                    </div>
                </div>

                <div className={` block text-center lg:flex w-4/4 lg:w-3/4  ${isVisiable ? '' : 'hidden'}  `}>
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
                    <div className="lang w-1/4 ">
                        <div className="bg-red  flex justify-end">
                            <div className=" flex w-fit  text-white rounded-full border border-secondryColor overflow-hidden ">
                                <div className="en bg-secondryColor px-2">en</div>
                                <div className="ar px-2">ع</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
