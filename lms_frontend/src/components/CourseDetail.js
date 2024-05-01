import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
const siteUrl = 'http://127.0.0.1:8000/';
const baseUrl = 'http://127.0.0.1:8000/api';
function CourseDetail() {
    const [courseData, setcourseData] = useState([]);
    const [chapterData, setchapterData] = useState([]);
    const [teacherData, setteacherData] = useState([]);
    const [relatedcourseData, setrelatedcourseData] = useState([]);
    const [techListData, settechListData] = useState([]);
    let { course_id } = useParams();
    //Fetch courses when page load.
    useEffect(() => {
        try {
            axios.get(baseUrl + '/course/' + course_id)
                .then((res) => {
                    console.log(res);
                    setcourseData(res.data);
                    setchapterData(res.data.course_chapters);
                    setteacherData(res.data.teacher);
                    settechListData(res.data.tech_list);
                    setrelatedcourseData(JSON.parse(res.data.related_videos));
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    // console.log(relatedcourseData);
    return (
        <div className='container mt-3 pb-2 '>
            <div className='row'>
                <div className='col-4'>
                    {/* Course Image */}
                    <img src={courseData.featured_img} className="img-thumbnail" alt={courseData.title + ' image'} />
                </div>
                <div className='col-8'>
                    <h3>{courseData.title}</h3>
                    <p>
                        {courseData.description}
                    </p>
                    <p><b>Course By:</b> <Link className='text-decoration-none' to={`/teacher-detail/${teacherData.id}`}>{teacherData.full_name}</Link></p>
                    <p><b>Technologies used: </b>
                    {techListData.map((tech, index) =>
                        <Link className='badge badge-pill bg-warning me-2 text-dark text-decoration-none' to ={`/category/${tech.trim()}`}>{tech.trim()}</Link>
                    )}
                    </p>
                    <p><b>Duration: </b>3 Hours 13 Minutes</p>
                    <p><b>Total Enrolled:</b> 2 Students</p>
                    <p><b>Rating: </b> 4/5</p>
                </div>
            </div>
            {/*course videos start*/}
            <div className="card mt-4">
                <div className="card-header">
                    <h5 className="text-center">Course Content</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {chapterData.map((chapter, index) =>
                        <li className="list-group-item " key={chapter.id}>{chapter.title}
                            <span className="float-end">
                                <span className="me-3">1 hour 30  Minutes</span>
                                <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#videoModal1">
                                    <i className="bi-youtube"></i></button>
                            </span>
                            {/* video modal start*/}
                            <div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1: </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="ratio ratio-16x9">
                                                <iframe src={chapter.video} title={chapter.title} allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* video modal end*/}
                        </li>
                    )}
                </ul>
            </div>
            {/*course videos end*/}
            {/* Related Courses start  */}
            <h3 className="pb-1 mb-2 mt-5">Related Courses</h3>
            <div className="row mb-4">
                {relatedcourseData.map((rcourse, index) =>
                    <div className="col-md-3">
                        <div className="card">
                            <Link target='__blank' to={`/detail/${rcourse.pk}`}><img src={`${siteUrl}media/${rcourse.fields.featured_img}`} className="card-img-top" alt={rcourse.fields.title + ' image'} /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Related Courses end  */}
        </div>
    )
}

export default CourseDetail;