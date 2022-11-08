import HeaderSubMenuItem from './HeaderSubMenuItem';
import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";

const HeaderNavBar = ({ deviceType}) => {
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });
    console.log()

    return (
        <div className='border-b sticky top-0 bg-white z-[10]'>
            <div className='container'>
                {(deviceType == "desktop") &&
                <>
                        <div className='flex justify-center items-center text-[1.2rem] font-bold gap-1'>
                            <span className='p-2 relative group'>সর্বশেষ</span>
                            <span className='p-2 relative group'>জাতীয়
                                <div className='w-[200px] h-auto z-[10] flex-col hidden absolute top-[42px] group-hover:flex shadow'>
                                    <HeaderSubMenuItem />
                                    <HeaderSubMenuItem />
                                    <HeaderSubMenuItem />
                                    <HeaderSubMenuItem />
                                </div>
                            </span>
                            <span className='p-2 relative'>সারাদেশ</span>
                            <span className='p-2 relative'>বাণিজ্য</span>
                            <span className='p-2 relative'>বিশ্ব</span>
                            <span className='p-2 relative'>খেলা</span>
                            <span className='p-2 relative'>বিনোদন</span>
                            <span className='p-2 relative'>চাকরি</span>
                            <span className='p-2 relative'>লাইফস্টাইল</span>
                            <span className='p-2 relative'>অন্যান্য</span>
                            <span className='p-2 relative'>মতামত</span>
                        </div>
                </> }
                {(deviceType == "mobile") &&
                <>
                        <OwlCarousel className='owl-theme'
                            autoplay={true}
                            loop={true}
                            margin={10}
                            dots={false}
                            autoplaySpeed={500}
                            autoplayHoverPause={true}
                            autoplayTimeout={2000}
                            responsive={{
                                0: {
                                    items: 5,
                                },
                                600: {
                                    items: 4,
                                },
                                1000: {
                                    items: 6,
                                },
                            }}
                        >
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>সারাদেশ</span>
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>বাণিজ্য</span>
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>বিশ্ব</span>
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>খেলা</span>
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>বিনোদন</span>
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>চাকরি</span>
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>লাইফস্টাইল</span>
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>অন্যান্য</span>
                            <span className='block p-2 text-center hover:border-b-[1px] hover:border-green-700'>মতামত</span>
                        </OwlCarousel>
                </>

                }
            </div>
        </div>
    );
};

export default HeaderNavBar;