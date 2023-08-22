import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = ({toggleMode,mode}) => {

  

  return (
    <div>
        <nav className="navbar fixed-top  navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light "  to={"/"}><i class="fa-sharp fa-solid fa-radio"></i> News-24</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light " aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link text-light" to={"/about"}>About</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={"/"}>General</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={"/business"}>Business</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={"/health"}>Health</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={"/technology"}>Technology</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={"/science"}>Science</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={"/sports"}>Sports</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={"/entertainment"}>Entertainment</Link></li>
        
       
      </ul>
      <div className="d-flex justify-content-end">
      <div className="form-check form-switch "> 
  <input className="form-check-input" type="checkbox"  role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }


export default Navbar
