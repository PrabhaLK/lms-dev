import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function AddChapter() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add Chapter</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" />
                            </div>
                            <div className="mb-3">
                                <label for="video" className="form-label">Video</label>
                                    <input type="file" className="form-control" id="video" />
                            </div>
                            <div className="mb-3">
                                <label for="technologies" className="form-label">Remarks</label>
                                <textarea className="form-control" placeholder="this video is focused on..." id="technologies" />
                            </div>
                            <hr />
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddChapter;