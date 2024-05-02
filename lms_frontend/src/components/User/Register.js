import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/student/';

function Register() {
    const [studentData, setstudentData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'username': '',
        'interested_categories': '',
        'status': ''
    });

    //change element value start
    const handleChange = (event) => {
        setstudentData({
            ...studentData,
            [event.target.name]: event.target.value
        });
    }
    //change element value end 

    //submit form
    const submitForm = () => {
        const studentFormData = new FormData();
        studentFormData.append("full_name", studentData.full_name)
        studentFormData.append("email", studentData.email)
        studentFormData.append("password", studentData.password)
        studentFormData.append("username", studentData.username)
        studentFormData.append("interested_categories", studentData.interested_categories)

        try {
            axios.post(baseUrl, studentFormData).then((response) => {
                // console.log(response.data);
                setstudentData({
                    'full_name': '',
                    'email': '',
                    'password': '',
                    'username': '',
                    'interested_categories': '',
                    'status': 'success'
                });
            });
        } catch (error) {
            console.log(error);
            setstudentData({ 'status': 'error' })
        }
    };
    //end 
    useEffect(() => {
        document.title = "User Register | LearnPro"
    });

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {studentData.status == 'success' && <p class="text-success">Thanks for Your Registration</p>}
                    {studentData.status == 'error' && <p class="text-danger">Something wrong happend</p>}
                    <div className="card">
                        <h5 className="card-header">User Regsiter</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="text" value={studentData.full_name} name="full_name" onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" value={studentData.email} name="email" onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" value={studentData.username} name="username" onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={studentData.password} name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Interests</label>
                                <textarea value={studentData.interested_categories} name="interested_categories" onChange={handleChange} className="form-control"></textarea>
                                <div id="emailHelp" class="form-text">Php, Python, javaScript etc.</div>
                            </div>
                            <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;