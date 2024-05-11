import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api'
function TeacherProfileSetting() {
    const [teacherData, setteacherData] = useState({
        'full_name': '',
        'email': '',
        // 'password': '',
        'qualification': '',
        'mobile_no': '',
        'skills': '',
        'profile_img': '',
        'p_img': '',
        'status': ''
    });
    const teacherId = localStorage.getItem('teacherId');
    useEffect(() => {
        //Fetch current teacher data 
        try {
            axios.get(baseUrl + '/teacher/' + teacherId)
                .then((res) => {
                    setteacherData({
                        full_name: res.data.full_name,
                        email: res.data.email,
                        // password:res.data.password,
                        qualification: res.data.qualification,
                        mobile_no: res.data.mobile_no,
                        skills: res.data.skills,
                        profile_img: res.data.profile_img,
                        p_img: ''
                    });
                });
        } catch (error) {
            console.log(error);
        }
        //end     
    }, []);

    //change element value start
    const handleChange = (event) => {
        setteacherData({
            ...teacherData,
            [event.target.name]: event.target.value
        });
    }
    // console.log(teacherData)
    //change element value end 
    const handleFileChange = (event) => {
        setteacherData({
            ...teacherData,
            [event.target.name]: event.target.files[0]
        });
    }

    //submit form
    const submitForm = () => {
        const teacherFormData = new FormData();
        teacherFormData.append("full_name", teacherData.full_name)
        teacherFormData.append("email", teacherData.email)
        // teacherFormData.append("password", teacherData.password)
        teacherFormData.append("qualification", teacherData.qualification)
        teacherFormData.append("mobile_no", teacherData.mobile_no)
        teacherFormData.append("skills", teacherData.skills)

        if (teacherData.p_img !== '') {
            teacherFormData.append('profile_img', teacherData.p_img, teacherData.p_img.name);
        }

        try {
            axios.put(baseUrl + '/teacher/' + teacherId+'/', teacherFormData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                // console.log(response.data);
                if (response.status == 200) {
                    Swal.fire({
                        title: 'Confirm',
                        text: 'data has been updated',
                        icon: 'success',
                        timer:2000,
                        position: 'Top right',
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
        document.title = "Teacher Edit profile | LearnPro"
    });
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus != 'true') {
        window.location.href = '/teacher-login'
    }
    //end 
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
                                <div class="col-sm-10">
                                    <input name="full_name" value={teacherData.full_name} onChange={handleChange} type="text" class="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" name="email" value={teacherData.email} onChange={handleChange} class="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="video" class="col-sm-2 col-form-label">Profile Image</label>
                                <div class='col-sm-10'>
                                    <input type="file" onChange={handleFileChange} name='p_img' className="form-control" id="video" />
                                    {teacherData.profile_img &&
                                        <p className="mt-3"><img src={teacherData.profile_img} width="300" alt={teacherData.full_name} /></p>
                                    }
                                </div>
                            </div>
                            {/* <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div> */}
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Skills</label>
                                <div class="col-sm-10">
                                    <textarea name="skills" value={teacherData.skills} onChange={handleChange} className="form-control"></textarea>
                                    <div id="emailHelp" className="form-text">Php Pyhton JavaScript etc.</div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Qualification</label>
                                <div class="col-sm-10">
                                    <textarea name="qualification" value={teacherData.qualification} onChange={handleChange} className="form-control"></textarea>
                                    <div id="emailHelp" className="form-text">BSc in (something) || Msc etc.</div>
                                </div>
                            </div>
                            <hr />
                            <button className="btn btn-primary" onClick={submitForm}>Update</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherProfileSetting;