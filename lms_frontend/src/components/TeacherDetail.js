import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api';
function TeacherDetail() {
    const [courseData, setcourseData] = useState([]);
    const [teacherData, setteacherData] = useState([]);
    const [skillList, setskillList] = useState([]);
    let { teacher_id } = useParams();
    //Fetch courses when page load.
    useEffect(() => {
        try {
            axios.get(baseUrl + '/teacher/' + teacher_id)
                .then((res) => {
                    console.log(res);
                    setteacherData(res.data);
                    setcourseData(res.data.teacher_courses);
                    setskillList(res.data.skill_list);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className='container mt-3 '>
            <div className='row'>
                <div className='col-4'>
                    {/* Course Image */}
                    <img src="/java.jpeg" className="img-thumbnail" alt="teacher image" />
                </div>
                <div className='col-8'>
                    <h3>{teacherData.full_name}</h3>
                    <p>
                        {teacherData.detail}
                    </p>
                    <p><b>Skills:</b>
                        {skillList.map((skill, index) =>
                            <>
                                <Link className='badge badge-pill bg-warning me-2 text-dark text-decoration-none' to={`/teacher-skill-courses/${skill.trim()}/${teacherData.id}`}>{skill.trim()}</Link>
                            </>
                        )}
                    </p>
                    <p><b>Recent Course:</b> <Link to="/teacher-detail/1">Php </Link></p>
                    <p><b>Rating: </b> 4/5</p>
                </div>
            </div>
            {/*course list start*/}
            <div className="card mt-4">
                <div className="card-header">
                    <h5 className="text-center">Course List</h5>
                </div>
                <div className="list-group list-group-flush">
                    {courseData.map((course, index) =>
                        <Link to={`/detail/${course.id}`} className="list-group-item list-group-item-action ">{course.title}</Link>
                    )}
                </div>
            </div>
            {/*course list end*/}

        </div>
    );
}

export default TeacherDetail;