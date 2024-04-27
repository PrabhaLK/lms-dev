
import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api';

function EditChapter() {
    const [chapterData, setChapterData] = useState({
        course: '',
        title: '',
        description: '',
        prev_video: '',
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
    const { chapter_id } = useParams();
    const formSubmit = () => {
        const _formdata = new FormData();
        _formdata.append('course', chapterData.course);
        _formdata.append('title', chapterData.title);
        _formdata.append('description', chapterData.description);
        if (chapterData.video !== '') {
            _formdata.append("video", chapterData.video, chapterData.video.name);
        }
        _formdata.append('remarks', chapterData.remarks);

        try {
            axios.put(baseUrl + '/chapter/' + chapter_id, _formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    // console.log(res);
                    if(res.status==200){
                        Swal.fire({
                          title: 'Confirm',
                          text: 'data has been updated',
                          icon: 'success',
                          position:'Top right',
                          timerProgressBar: 'continue',
                          showConfirmButton:false
                        });
                      }

                    // window.location.href = '/edit-chapter/1';
                });
        } catch (error) {
            console.log(error);
        }
    };
    //Fetch Courses page when load
    useEffect(() => {
        try {
            axios.get(baseUrl + '/chapter/' + chapter_id)
                .then((res) => {
                    // console.log(res.data);

                    setChapterData({
                        course: res.data.course,
                        title: res.data.title,
                        description: res.data.description,
                        prev_video: res.data.video,
                        remarks: res.data.remarks,
                        video: '',
                    });
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-9">
                    <div className="card">
                        <h5 className="card-header">Update Chapter</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" value={chapterData.title} onChange={handleChange} name='title' className="form-control" id="title" />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea value={chapterData.description} className="form-control" onChange={handleChange} name='description' id="description" />
                            </div>
                            <div className="mb-3">
                                <label for="video" className="form-label">Video</label>
                                <input type="file" onChange={handleFileChange} name='video' className="form-control" id="video" />
                                {chapterData.prev_video &&
                                    <video controls width="100%" className="mt-2">
                                        <source src={chapterData.prev_video} type="video/mp4" />
                                        Sorry, Your Browser does'nt support embedded videos
                                    </video>
                                }
                            </div>
                            <div className="mb-3">
                                <label for="technologies" className="form-label">Remarks</label>
                                <textarea onChange={handleChange} value={chapterData.remarks} name='remarks' className="form-control" placeholder="this video is focused on..." id="techs" />
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
export default EditChapter;