import HomePage from "../components/HomePage/HomePage";



function Home({  }) {
 
  return (
   
    <HomePage/>
   
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