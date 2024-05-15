import { Link } from "react-router-dom";
import '../../css/dashboardCard.css';
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';
function  Dashboard() {
    const [dashboardData, setdashboardData] = useState([])
    const[studentData,setStudentData] =useState([])
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        try {
            axios.get(baseUrl + '/student/dashboard/' + studentId)
                .then((res) => {
                    // console.log(res.data);
                    setdashboardData(res.data);
                });
        } catch (error) {
            console.log(error);
        }
        try{
            axios.get(baseUrl + '/student/')
                .then((res) => {
                    console.log(res.data);
                    const student = res.data.find(student => student.id === parseInt(studentId));
                    if (student) {
                        setStudentData(student.full_name);
                    }
                });
        }
         catch (error) {
        console.log(error);
    }
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                <h3 className="ms-4  fw-bold">Hello <br/> {studentData},</h3>
                    <div className="container mt-5 mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon"> <i className="bi bi-mortarboard"></i> </div>
                                            <div className="ms-2 c-details">
                                                <h4 className="mb-0">Enrolled Courses</h4> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{dashboardData.enrolled_courses}<Link to='/my-courses' className="ms-2 icon-sm link-dark"> <i className="bi bi-box-arrow-up-right"></i> </Link></h3>
                                        <div className="mt-5">
                                            <div className="progress">
                                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="mt-3"> <span className="text1">Coruses Published all time</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon"> <i className="bi bi-person-lines-fill"></i> </div>
                                            <div className="ms-2 c-details">
                                                <h4 className="mb-0">Favourite Coruses</h4> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{dashboardData.favourite_courses}<Link to='/teacher-users' className="ms-2 icon-sm link-dark"> <i className="bi bi-box-arrow-up-right"></i> </Link></h3>
                                        <div className="mt-5">
                                            <div className="progress">
                                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="mt-3"> <span className="text1">Number of Students Enrolled </span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon"> <i className="bi bi-book"></i> </div>
                                            <div className="ms-2 c-details">
                                                <h4 className="mb-0">Completed Assignments</h4> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{dashboardData.complete_assignments}<Link to='/assignments' className="ms-2 icon-sm link-dark"> <i className="bi bi-box-arrow-up-right"></i> </Link></h3>
                                        
                                        <div className="mt-5">
                                            <div className="progress">
                                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="mt-3"> <span className="text1">Uploaded in All Courses</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-5">
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon"> <i className="bi bi-book"></i> </div>
                                            <div className="ms-2 c-details">
                                                <h4 className="mb-0">Pending Assignments</h4> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{dashboardData.pending_assignments}<Link to='/assignments' className="ms-2 icon-sm link-dark"> <i className="bi bi-box-arrow-up-right"></i> </Link></h3>
                                        
                                        <div className="mt-5">
                                            <div className="progress">
                                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="mt-3"> <span className="text1">Uploaded in All Courses</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default  Dashboard;