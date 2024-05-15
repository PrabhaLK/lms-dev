import { Link } from "react-router-dom";
import '../../css/dashboardCard.css';
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api';
function TeacherDashboard() {
    const [dashboardData, setdashboardData] = useState([])
    const[teacherData, setteacherData] =useState([])
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        try {
            axios.get(baseUrl + '/teacher/dashboard/' + teacherId)
                .then((res) => {
                    // console.log(res.data);
                    setdashboardData(res.data);
                });
        } catch (error) {
            console.log(error);
        }
        try{
            axios.get(baseUrl + '/teacher/')
                .then((res) => {
                    console.log(res.data);
                    const teacher = res.data.find(teacher => teacher.id === parseInt(teacherId));
                    if (teacher) {
                        setteacherData(teacher.full_name);
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
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <h3 className="ms-4  fw-bold">Hello <br/> {teacherData},</h3>
                    <div className="container mt-5 mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon"> <i className="bi bi-mortarboard"></i> </div>
                                            <div className="ms-2 c-details">
                                                <h4 className="mb-0">Total Courses</h4> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{dashboardData.total_teacher_courses}<Link to='/teacher-courses' className="ms-2 icon-sm link-dark"> <i className="bi bi-box-arrow-up-right"></i> </Link></h3>
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
                                                <h4 className="mb-0">Total Students</h4> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{dashboardData.total_teacher_students}<Link to='/teacher-users' className="ms-2 icon-sm link-dark"> <i className="bi bi-box-arrow-up-right"></i> </Link></h3>
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
                                                <h4 className="mb-0">Total Chapters</h4> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{dashboardData.total_teacher_chapters}<Link to='/teacher-courses' className="ms-2 icon-sm link-dark"> <i className="bi bi-box-arrow-up-right"></i> </Link></h3>
                                        
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

export default TeacherDashboard;