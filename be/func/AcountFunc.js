const AccountRoute = require('express').Router() 
const Account = require('../Models/Account')


const Moment = require('moment')


AccountRoute.route('/SignIn').post((req,res) => {
    res.send(req.body)
    Account.find({taikhoan:req.body.taikhoan})
    .then(value=>{
        if(value.length == 0) {
            res.send({
                stt : false,
                msg : 'Deo có'
            })
        }
        else {
            if(value[0].matkhau == String(req.body.matkhau))
            {
                res.send({
                    stt : true,
                    data : value[0]
                })
            }
        }
    })

})

AccountRoute.route('/SignUp').post((req,res)=> {
    Account.find({'taikhoan' : req.body.taikhoan}).then(value=>{
        if(value.length != 0) {
            res.send({
                Status : false,
                ErrMsg : 'Tai khoan has been Signed!'
            })
        }
        else {
            try {

                var acc = new Account({
                    taikhoan : req.body.taikhoan,
                    matkhau : req.body.matkhau,
                    ho : req.body.ho,
                    ten : req.body.ten,
                    ngaysinh : req.body.ngaysinh,
                    createdate : Date.now()
                })
    
                acc.save().then(value => {
                    res.send(value)
                },err => {
                    res.send(err)
                })
            } catch (error) {
                
            }
            
        }
    })
})


module.exports = AccountRoute