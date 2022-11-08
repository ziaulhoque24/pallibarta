import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useSelector } from 'react-redux'

function Layout({ children }) {
    const device = useSelector((state) => state.device.device)
    return (
        <>
           <Header deviceType={device} />
            {children}
            <Footer />
        </>
    );
}




export default Layout;