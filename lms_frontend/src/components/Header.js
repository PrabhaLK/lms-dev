import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/ ">LearnPro</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <a className="nav-link" href="#">Courses</a>
            <a className="nav-link" href="#">Teachers</a>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li> <Link className="dropdown-item" to="/user-login">Login</Link></li>
                <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
            <Link className="nav-link active" to="/about">About us </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
