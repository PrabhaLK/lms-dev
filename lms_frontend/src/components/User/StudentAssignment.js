import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api';

function StudentAssignment() {
    
    const [assignmentData, setassignmentData] = useState([]);
    const [submitassignment, setsubmitassignment] = useState({
        uploaded_coursework:''
    });
    // const [assignmentStatus, setassignmentStatus] = useState([]);

    const studentId = localStorage.getItem('studentId');
    //Fetch students when page loads.
    useEffect(() => {
        try {
            axios.get(baseUrl + '/my-assignment/' + studentId)
                .then((res) => {
                    console.log(res.data);
                    setassignmentData(res.data);
                });
        } catch (error) {
            console.log(error);
        }

    }, []);
    //end

    const markAsDone = (assignment_id,title,detail,student,teacher) => {
        // console.log('enroll course clicked'); 
        const studentId = localStorage.getItem('studentId');
        const _formdata = new FormData();
        // _formdata.append('course', course_id); 
        _formdata.append('student', student);
        _formdata.append('title', title);
        _formdata.append('detail', detail);
        _formdata.append('teacher', teacher);
        _formdata.append('student_status', true);
        try {
            axios.put(baseUrl + '/update-assignment/'+assignment_id, _formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        Swal.fire({
                            title: 'You have successfully completed this assignment.',
                            icon: "success",
                            toast: true,
                            timer: 3000,
                            position: 'top-right',
                            timerProgressBar: true,
                            showConfirmButton: false
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 5000)
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">My Coursework</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Created By</th>
                                        <th>Assignment Name</th>
                                        <th>Details</th>
                                        <th>Attcahed File | Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignmentData.map((row, index) =>
                                        <tr>
                                            <td><Link to={`/detail/${row.course.id}`} className="text-decoration-none link-dark">{row.course.title}</Link><br/>
                                            <hr/>
                                            <Link to={`/detail/${row.course.id}`} className="  me-3 align-center btn btn-outline-primary btn-sm " >View Course</Link>
                                            </td>
                                            <td><Link to={`/teacher-detail/${row.teacher.id}`} className="text-decoration-none link-dark">{row.teacher.full_name}</Link></td>
                                            <td>{row.title}</td>
                                            <td>{row.detail}</td>
                                            <td>
                                                {row.assignment_file &&
                                                    <p className="text-center"><Link className=" text-decoration-none btn fw-bold btn-outline-secondary" to={row.assignment_file}><i class="bi bi-file-earmark-post"></i> Download Coursework</Link></p>
                                                }
                                                {!row.assignment_file &&
                                                    <p className="text-center"><Link className="text-decoration-none btn fw-bold btn-outline-secondary" to={row.assignment_file}><i class="bi bi-file-earmark-post"></i> No File Attached</Link></p>
                                                }
                                                <hr/>{row.student_status== false &&
                                                    <p className="text-center"><Link to={`/upload-assignment/${studentId}/${row.teacher.id}`} onClick={()=>markAsDone(row.id,row.title,row.detail,row.student.id,row.teacher.id)} className="btn btn-outline-warning fw-bold  text-dark"><i class="bi bi-check2-square"></i> Mark As Done</Link></p>
                                                }
                                                {row.student_status== true &&
                                                    <p className="text-center"><button className="btn btn-warning fw-bold  text-dark"><i class="bi bi-check2-square"></i>Coursework Completed</button></p>
                                                }
                                            </td>
                                            {/* <td className="d-flex justify-content-center">
                                                <Link to={`/detail/${row.id}`} className=" ms-3 me-3 align-center btn btn-primary btn-sm active " >View Course</Link>
                                            </td> */}
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default StudentAssignment;