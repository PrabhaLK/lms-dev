import Home from './Home';
import Header from './Header';
import Footer from './Footer';

import About from './About us';
import CourseDetail from './CourseDetail';

import Login from './User/Login';
import Register from './User/Register';

import {Routes as Switch,Route} from 'react-router-dom'

function Main() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/detail/:course_id' element={<CourseDetail/>}/>
                <Route path='/user-login' element={<Login/>}/>
                <Route path='/user-register' element={<Register/>}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default Main;
