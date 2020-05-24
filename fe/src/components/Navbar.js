import React, { Component } from 'react';
import './navbar.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : ''
        }
    }


    SignIn = (TK,MK) => {
        Axios.post('',{}).then(result => {

        })
    }

    render() {
        return (
            <div>
                <div className="navbar-color">
                    <div className="home-1 container">
                        <div className="home-left">
                            <img src="images/Untitled-1.png" width="180px" alt="logo" />
                        </div>
<<<<<<< .mine
                        <div className="home-mid form-group">
                            <input type="search" className="form-control input-search" />
||||||| .r14
                        <div className="col-md-5 ">
                            <input placeholder="Tài Khoản" className="tkmk" />
                            <input placeholder="Mật Khẩu" className="tkmk" />
                            <button className="button-login">Đăng Nhập</button>
=======
                        <div className="col-md-5 ">
                            <input placeholder="Tài Khoản" className="tkmk" />
                            <input placeholder="Mật Khẩu" className="tkmk" />
                            <button className="button-login" 
                            onClick={e=>{
                                console.log(e)
                            }}>
                                Đăng Nhập
                            </button>
>>>>>>> .r19
                        </div>
<<<<<<< .mine
                        <div className="home-right">
                            <div className="icon-navhome">
                                <input placeholder="Tài Khoản" className="tkmk" />
                                <input placeholder="Mật Khẩu" className="tkmk" />
                                <button className="button-login">Đăng Nhập</button>
                            </div>
                            <a style={{ marginLeft: "170px" }} href="/#">Quên tài khoản?</a>
||||||| .r14
                        <a style={{ marginLeft: "175px" }} href="/#">Quên tài khoản?</a>
                    </section>
                </div>
                <div id="1">
=======
                        <Link style={{ marginLeft: "175px" }} to="forgetPass">
                            Quên tài khoản?
                        </Link>
                    </section>
                </div>
                <div id="1">
>>>>>>> .r19

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
