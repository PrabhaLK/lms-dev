import Home from './Home';
import Header from './Header';
import Footer from './Footer';

import About from './About us';
import CourseDetail from './CourseDetail';

import {Routes as Switch,Route} from 'react-router-dom'

function Main() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/detail/:course_id' element={<CourseDetail/>}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default Main;
