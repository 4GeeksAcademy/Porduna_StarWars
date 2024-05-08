import React from "react";
import { Link } from "react-router-dom";

export const Characters = () => {
    return (
<Link to="/characters">
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col-3">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: " preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">whatever</text></svg>
                    <div className="card-body">
                        <h3 className="card-text">Lorem ipsum</h3>
                        <p className="card-text mb-auto">Description</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <Link to="/characters"><button type="button" className="btn btn-sm btn-outline-secondary">Details</button></Link>
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                <i class="fa-regular fa-star" />
                                </button>
                            </div>
                            <small className="text-muted"></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Link>
    );
};