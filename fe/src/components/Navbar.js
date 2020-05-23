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
                <div className="header-login">
                    <section id="header" className="container">
                        <div className="col-md-7">
                            <img src="images/Untitled-1.png" width="180px" style={{}} alt="logo" />
                        </div>
                        <div className="col-md-5 ">
                            <input placeholder="Tài Khoản" className="tkmk" />
                            <input placeholder="Mật Khẩu" className="tkmk" />
                            <button className="button-login" 
                            onClick={e=>{
                                console.log(e)
                            }}>
                                Đăng Nhập
                            </button>
                        </div>
                        <Link style={{ marginLeft: "175px" }} to="forgetPass">
                            Quên tài khoản?
                        </Link>
                    </section>
                </div>
                <div id="1">

                </div>
            </div>
        );
    }
}

export default Navbar;
