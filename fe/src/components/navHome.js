import React, { Component } from 'react';
import './navbar.css'

class navHome extends Component {
    render() {
        return (
            <div className="navbar-color">
                <div className="home-11 container">
                    <div className="home-left-1">
                        <img src="images/Untitled-1.png" width="180px" alt="logo" />
                    </div>
                    <div className="home-mid-1 form-group">
                        <input type="search" className="form-control input-search" />
                    </div>
                    <div className="home-right-1">
                        <button className="h1-color"><li className="fa fa-bell icon-nav"></li></button>
                        <button className="h1-color"><li className="fa fa-heart icon-nav"></li></button>
                        <button className="h1-color"><li className="fa fa-user icon-nav"></li></button>
                    </div>
                </div>
            </div>


        );
    }
}

export default navHome;
