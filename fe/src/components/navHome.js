import React, { Component } from 'react';
import './navbar.css'

class navHome extends Component {
    render() {
        return (
            <div className="navbar-color">
                <div className="home-1 container">
                    <div className="home-left">
                        <img src="images/Untitled-1.png" width="180px" alt="logo" />
                    </div>
                    <div className="home-mid form-group">
                        <input type="search" className="form-control input-search" />
                    </div>
                    <div className="home-right">
                        <div className="icon-navhome">
                            <button className="h1-color"><li className="fa fa-bell-o icon-nav"></li></button>
                            <button className="h1-color"><li className="fa fa-comment-o icon-nav"></li></button>
                            <button className="h1-color"><li className="fa fa-user-o icon-nav"></li></button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default navHome;
