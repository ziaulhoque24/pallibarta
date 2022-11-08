import HomePage from "../components/HomePage/HomePage";
import { useSelector, useDispatch } from 'react-redux'
import { setDevice } from '../redux/slice/userSlice'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



function Home({ deviceType }) {

  const device = useSelector((state) => state.device.device)
  const dispatch = useDispatch();
  dispatch(setDevice(deviceType))
 
  return (
   <>
      <Header deviceType={deviceType} />
      <HomePage deviceType={deviceType} />
      <Footer />
   </>
   
  )
}

export async function getServerSideProps(context) {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  return {
    props: {
      deviceType: isMobile ? 'mobile' : 'desktop'
    }
  }
}


export default Home;