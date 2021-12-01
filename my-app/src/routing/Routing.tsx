//import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { About } from './components/About';
import { Home } from './components/Home';
import { PageNotFound } from "./components/PageNotFound";
import { Users } from './components/Users';

function Routing() {
    return (
        <div >
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <Link to="/" style={{ textDecoration: 'none' }}>
                            Home
                        </Link>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
                            <li className="nav-item">

                                <Link to="/users" style={{ textDecoration: 'none' }}  >
                                    Users
                                </Link>

                            </li>
                            <li className="nav-item ms-4">

                                <Link to="/about" style={{ textDecoration: 'none' }} >
                                    About
                                </Link>

                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/about"  element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>

            </Router>
        </div>


    );
}
export default Routing;
