import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from 'react';
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api';
function TeacherCourses() {
    const [courseData, setCourseData] = useState([]);
    const teacherId = localStorage.getItem('teacherId');
    // console.log(teacherId)
    //Fetch courses when page loads.
    useEffect(() => {
        try {
            axios.get(baseUrl + '/teacher-courses/' + teacherId)
                .then((res) => {
                    // console.log(res.data);
                    setCourseData(res.data);

                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    // console.log(courseData);

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Total Enrolled</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course, index) =>
                                        <tr>
                                            <td>
                                                <Link className="text-decoration-none link-dark " to={'/all-chapters/' + course.id}>{course.title}</Link>
                                                <hr/>
                                                {course.course_rating && 
                                                    <button className="btn btn-sm btn-warning fw-bold" disabled>Rating: {course.course_rating}/5</button>
                                                }
                                                {!course.course_rating && 
                                                    <button className="btn btn-sm  btn-warning fw-bold" disabled>Rating: 0/5</button>
                                                }
                                                
                                            </td>
                                            <td><img src={course.featured_img} width="80" className="rounded" alt={course.title} /></td>
                                            <td><Link className="text-decoration-none link-dark " to={'/enrolled-students/' + course.id}>{course.total_enrolled_students}</Link></td>
                                            <td>
                                                <Link class=" ms-3 btn btn-info btn-sm" to={'/edit-course/' + course.id}>Edit</Link>
                                                <Link class=" ms-3 btn btn-success btn-sm" to={'/add-chapter/' + course.id}>Add Chapter</Link>
                                                <button className="ms-3 btn btn-danger btn-sm">Delete</button>
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

export default TeacherCourses;