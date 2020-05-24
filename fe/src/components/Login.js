import React, { Component } from 'react';
import './login.css'
import Navbar from './Navbar'
import Home from './Home'

import Axios from 'axios'
import sw from 'sweetalert2'


class Login extends Component {


    render() {
        return (
            <div>
                <Navbar SignIn = {this.props.SignIn} />
                <div className="container">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <h1>Tạo tài khoản mới</h1>
                            <p style={{ fontSize: "20px" }}>Nhanh chóng và dễ vl !</p>
                            <div>
                                <input className="ho form-control" placeholder="Họ" />
                            </div>
                            <div>
                                <input className="ten form-control" placeholder="Tên" />
                            </div>
                            <div>
                                <input type='date' className="form-control" />
                            </div>
                            <div>
                                <input className="form-control" placeholder="Số di động hoặc Email" />
                            </div>
                            <div>
                                <input className="form-control" placeholder="Mật khẩu" />
                            </div>
                            <div>
                                <input className="form-control" placeholder="Nhập lại mật khẩu" />
                            </div>
                            <div>
                                <button style={{ marginLeft: "245px", width: "200px" }} 
                                className="btn btn-danger" 
                                onClick={e => {

                                }}>
                                    Đăng ký
                                </button>
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


class TrungGian extends Component {
    constructor(props) 
    {
        super(props)
        this.state = { 
            isSignIn : false
        }
    }

    SignIn = (TK,MK) => 
    {
        Axios
        .post('http://localhost:4000/Account/SignIn',{taikhoan:TK,matkhau : MK})
        .then(res => {
            
            if(res.data.stt)
            {
                sw.fire({text:'WelCome !' , timer:700 , icon:'success'})
                this.setState({isSignIn : true})
            }
            else {
                sw.fire({title:'Opps!',text : res.data.msg,icon:'error',timer:800})
            }
            
        })
    }


    render() 
    {
        let route 
        if(this.state.isSignIn) 
        {
            route = <Home />
        }   
        else 
        {
            route = <Login SignIn = {this.SignIn} />
        }
        return route
    }

}


export default TrungGian;



