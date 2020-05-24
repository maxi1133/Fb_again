import React, { Component } from 'react';
import "./navbar.css"

class Home extends Component {
    render() {
        return (
            <div>
                {/* <NavHome></NavHome> */}
                <div className="home-1">
                    <div className="home-left">
                        <h1>Left</h1>
                        <p>lorem ipsum</p>
                    </div>

                    <div className="home-mid">
                        <div className="postSTT">
                            <div className="avatar">
                                <img src="images/goku-01.jpg" alt="a" width="70px" height="70px " />
                            </div>
                            <div className="new-Blog" style={{ marginBottom: "10px" }}>
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
                                <div className="add-ion">
                                    <button className="btn-icon">Cảm xúc/Hoạt động</button>
                                </div>
                            </div>
                        </div>


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
