import React, { Component } from 'react';
import Axios from 'axios'

class Blog extends Component {
    state = {
        blogs: []
    }
    componentDidMount() {
        Axios.get('http://localhost:4000/Blog/')
            .then(res => {
                this.setState({
                    blogs: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })

    }



    render() {
        return (
            < div className="blog-box" >

                {/* <button className="edit-blog">...</button> */}
                < div className="avt-handlename" >
                    <div>
                        <img style={{ marginTop: "7px" }} src="images/goku-01.jpg" width="40px" height="40px" alt="avatar" />
                    </div>
                    <div className="handlename-time-box">
                        <div className="handle-name-blog">
                            <h6>Handle Name</h6>

                        </div>
                        <div className="time-blog">
                            <h6>Time create blog</h6>
                        </div>
                    </div>
                </div >
                <div className="body-blog">
                    <h1>body</h1>
                </div>
                <div className="like-cmt-box-count">
                    <div className="Like-box-count">
                        <h6>Like count</h6>
                    </div>
                    <div className="cmt-box-count">
                        <h6>cmt count</h6>
                    </div>
                </div>
                <div className="like-cmt-button">
                    <div className="like-box">
                        <button><i className="fa fa-thumbs-up" style={{ marginRight: "5px" }}></i>Thích</button>

                    </div>
                    <div className="cmt-box">
                        <button><i className="fa fa-comment" style={{ marginRight: "5px" }}></i>Bình luận</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Blog;
