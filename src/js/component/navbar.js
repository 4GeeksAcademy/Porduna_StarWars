import React from "react";
import { Link } from "react-router-dom";
import  SWLogo  from "../../img/Star_Wars_Logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm" aria-label="Third navbar example">
            <Link to="/">
                <div className="container-fluid">
                    <img src={SWLogo} alt="SW logo" className="mx-4" width="90" height="54" />
                </div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarsExample03">
                <Link className="nav-link" to="/characters">Characters</Link>
                <Link className="nav-link" to="/planets">Planets</Link>
                <Link className="nav-link" to="/crafts">Crafts</Link>
                <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Force sides</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Jedis</a></li>
                    <li><a className="dropdown-item" href="#">Sith</a></li>
                    <li><a className="dropdown-item" href="#">Rebels</a></li>
                    <li><a className="dropdown-item" href="#">Empire</a></li>
                </ul>
            </div>
            <input type="search" className="form-control ds-input" placeholder="A long time ago in a galaxy far, far away..." autocomplete="off" ></input>
                <div className="ml-auto">
                    <Link to="/demo">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning ">0</span></button>
                    </Link>
                </div>
        </nav>
    );
};