import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function CourseDetail() {
    let { course_id } = useParams();
    return (
        <div className='container mt-3 '>
            <div className='row'>
                <div className='col-4'>
                    {/* Course Image */}
                    <img src="/java.jpeg" className="img-thumbnail" alt="java-course-image" />
                </div>
                <div className='col-8'>
                    <h3>Java</h3>
                    <p>
                        Java is a powerful and versatile programming language widely used in software development, web applications, mobile apps, and enterprise systems.
                        This comprehensive course covers fundamental concepts such as object-oriented programming (OOP),
                        data structures, algorithms, exception handling, and multithreading.
                        Students will learn to design, develop, and deploy Java applications,
                        gaining hands-on experience with key Java technologies like Java SE, Java EE, and JavaFX.
                        By the end of this course, participants will have a strong foundation in Java programming, enabling them to create
                        robust and scalable software solutions for various platforms and industries.
                    </p>
                    <p><b>Course By:</b> <Link to="/teacher-detail/1">Saman Kumara</Link></p>
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

                    <li className="list-group-item ">Introduction to Java
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
                                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* video modal end*/}
                    </li>
                    <li className="list-group-item">JAVA Get Started<span className="float-end">
                        <span className="me-3">1:30 Minutes</span>
                        <button className="btn btn-danger btn-sm">
                            <i className="bi-youtube"></i></button>
                    </span> </li>
                    <li className="list-group-item">Java Data Types<span className="float-end">
                        <span className="me-3">1:30 Minutes</span>
                        <button className="btn btn-danger btn-sm">
                            <i className="bi-youtube"></i></button>
                    </span> </li>
                    <li className="list-group-item ">Java Variables<span className="float-end">
                        <span className="me-3">1:30 Minutes</span>
                        <button className="btn btn-danger btn-sm">
                            <i className="bi-youtube"></i></button>
                    </span> </li>
                    <li className="list-group-item">Java if Statement<span className="float-end">
                        <span className="me-3">1:30 Minutes</span>
                        <button className="btn btn-danger btn-sm">
                            <i className="bi-youtube"></i></button>
                    </span> </li>
                    <li className="list-group-item">JAVA Loops<span className="float-end">
                        <span className="me-3">1:30 Minutes</span>
                        <button className="btn btn-danger btn-sm">
                            <i className="bi-youtube"></i></button>
                    </span> </li>

                </ul>
            </div>
            {/*course videos end*/}
            {/* Related Courses start  */}
            <h3 className="pb-1 mb-2 mt-5">Related Courses</h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to=""><img src="/java.jpeg" className="card-img-top" alt="java" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">JAVA</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href=""><img src="/java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href=""><img src="/java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">JAVA</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href=""><img src="/java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">JAVA</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Related Courses end  */}
        </div>
    )
}

export default CourseDetail;