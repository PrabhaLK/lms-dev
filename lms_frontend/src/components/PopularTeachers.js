import { Link } from "react-router-dom";
function PopularTeachers() {
    return (
        <div className="container mt-3">
            {/* Popular Teachers start */}
            <h3 className="pb-1 mb-2"> Popular Teachers </h3>
            <div className="row mb-4">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to=""><img src="java.jpeg" className="card-img-top" alt="java" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">JAVA</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">JAVA</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="java.jpeg" className="card-img-top" alt="java" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Popular Teachers  */}
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

export default PopularTeachers;