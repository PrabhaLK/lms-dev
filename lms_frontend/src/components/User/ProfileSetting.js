import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api'
function ProfileSetting() {
    const [studentData, setstudentData] = useState({
        'full_name': '',
        'email': '',
        // 'password': '',
        // 'username':'',
        'interested_categories': '',
        'profile_img': '',
        'p_img': '',
        'status': ''
    });
    const studentId = localStorage.getItem('studentId');
    useEffect(() => {
        //Fetch current teacher data 
        try {
            axios.get(baseUrl + '/student/' + studentId)
                .then((res) => {
                    setstudentData({
                        full_name: res.data.full_name,
                        email: res.data.email,
                        // username: res.data.username,
                        password:res.data.password,
                        interested_categories: res.data.interested_categories,
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
        setstudentData({
            ...studentData,
            [event.target.name]: event.target.value
        });
    }
    // console.log(studentData)
    //change element value end 
    const handleFileChange = (event) => {
        setstudentData({
            ...studentData,
            [event.target.name]: event.target.files[0]
        });
    }

    //submit form
    const submitForm = () => {
        const studentFormData = new FormData();
        studentFormData.append("full_name", studentData.full_name)
        studentFormData.append("email", studentData.email)
        studentFormData.append("password", studentData.password)
        studentFormData.append("interested_categories", studentData.interested_categories)

        if (studentData.p_img !== '') {
            studentFormData.append('profile_img', studentData.p_img, studentData.p_img.name);
        }

        try {
            axios.put(baseUrl + '/student/' + studentId + '/', studentFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                // console.log(response.data);
                if (response.status === 200) {
                    Swal.fire({
                        title: 'Confirm',
                        text: 'data has been updated',
                        icon: 'success',
                        timer: 2000,
                        position: 'Top right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                }
            });
        } catch (error) {
            console.log(error);
            setstudentData({ 'status': 'error' })
        }
    };
    useEffect(() => {
        document.title = "Student Edit profile | LearnPro"
    });
    const studentLoginStatus = localStorage.getItem('studentLoginStatus')
    if (studentLoginStatus != 'true') {
        window.location.href = '/user-login'
    }
    //end 
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
                                <div class="col-sm-10">
                                    <input name="full_name" value={studentData.full_name} onChange={handleChange} type="text" class="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" name="email" value={studentData.email} onChange={handleChange} class="form-control" id="staticEmail" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="video" class="col-sm-2 col-form-label">Profile Image</label>
                                <div class='col-sm-10'>
                                    <input type="file" onChange={handleFileChange} name='p_img' className="form-control" id="video" />
                                    {studentData.profile_img &&
                                        <p className="mt-3"><img src={studentData.profile_img} width="300" alt={studentData.full_name} /></p>
                                    }
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" name="password" value={studentData.password} onChange={handleChange} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">interested Categories</label>
                                <div class="col-sm-10">
                                    <textarea name="interested_categories" value={studentData.interested_categories} onChange={handleChange} className="form-control"></textarea>
                                    <div id="emailHelp" className="form-text">Php, python, java etc.</div>
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

export default ProfileSetting;