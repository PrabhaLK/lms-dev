import Home from './Home';
import Header from './Header';
import Footer from './Footer';

import About from './About us'; 
import CourseDetail from './CourseDetail';
import TeacherDetail from './TeacherDetail';

//user 
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavouriteCourses from './User/FavouriteCourses';
import RecomendedCourses from './User/RecomendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';

//teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import AddCourse from './Teacher/AddCourse';
import TeacherCourses from './Teacher/TeacherCourses';
import UserList from './Teacher/UserList';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';

//List Pages
import AllCourses from './AllCourses';

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
                <Route path='/user-dashboard' element={<Dashboard/>}/>
                <Route path='/my-courses' element={<MyCourses/>}/>
                <Route path='/favourite-courses' element={<FavouriteCourses/>}/>
                <Route path='/recomended-courses' element={<RecomendedCourses/>}/>
                <Route path='/profile-setting' element={<ProfileSetting/>}/>
                <Route path='/change-password' element={<ChangePassword/>}/>

                <Route path='/teacher-login' element={<TeacherLogin/>}/>
                <Route path='/teacher-register' element={<TeacherRegister/>}/>
                <Route path='/teacher-dashboard' element={<TeacherDashboard/>}/>
                <Route path='/add-course' element={<AddCourse/>}/>
                <Route path='/teacher-courses' element={<TeacherCourses/>}/>
                <Route path='/teacher-users' element={<UserList/>}/>
                <Route path='/teacher-profile-setting' element={<TeacherProfileSetting/>}/>
                <Route path='/teacher-change-password' element={<TeacherChangePassword/>}/>
                <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail/>}/>

                <Route path='/all-courses/' element={<AllCourses/>}/>

            </Switch>
            <Footer/>
        </div>
    );
}

export default Main;
