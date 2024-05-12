import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from 'react';
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api';
function UserList() {
    const[StudentData,setStudentData]=useState([]);

    const teacherId = localStorage.getItem('teacherId');
    //Fetch students when page loads.
    useEffect(() => {
        try {
            axios.get(baseUrl + '/fetch-all-enrolled-students/'+teacherId)
            .then((res) => {
                // console.log(res.data);
                setStudentData(res.data);
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
                        <h5 className="card-header">All Student List</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Enrolled Course</th>
                                        <th>interested Categories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {StudentData.map((row,index)=>
                                    <tr>
                                        <td>{row.student.full_name}</td>
                                        <td>{row.student.email}</td>
                                        <td>{row.course.title}</td>
                                        <td>
                                        {row.student.interested_categories}
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

export default UserList;