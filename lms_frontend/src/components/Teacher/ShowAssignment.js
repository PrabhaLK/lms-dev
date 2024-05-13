import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
const baseUrl = 'http://127.0.0.1:8000/api';

function ShowAssignment() {
    const [assignmentData, setassignmentData] = useState([]);
    const [totalResult, settotalResult] = useState([0]);
    const { student_id } = useParams();
    const { teacher_id } = useParams();
    //Fetch courses when page loads.
    useEffect(() => {
        try {
            axios.get(baseUrl + '/student-assignment/' + teacher_id+'/'+student_id)
                .then((res) => {
                    settotalResult(res.data.length);
                    setassignmentData(res.data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    //delete data
    const Swal = require('sweetalert2')
    // const handleDeleteClick = (chapter_id) => {
    //     Swal.fire({
    //         title: 'Confirm',
    //         text: 'Are you sure you want to delete this data?',
    //         icon: 'error',
    //         confirmButtonText: 'Continue',
    //         ShowCancelButton: true
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             try {
    //                 axios.delete(baseUrl + '/chapter/' + chapter_id)
    //                     .then((res) => {
    //                         Swal.fire('success', 'Data has been deleted.');
    //                         try {
    //                             axios.get(baseUrl + '/course-chapters/' + course_id)
    //                                 .then((res) => {
    //                                     settotalResult(res.data.length);
    //                                     setchapterData(res.data);
    //                                 });
    //                         } catch (error) {
    //                             console.log(error);
    //                         }
    //                     });
    //             } catch (error) {
    //                 Swal.fire('error', 'Data has not been deleted!');
    //             }
    //         } else {
    //             Swal.fire('error', 'Data has not been deleted!');
    //         }
    //     });
    // }

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">All Assignments ({totalResult})<Link className="btn btn-sm btn-success float-end" 
                        to={`/add-assignment/${student_id}/${teacher_id}`}>Add Assignment</Link></h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Assignment Name</th>
                                        <th>Assignment Detail</th>
                                        <th>Assignment File</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignmentData.map((chapter, index) =>
                                        <tr>
                                            <td><Link className="text-decoration-none link-dark " to={`/detail/${chapter.course.id}`}>{chapter.course.title}</Link></td>
                                            <td>{chapter.title}</td>
                                           
                                            <td>{chapter.detail}</td>
                                            <td>
                                                {chapter.assignment_file &&
                                                   <Link className="text-decoration-none btn fw-bold btn-outline-secondary" to={chapter.assignment_file}><i class="bi bi-file-earmark-post"></i> Download The Assignment</Link>
                                                }
                                                {!chapter.assignment_file &&
                                                   <Link className="text-decoration-none btn fw-bold btn-outline-secondary" to={chapter.assignment_file}><i class="bi bi-file-earmark-post"></i> No Assignment File</Link>
                                                }
                                                
                                            </td>
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

export default ShowAssignment;