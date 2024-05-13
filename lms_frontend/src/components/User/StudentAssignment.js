import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from 'react';
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api';

function StudentAssignment() {
    const [assignmentData, setassignmentData] = useState([]);

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
                                        <th>Attcahed File</th>
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
                                                    <Link className="text-decoration-none btn fw-bold btn-outline-secondary" to={row.assignment_file}><i class="bi bi-file-earmark-post"></i> Download The Assignment</Link>
                                                }
                                                {!row.assignment_file &&
                                                    <Link className="text-decoration-none btn fw-bold btn-outline-secondary" to={row.assignment_file}><i class="bi bi-file-earmark-post"></i> No Assignment File</Link>
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