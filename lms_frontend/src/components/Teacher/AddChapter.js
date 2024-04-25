import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from 'react';
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api';

function AddChapter() {
    const [chapterData, setChapterData] = useState({
        title: '',
        description: '',
        video: '',
        remarks: ''
    });

    const handleChange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.value
        });
    }

    const handleFileChange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.files[0]
        });
    }

    const formSubmit = () => {
        const _formdata = new FormData();
        _formdata.append('course', 1);
        _formdata.append('title', chapterData.title);
        _formdata.append('description', chapterData.description);
        _formdata.append('video', chapterData.video, chapterData.video.name);
        _formdata.append('remarks', chapterData.remarks);
        try{
            axios.post(baseUrl+'/chapter/',_formdata,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
            .then((res)=>{
                // console.log(res.data);
                window.location.href='/add-chapter/1';
            });
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add Chapter</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" onChange={handleChange} name='title' className="form-control" id="title" />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea className="form-control" onChange={handleChange} name='description' id="description" />
                            </div>
                            <div className="mb-3">
                                <label for="video" className="form-label">Video</label>
                                    <input type="file" onChange={handleFileChange} name='video' className="form-control" id="video" />
                            </div>
                            <div className="mb-3">
                                <label for="technologies" className="form-label">Remarks</label>
                                <textarea onChange={handleChange} name='remarks' className="form-control" placeholder="this video is focused on..." id="technologies" />
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

export default AddChapter;