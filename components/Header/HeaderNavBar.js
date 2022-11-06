import { Container } from 'react-bootstrap';
import HeaderSubMenuItem from './HeaderSubMenuItem';
import { HeaderNavContainer, HeaderNavSubMenuContainer } from './Styled.Header';

const HeaderNavBar = () => {

    return (
        <Container fluid className='border-b sticky top-0 bg-white z-[10]'>
            <Container>
                <div className='flex justify-center items-center text-[1.2rem] font-bold gap-1'>
                    <span className='p-2 relative group'>সর্বশেষ</span>
                    <span className='p-2 relative group'>জাতীয়
                        <div className='w-[200px] h-auto z-[10] flex-col hidden absolute top-[42px] group-hover:flex shadow'>
                            <HeaderSubMenuItem/>
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
            </Container>
        </Container>
    );
};

export default HeaderNavBar;