import { HiSearch } from "react-icons/hi";

const HeaderSearchIcon = ({ iconState, setIconState }) => {


    return (

        <div className={`
        fixed
        w-screen
        left-0
        top-[70px] lg:top-[155px] md:top-[88px]
        transition-all duration-500 overflow-hidden
        flex justify-center bg-white 
        p-1 md:p-0 z-10 
          ${iconState ? "block opacity-100" : "hidden opacity-0"}`}>
            <div className="container bg-gray-200 flex justify-center items-center rounded-full"><input className='w-full p-2 rounded-full bg-gray-200 outline-none' type="text" placeholder='যা খুঁজতে চান'>
            </input><HiSearch className="text-[25px]" onClick={() => setIconState(!iconState)} /></div>
        </div>

    );
};

export default HeaderSearchIcon;