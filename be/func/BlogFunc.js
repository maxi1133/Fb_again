const express = require('express');
const Blog = require('../Models/Blog');
const BlogRoute = express.Router()


BlogRoute.route('/').get(function (req, res) {
    Blog.find()
        .exec()
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: 'Not found any Blog'
                })
            }
            else {
                res.status(200).json({
                    data: data
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})


BlogRoute.route('/').post(function (req, res) {
    const newBlog = new Blog({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        like: req.body.like,
        comments: req.body.comments,
        date: req.body.date,
        hidden: req.body.hidden

    })
    newBlog.save()
        .then(data => {
            res.status(200).json({
                message: 'Tạo bài viết thành công',
                data: data
            })
        })
        .catch(err => {
            res.send(err)
        })
})

BlogRoute.route('/:blogID').post(function (req, res) {
    Blog.findById({ _id: req.params.blogID })
        .exec()
        .then(data => {
            if (data) {
                res.status(200).json({
                    data: data
                })
            }
            else {
                res.status(404).json({
                    message: 'Not found any Blog with this ID'
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
})


BlogRoute.route('/:blogID').delete(function (req, res) {
    var id = req.params.blogID
    Blog.remove({ _id: id })
        .then(data => {
            res.json({
                message: 'Delete successfully!'
            })
        })
        .catch(err => {
            res.send(err)
        })
})


module.exports = BlogRoute