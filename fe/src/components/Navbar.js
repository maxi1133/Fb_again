import React, { Component } from 'react';
import './navbar.css'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : ''
        }
    }

    componentDidMount(){
        
    }

    GetData = () => {
        var obj = {
            taikhoan : $('#taikhoan').val(),
            matkhau : $('#matkhau').val(),
        }
        this.props.SignIn(obj.taikhoan,obj.matkhau)
    }

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
                                <input id='taikhoan' placeholder="Tài Khoản" className="tkmk" />
                                <input id='matkhau' placeholder="Mật Khẩu" className="tkmk" />
                                <button className="button-login" 
                                onClick={e=>{this.GetData()}} >Đăng Nhập</button>
                            </div>
                            
                        <Link style={{ marginLeft: "175px" }} to="forgetPass">
                            Quên tài khoản?
                        </Link>
                    
                        </div>
                        <div id="1">

                        </div>
                    </div>
                </div>
        );
    }
}

export default Navbar;
