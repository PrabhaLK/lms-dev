import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
const baseUrl = 'http://127.0.0.1:8000/api';


function UploadAssignment() {
    useEffect(() => {
        try {
            axios.get(baseUrl + '/student-assignment/' + teacher_id + '/' + student_id)
                .then((res) => {
                    console.log(res.data);

                    // assignmentData({
                    //     course: res.data.course,
                    //     title: res.data.title,
                    //     description: res.data.description,
                    //     prev_video: res.data.video,
                    //     remarks: res.data.remarks,
                    //     video: '',
                    // });
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    const [assignmentData, setassignmentData] = useState({
        title:'',
        uploaded_coursework:''
    });


    const handleChange = (event) => {
        setassignmentData({
            ...assignmentData,
            [event.target.name]: event.target.value
        });
    }

    const handleFileChange = (event) => {
        setassignmentData({
            ...assignmentData,
            [event.target.name]: event.target.files[0]
        });
    }
    const { student_id } = useParams();
    const { teacher_id } = useParams();

    const formSubmit = () => {
        
        const _formdata = new FormData();
        _formdata.append('teacher', teacher_id);
        _formdata.append('student', student_id);
        // _formdata.append('detail', assignmentData.detail);
        _formdata.append('uploaded_coursework', assignmentData.uploaded_coursework, assignmentData.uploaded_coursework.name);
        _formdata.append('title', assignmentData.title);
        try {
            axios.put(baseUrl + '/student-assignment/' + teacher_id + '/' + student_id, _formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        Swal.fire({
                            title: 'Assignment has been added',
                            icon: "success",
                            toast: true,
                            timer: 3000,
                            position: 'top-right',
                            timerProgressBar: true,
                            showConfirmButton: false
                        });
                    }
                   
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                <Sidebar />
                </aside>
                <section className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add an Assignment</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="assignment_file" className="form-label">Assignment file</label>
                                <input type="file" onChange={handleFileChange} name='uploaded_coursework' className="form-control" id="uploaded_coursework" />
                            </div>
                            <hr />
                            <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default UploadAssignment;