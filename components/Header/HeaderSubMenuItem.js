import { IoMdArrowDropright } from 'react-icons/io';


const HeaderSubMenuItem = () => {
    return (
        <>
            <div className='flex justify-start items-center border-b bg-white py-1'>
                <IoMdArrowDropright className='text-green-700 text-[30px] ml-[-1px]'/><span className=''>অর্থনীতি</span>
            </div>
        </>
    );
};

export default HeaderSubMenuItem;