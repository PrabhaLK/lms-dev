import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';
function AddCourse() {
    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_img: '',
        techs: ''
    });

    //fetch categories when page load.
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
        const teacherId=localStorage.getItem('teacherId');
        const _formdata = new FormData();
        _formdata.append('category', courseData.category);
        _formdata.append('teacher', teacherId);
        _formdata.append('title', courseData.title);
        _formdata.append('description', courseData.description);
        _formdata.append('featured_img', courseData.f_img, courseData.f_img.name);
        _formdata.append('techs', courseData.techs);
        try{
            axios.post(baseUrl+'/course/',_formdata,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
            .then((res)=>{
                // console.log(res.data);
                window.location.href='/add-course';
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
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Category</label>
                                    <select name='category' onChange={handleChange} class='form-control'>
                                        {cats.map((category, index) => { return <option key={index} value={category.id}>{category.title}</option> })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" onChange={handleChange} name='title' id='title' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <textarea onChange={handleChange} name='description' className="form-control" id="description" />
                                </div>
                                <div className="mb-3">
                                    <label for="video" className="form-label">Featured Image</label>
                                    <input type="file" onChange={handleFileChange} name='f_img' className="form-control" id="video" />
                                </div>
                                <div className="mb-3">
                                    <label for="technologies" className="form-label">Technologies</label>
                                    <textarea onChange={handleChange} name="techs" className="form-control" placeholder="Php , Python, JavaScript, HTML, CSS" id="techs" />
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

export default AddCourse;