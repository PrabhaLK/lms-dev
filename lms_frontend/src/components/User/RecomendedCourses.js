import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from 'react';
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api';

function RecomendedCourses() {
    const[courseData,setcourseData]=useState([]);

    const studentId = localStorage.getItem('studentId');
    //Fetch students when page loads.
    useEffect(() => {
        try {
            axios.get(baseUrl + '/fetch-recomended-courses/'+studentId)
            .then((res) => {
                console.log(res.data);
                setcourseData(res.data);
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
                        <h5 className="card-header">Recomended Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Related to:</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {courseData.map((row,index)=>
                                    <tr>
                                        <td><Link to={`/detail/${row.id}`} className="text-decoration-none link-dark">{row.title}</Link></td>
                                        <td>{row.techs}</td>
                                        <td className="d-flex justify-content-center">
                                            <Link to={`/detail/${row.id}`} className=" ms-3 me-3 align-center btn btn-primary btn-sm active " >View Course</Link>
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



export default RecomendedCourses;