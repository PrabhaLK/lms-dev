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
import StudentLogout from './User/StudentLogout';

//teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import AddCourse from './Teacher/AddCourse';
import EditCourse from './Teacher/EditCourse';
import CourseChapters from './Teacher/CourseChapters'; 
import EditChapter from './Teacher/EditChapter';
import AddChapter from './Teacher/AddChapter';
import TeacherCourses from './Teacher/TeacherCourses';
import EnrolledStudents from './Teacher/EnrolledStudents';
import UserList from './Teacher/UserList';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import AddAssignment from './Teacher/AddAssignment';
import ShowAssignment from './Teacher/ShowAssignment';


//List Pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';
import CategoryCourses from './CategoryCourses';
import TeacherSkillCourses from './TeacherSkillCourses';

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
                <Route path='/user-logout' element={<StudentLogout/>}/>

                <Route path='/teacher-login' element={<TeacherLogin/>}/>
                <Route path='/teacher-logout' element={<TeacherLogout/>}/>
                <Route path='/teacher-register' element={<TeacherRegister/>}/>
                <Route path='/teacher-dashboard' element={<TeacherDashboard/>}/>
                <Route path='/add-course' element={<AddCourse/>}/>
                <Route path='/edit-course/:course_id' element={<EditCourse/>}/>
                <Route path='/add-chapter/:course_id' element={<AddChapter/>}/>
                <Route path='/edit-chapter/:chapter_id' element={<EditChapter/>}/>
                <Route path='/all-chapters/:course_id' element={<CourseChapters/>}/>
                <Route path='/teacher-courses' element={<TeacherCourses/>}/>
                <Route path='/enrolled-students/:course_id' element={<EnrolledStudents/>}/>
                <Route path='/teacher-users' element={<UserList/>}/>
                <Route path='/teacher-profile-setting' element={<TeacherProfileSetting/>}/>
                <Route path='/teacher-change-password' element={<TeacherChangePassword/>}/>
                <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail/>}/>

                <Route path='/all-courses/' element={<AllCourses/>}/>
                <Route path='/popular-courses' element={<PopularCourses/>}/>
                <Route path='/popular-teachers' element={<PopularTeachers/>}/>
                <Route path='/category/:category_slug' element={<CategoryCourses/>}/>
                <Route path='/add-assignment/:student_id/:teacher_id' element={<AddAssignment/>}/>
                <Route path='/show-assignment/:student_id/:teacher_id' element={<ShowAssignment/>}/>

            </Switch>
            <Footer/>
        </div>
    );
}

export default Main;