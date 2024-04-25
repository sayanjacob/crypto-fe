// Header.js (updated)
import React, { useContext } from 'react';

const Header = () => {

    return (
        <div className={`container-fluid p-0 m-0 px-5  `}>
            <nav className={`navbar navbar-expand-lg`}>
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">CryptoTracker</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            
                         
                        </ul>
                        
                    </div>
                </div>
            </nav>
            {/* Removed redundant button outside the form */}
        </div>
    );
};

export default Header;
