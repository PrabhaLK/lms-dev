import { useParams } from 'react-router-dom'

function CourseDetail() {
    let { course_id } = useParams();
    return (
        <h1>Course Details {course_id}</h1>
    )
}

export default CourseDetail;