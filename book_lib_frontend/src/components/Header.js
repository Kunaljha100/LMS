import React, {useEffect,useState} from "react";
import {Link, useLocation} from "react-router-dom";



const Header = () => {
    const [activeTab, setActiveTab]=useState("Home");
    const location =    useLocation();
    useEffect(() =>{
        if(location.pathname === "/"){
            setActiveTab("Home")
        }else if(location.pathname === "/add"){
            setActiveTab("AddContact")
        }else if(location.pathname === "/about"){
            setActiveTab("About")
        }

    },[location]); 
    return (
        <div className="header nav-link">
          <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <div class="nav-link active" aria-current="page" >
          <Link to="/">
                <p className={`${activeTab === "Home" ? "active" : ""}`}
                    onClick={() => setActiveTab("Home")}>
                        <div class="nav-link " >Home</div>
                    </p>
                </Link>
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" href="#">
            <Link to="/add">
                    <a className={`${activeTab === "AddContact" ? "active" : ""}`}
                    onClick={() => setActiveTab("AddContact")}>
                        Add Contact
                    </a>
                </Link></div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <p className="logo"> <img src="#" alt="" className="logo" /></p>
            
            
            <div className="header-right">
                <Link to="/">
                <div className={`${activeTab === "Home" ? "active" : ""}`}
                    onClick={() => setActiveTab("Home")}>
                        Home
                    </div>
                </Link>
                
                <Link to="/add">
                    <p className={`${activeTab === "AddContact" ? "active" : ""}`}
                    onClick={() => setActiveTab("AddContact")}>
                        Add Contact
                    </p>
                </Link>

                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active" : ""}`}
                    onClick={() => setActiveTab("About")}>
                        About
                    </p>
                </Link>
            </div>
            
        </div>
    );
}

export default Header;
