import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="header-login">
                    <section id="header" className="container">
                        <div className="col-md-7">
                            <img src="images/Untitled-1.png" width="180px" style={{}} alt="logo" />
                        </div>
                        <div className="col-md-5 ">
                            <input placeholder="Tài Khoản" className="tkmk" />
                            <input placeholder="Mật Khẩu" className="tkmk" />
                            <button className="button-login">Đăng Nhập</button>
                        </div>
                        <a style={{ marginLeft: "175px" }} href="/#">Quên tài khoản?</a>
                    </section>
                </div>
                <div id="1">

                </div>
            </div>
        );
    }
}

export default Navbar;
