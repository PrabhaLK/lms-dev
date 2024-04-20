import { Link } from "react-router-dom";
function TeacherDetail() {
    return (
        <div className='container mt-3 '>
            <div className='row'>
                <div className='col-4'>
                    {/* Course Image */}
                    <img src="/java.jpeg" className="img-thumbnail" alt="teacher image" />
                </div>
                <div className='col-8'>
                    <h3>Teacher Detail</h3>
                    <p>
                        Java is a powerful and versatile programming language widely used in software development, web applications, mobile apps, and enterprise systems.
                        This comprehensive course covers fundamental concepts such as object-oriented programming (OOP),
                        data structures, algorithms, exception handling, and multithreading.
                        Students will learn to design, develop, and deploy Java applications,
                        gaining hands-on experience with key Java technologies like Java SE, Java EE, and JavaFX.
                        By the end of this course, participants will have a strong foundation in Java programming, enabling them to create
                        robust and scalable software solutions for various platforms and industries.
                    </p>
                    <p><b>Skills:</b> <Link to="/category/php">Php </Link>,
                        <Link to="/category/php">Python</Link>, <Link to="/category/php">javaScript</Link></p>
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
                    <Link to="/detail/1" className="list-group-item list-group-item-action ">php Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action ">Python Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action ">php Course 2</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action ">javaScript Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action ">Python Course 2</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action ">javaScript Course 2</Link>

                </div>
            </div>
            {/*course list end*/}

        </div>
    );
}

export default TeacherDetail;