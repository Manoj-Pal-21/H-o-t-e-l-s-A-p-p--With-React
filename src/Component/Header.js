import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Developer Manoj</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li ><Link to="/">Home</Link></li>
                        <li ><Link to="/post">Booking</Link></li>
                        {/* <li ><Link to="/profile">Profile</Link></li> */}
                        {/* <li ><Link to="/postdetails">PostDetails</Link></li> */}
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header;