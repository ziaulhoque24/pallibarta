import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { HeaderSearchIconInput } from './Styled.Header';

const HeaderSearchIcon = () => {
    const [iconState, setIconState] = useState();

    return (
        <>
            {iconState ? <HeaderSearchIconInput><input type="text" placeholder='যা খুঁজতে চান' /><span onClick={() => setIconState("")}><HiSearch/></span></HeaderSearchIconInput> : <HiSearch onClick={()=>setIconState(true)} /> }
        </>
    );
};

export default HeaderSearchIcon;