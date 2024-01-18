import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScreenHome from '../screens/Home/Home';
import ScreenBitcoin from '../screens/Bitcoin/Bitcoin';
import ScreenEthereum from '../screens/Ethereum/Ethereum';
import ScreenXrp from '../screens/Xrp/Xrp';

function IndexRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<ScreenHome/>}/>
                <Route path='/screenBitcoin' element={<ScreenBitcoin/>}/>
                <Route path='/screenEthereum' element={<ScreenEthereum/>}/>
                <Route path='/screenXRP' element={<ScreenXrp/>}/>
            </Routes>
        </Router>
    )
}

export default IndexRoutes;