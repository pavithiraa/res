import LayOut from '../component/LayOut';
import '../styles/globals.css'
import store from '../redux/store';
import {Provider} from "react-redux"

function MyApp({ Component, pageProps }) {
  return ( 
    <Provider store= {store}>
      <LayOut>
          <Component {...pageProps} />
   </LayOut>
    </Provider>
   
           
 );
}

export default MyApp
