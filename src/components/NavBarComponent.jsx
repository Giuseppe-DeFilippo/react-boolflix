import React from 'react';
// import { Link } from 'react-router-dom';
import SearchBarComponent from './SearchBarComponent';
export default function NavBarComponent() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase text-danger" >Boolflix</a>
                <SearchBarComponent />

            </div>
        </nav>
    );
}
