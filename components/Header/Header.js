import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { HiMenuAlt1 } from 'react-icons/hi';
import HeaderSearchIcon from "./HeaderSearchIcon"
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaLinkedin } from 'react-icons/fa';
import logo from "../../public/assets/images/Pallibarta_logo_1.png"
import HeaderNavBar from './HeaderNavBar';
import { NewDate } from '../../GolobalFunction/GolobalFunction';
import Image from 'next/image';


const Header = ({ device }) => {
    console.log(device)
    
const [date, setDate] = useState();
useEffect(()=>{
    setDate(NewDate("bar"));
},[])

    return (
        <>
           <Container fluid className='border-b'>
                <Container>
                    <div className='flex justify-between pt-2'>
                        <div className='flex justify-start items-start w-2/6'>
                            
                            <span className='text-[2.3em] flex justify-center items-center'><HiMenuAlt1/></span>
                            <span className='px-2 text-[2.3em] flex justify-center items-center'><HeaderSearchIcon/></span>

                        </div>
                        <div className='flex py-2  justify-center items-center w2/6'>
                            <Image src={logo} alt="Pallibarta" width={260} height={65} />
                        </div>
                        <div className='flex justify-end items-start w-2/6 gap-2'>
                            
                            <div className='flex justify-center items-center font-bold border py-1 px-4'>Log in</div>
                            <div className='flex justify-center items-center gap-1 text-[2.3em]'>
                                <span><FaFacebookSquare /></span>
                                <span><FaTwitterSquare /></span>
                                <span><FaYoutubeSquare /></span>
                                <span><FaLinkedin /></span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center pb-2'>
                        <span>{date}</span>
                        <span>English Edition</span>
                    </div>
                </Container>
            </Container>
            <HeaderNavBar />
         
        </>
    );
};


export default Header;