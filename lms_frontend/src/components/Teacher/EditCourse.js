import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api';
function EditCourse() {
    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_img: '',
        prev_img: '',
        techs: ''
    });

    //fetch categories when page load.
    const { course_id } = useParams();
    useEffect(() => {
        try {
            axios.get(baseUrl + '/category')
                .then((res) => {
                    // console.log(res.data);
                    setCats(res.data);
                });
        } catch (error) {
            console.log(error);
        }
        //Fetch current course data 
        try {
            axios.get(baseUrl + '/teacher-course-detail/' + course_id)
                .then((res) => {
                    setCourseData({
                        category: res.data.category,
                        title: res.data.title,
                        description: res.data.description,
                        prev_img: res.data.featured_img,
                        f_img: '',
                        techs: res.data.techs,
                    });
                });
        } catch (error) {
            console.log(error);
        }
        //end     

    }, []);
    // console.log(cats);

    const handleChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.value
        });
    }

    const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.files[0]
        });
    }

    const formSubmit = () => {
        const _formdata = new FormData();
        _formdata.append('category', courseData.category);
        _formdata.append('teacher', 1);
        _formdata.append('title', courseData.title);
        _formdata.append('description', courseData.description);
        if (courseData.f_img !== '') {
            _formdata.append('featured_img', courseData.f_img, courseData.f_img.name);
        }
        _formdata.append('featured_img', courseData.f_img, courseData.f_img.name);
        _formdata.append('techs', courseData.techs);
        try {
            axios.put(baseUrl + '/teacher-course-detail/'+course_id, _formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    // console.log(res.data);
                    if (res.status == 200) {
                        Swal.fire({
                            title: 'Confirm',
                            text: 'data has been updated',
                            icon: 'success',
                            position: 'Top right',
                            timerProgressBar: 'continue',
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
                    <TeacherSidebar />
                </aside>
                <section className="col-9">
                    <div className="card">
                        <h5 className="card-header">Edit Course</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Category</label>
                                    <select name='category' value={courseData.category} onChange={handleChange} class='form-control'>
                                        {cats.map((category, index) => { return <option key={index} value={category.id}>{category.title}</option> })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" value={courseData.title} onChange={handleChange} name='title' id='title' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <textarea value={courseData.description} onChange={handleChange} name='description' className="form-control" id="description" />
                                </div>
                                <div className="mb-3">
                                    <label for="video" className="form-label">Featured Image</label>
                                    <input type="file" onChange={handleFileChange} name='f_img' className="form-control" id="video" />
                                    {courseData.prev_img &&
                                        <p className="mt-3"><img src={courseData.prev_img} width="300" /></p>
                                    }
                                </div>
                                <div className="mb-3">
                                    <label for="technologies" className="form-label">Technologies</label>
                                    <textarea value={courseData.techs} onChange={handleChange} name="techs" className="form-control" placeholder="Php , Python, JavaScript, HTML, CSS" id="techs" />
                                </div>
                                <hr />
                                <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EditCourse;