import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import Layout from '../Layout';
import {  Provider } from 'react-redux';
import { store } from '../redux/store/Store';


function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}


export default MyApp;
