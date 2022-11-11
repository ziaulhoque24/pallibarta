import React, { useEffect, useState } from 'react';
import { HiMenuAlt1, HiSearch } from 'react-icons/hi';
import HeaderSearchIcon from "./HeaderSearchIcon"
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaLinkedin } from 'react-icons/fa';
import logo from "../../public/assets/images/Pallibarta_logo_1.png"
import HeaderNavBar from './HeaderNavBar';
import { NewDate } from '../../GolobalFunction/GolobalFunction';
import Image from 'next/image';


const Header = ({ deviceType }) => {
    const [iconState, setIconState] = useState(false);

    const [date, setDate] = useState();
    useEffect(() => {
        setDate(NewDate("bar"));
    }, [])

    return (
        <>
            <div className='border-b'>
                <div className='container z-[11]'>
                    <div className='flex justify-between py-[20px]'>
                        <div className='relative flex justify-start items-center lg:items-start w-2/6'>
                            <span className='text-2xl lg:text-[2.3em] flex justify-center items-center'><HiMenuAlt1 /></span>
                            <span className='px-2 text-2xl lg:text-[2.3em] flex justify-center items-center'>
                                <HiSearch onClick={() => setIconState(!iconState) } />
                                </span>
                            <HeaderSearchIcon setIconState={setIconState} iconState={iconState} />

                        </div>
                        <div className='flex lg:py-2  justify-center items-center w-2/6'>
                            <Image src={logo} alt="Pallibarta" />
                        </div>
                        <div className='flex justify-end items-start w-2/6 gap-2'>

                            <div className='flex lg:hidden items-center gap-2 px-1 py-[2px] bg-gray-200 rounded-full'>
                                <span className='bg-white rounded-full h-8 w-8 flex justify-center items-center'>Bn</span>
                                <span>En</span>
                            </div>
                            <div className='hidden lg:flex justify-center items-center font-bold border py-1 px-4 '>Log in</div>
                            <div className='hidden lg:flex justify-center items-center gap-1 text-[2.3em]'>
                                <span><FaFacebookSquare /></span>
                                <span><FaTwitterSquare /></span>
                                <span><FaYoutubeSquare /></span>
                                <span><FaLinkedin /></span>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex justify-between items-center pb-2'>
                        <span>{date}</span>
                        <span>English Edition</span>
                    </div>
                </div>
            </div>
            
            <HeaderNavBar deviceType={deviceType} />
            
        </>
    );
};


export default Header;