import React from 'react';
// import { Link } from 'react-router-dom';

export default function NavBarComponent() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase text-danger" >Boolflix</a>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-danger" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}
