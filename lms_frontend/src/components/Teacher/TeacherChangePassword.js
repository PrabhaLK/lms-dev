import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api'
function TeacherChangePassword() {
    const [teacherData, setteacherData] = useState({
        'password': ''
        // 'status': ''
    });
    
    const teacherId = localStorage.getItem('teacherId');
    
    const handleChange = (event) => {
        setteacherData({
            ...teacherData,
            [event.target.name]: event.target.value
        });
    }
    //submit form
    const submitForm = () => {
        const teacherFormData = new FormData();
        teacherFormData.append("password", teacherData.password)
        try {
            axios.post(baseUrl + '/teacher/change-password/' + teacherId+'/', teacherFormData).then((response) => {
                // console.log(response.data);
                if (response.status == 200) {
                    Swal.fire({
                        title: 'Confirm',
                        titleText: 'password has sucessfully changed',
                        text: 'you will be signed out.',
                        icon: 'success',
                        timer:2000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    setTimeout(() => {
                        window.location.href='/teacher-logout'
                    }, 3000)
                }
                else{
                    Swal.fire({
                        title: 'Failed',
                        titleText: 'Failed to Change passowrd',
                        text: 'please try again.',
                        icon: 'error',
                        timer:2000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                }
            });
            
        } catch (error) {
            console.log(error);
            setteacherData({ 'status': 'error' })
        }
    };
    useEffect(() => {
        document.title = "Teacher Change Password | LearnPro"
    });
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus != 'true') {
        window.location.href = '/teacher-login'
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Change Password</h5>
                        <div className="card-body">
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label"> New Password</label>
                                <div class="col-sm-10">
                                    <input type="password"  name="password" value={teacherData.password} onChange={handleChange} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <hr />
                            <button className="btn btn-primary"onClick={submitForm}>Update</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherChangePassword;