import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';

function Login() {
    const [studentLoginData, setstudentLoginData] = useState({
        email: '',
        password: ''
    });
    const [errorMsg, seterrorMsg] = useState('');
    const handleChange = (event) => {
        setstudentLoginData({
            ...studentLoginData,
            [event.target.name]: event.target.value
        });
    }
    const submitForm = () => {
        // console.log(teacherLoginData);
        const StudentFormData = new FormData();
        StudentFormData.append('email', studentLoginData.email)
        StudentFormData.append('password', studentLoginData.password)
        try {
            axios.post(baseUrl + '/student-login', StudentFormData)
                .then((res) => {
                    // console.log(res.data);
                    if (res.data.bool === true) {
                        localStorage.setItem('studentLoginStatus', true);
                        localStorage.setItem('studentId', res.data.student_id);
                        window.location.href = '/user-dashboard';
                    } else {
                        seterrorMsg('Invalid Email or password');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }
    const studentLoginStatus = localStorage.getItem('studentLoginStatus');
    if (studentLoginStatus === 'true') {
        window.location.href = '/user-dashboard'
    }

    useEffect(() => {
        document.title = "Student Login | LearnPro"
    }, []);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Student Login</h5>
                        <div className="card-body">
                        {errorMsg && <p className="text-danger">{errorMsg}</p>}
                            {/* <form> */}
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" name="email" value={studentLoginData.email} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" name="password" value={studentLoginData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                                </div>
                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div> */}
                                <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;