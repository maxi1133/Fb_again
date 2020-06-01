import React, { Component } from 'react';
import "./navbar.css"
import NavHome from './navHome';
import ListBlog from './Blog'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('UserData')
        let isLogin = true

        if (token === null) {
            isLogin = false
        }
        this.state = {
            isLogin
        }
    }
    renderRedirec() {
        if (this.state.isLogin === false) {
            return <Redirect to="/login" />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirec()}
                <NavHome></NavHome>
                <div className="home-1">
                    <div className="home-left">
                        <h1>Left</h1>
                        <p>lorem ipsum</p>
                    </div>

                    <div className="home-mid">
                        <div className="postSTT">
                            <div className="avatar">
                                <img src="images/goku-01.jpg" alt="a" width="40px" height="40px " />
                                <input className="new-stt" placeholder="Đố em biết anh đang nghĩ gì????" />

                            </div>

                            <div className="box-img-icon">
                                <div className="add-img">
                                    <button className="btn-img">
                                        <i className="fa fa-picture-o" style={{ marginRight: "5px" }}>
                                        </i>
                                        Ảnh/Video
                                    </button>
                                </div>
                                <div className="add-icon">
                                    <button className="btn-icon">Cảm xúc/Hoạt động</button>
                                </div>
                            </div>
                        </div>
                        <ListBlog></ListBlog>


                    </div>
                    <div className="home-right">
                        <h1>Right</h1>
                        <p>lorem ipsum</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
