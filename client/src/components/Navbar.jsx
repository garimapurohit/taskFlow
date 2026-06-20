function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">

      <div className="container-fluid">

        <a className="navbar-brand fw-bold text-primary" href="#">
          TaskFlow
        </a>

        <ul className="navbar-nav ms-auto d-flex flex-row gap-4 align-items-center">

          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>

          <li className="nav-item">
            <button className="btn btn-primary ms-2">
              Get Started
            </button>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;