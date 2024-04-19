import { Link } from "react-router-dom";
function AllCourses() {
    return (
        <div className="container mt-3">
            {/* Latest Courses start */}
            <h3 className="pb-1 mb-2"> Latest Courses </h3>
            <div className="row mb-4">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to=""><img src="java.jpeg" className="card-img-top" alt="java" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">JAVA</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">JAVA</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">JAVA</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Latest Courses  */}
            {/* Pagination start */}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* Pagination end */}
        </div>
    );
}

export default AllCourses