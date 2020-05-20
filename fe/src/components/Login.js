import React, { Component } from 'react';
import './login.css'
class Login extends Component {
    render() {
        return (
            <div>
                <div className="header-login">
                    <section id="header" className="container">
                        <div className="col-md-7">
                            <img src="images/nk.png" width="50px" alt="logo" />
                        </div>
                        <div className="col-md-5 ">
                            <input placeholder="Tài Khoản" className="tkmk" />
                            <input placeholder="Mật Khẩu" className="tkmk" />
                            <button className="button-login">Đăng Nhập</button>
                        </div>
                        <a style={{ marginLeft: "175px" }} href="/#">Quên tài khoản?</a>
                    </section>
                </div>
                <div className="container">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <h1>Tạo tài khoản mới</h1>
                            <p style={{ fontSize: "20px" }}>Nhanh chóng và dễ vãi luôn á.</p>
                            <div>
                                <input className="ho form-control" placeholder="Họ" />
                            </div>
                            <div>
                                <input className="ten form-control" placeholder="Tên" />
                            </div>
                            <div>
                                <input className="form-control" placeholder="Số di động hoặc Email" />
                            </div>
                            <div>
                                <input className="form-control" placeholder="Mật khẩu mới" />
                            </div>
                            <div>
                                <button style={{ marginLeft: "245px", width: "200px" }} className="btn btn-danger">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>


                <section id="dashboard">

                </section>
            </div>
        );
    }
}

export default Login;
