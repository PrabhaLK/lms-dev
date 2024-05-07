import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from "axios";
const siteUrl = 'http://127.0.0.1:8000/';
const baseUrl = 'http://127.0.0.1:8000/api';
function CourseDetail() {
    const [courseData, setcourseData] = useState([]);
    const [chapterData, setchapterData] = useState([]);
    const [teacherData, setteacherData] = useState([]);
    const [relatedcourseData, setrelatedcourseData] = useState([]);
    const [userLoginStatus,setuserLoginStatus] =useState();
    const [enrollStatus,setenrollStatus] =useState();
    const [techList, settechList] = useState([]);
    let { course_id } = useParams();
    const studentId=localStorage.getItem('studentId');
    //Fetch courses when page load.
    useEffect(() => {
        try {
            axios.get(baseUrl + '/course/' + course_id)
                .then((res) => {
                    console.log(res);
                    setcourseData(res.data);
                    setchapterData(res.data.course_chapters);
                    setteacherData(res.data.teacher);
                    settechList(res.data.tech_list);
                    setrelatedcourseData(JSON.parse(res.data.related_videos));
                });
        } catch (error) {
            console.log(error);
        }
        //fetch enroll status
        try {
            axios.get(baseUrl + '/fetch-enroll-status/' + studentId+'/'+course_id)
                .then((res) => {
                    console.log(res);
                    if(res.data.bool==true){
                        setenrollStatus('success');
                    }
                });
        } catch (error) {
            console.log(error);
        }
        const studentLoginStatus = localStorage.getItem('studentLoginStatus');
        if (studentLoginStatus === 'true') {
            setuserLoginStatus('success')      
        }
    }, []);
    // console.log(relatedcourseData);

    const enrollCourse = () =>{
        // console.log('enroll course clicked'); 
        const studentId=localStorage.getItem('studentId');
        const _formdata = new FormData();
        _formdata.append('course', course_id);
        _formdata.append('student', studentId);
        try{
            axios.post(baseUrl+'/student-enroll-course/',_formdata,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status===200||res.status===201){
                    Swal.fire({
                        title: 'You have successfully enrolled in this course',
                        icon:"success",
                        toast:true,
                        timer:3000,
                        position:'top-right',
                        timerProgressBar:true,
                        showConfirmButton:false
                    });
                    setenrollStatus('success')
                }
            });
        }catch(error){
            console.log(error);
        } 
    }

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
                        {techList.map((tech, index) =>
                            <>
                                <Link className='badge badge-pill bg-warning me-2 text-dark text-decoration-none' to={`/category/${tech.trim()}`}>{tech.trim()}</Link>
                            </>
                        )}
                    </p>
                    <p><b>Duration: </b>3 Hours 13 Minutes</p>
                    <p><b>Total Enrolled:</b> 2 Students</p>
                    <p><b>Rating: </b> 4/5</p>
                    {enrollStatus ==='success' && userLoginStatus =='success' &&
                            <p><span>You are already enrolled in this course.</span></p>
                    }
                    {userLoginStatus ==='success' && enrollStatus !=='success' &&
                            <p><button onClick={enrollCourse} type='button' className='btn btn-success'>Enroll in this Course</button></p>
                    }
                    {userLoginStatus !=='success' &&
                        <p><Link to='/user-login'  className='btn btn-warning'>Please login to enroll in this course</Link></p>
                    }
                </div>
            </div>
            {/*course videos start*/}
            
            <div className="card mt-4">
                <div className="card-header">
                    <h5 className="text-center">Course Content</h5>
                </div>
                {enrollStatus ==='success' && userLoginStatus =='success' &&
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
                }
                {/* custom added code  */}
                { enrollStatus !=='success' &&
                <ul className='list-group list-group-flush'>
                    <li  className=' btn btn-lg btn-primary list-group-item' disabled><h5>This Course Content is hidden!</h5></li>
                    <li className=' btn  btn-primary list-group-item'>please enroll this course to see course content</li>
                </ul>
                }
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