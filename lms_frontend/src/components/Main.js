import Home from './Home';
import Header from './Header';
import Footer from './Footer';

import About from './About us';

import {Routes as Switch,Route} from 'react-router-dom'

function Main() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default Main;
