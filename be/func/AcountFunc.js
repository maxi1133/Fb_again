const AccountRoute = require('express').Router() 
const Account = require('../Models/Account')


const Moment = require('moment')


AccountRoute.route('/SignIn').post((req,res) => {
    try {
        
        Account.find({taikhoan:req.body.taikhoan})
        .then(value => {
            if(value.length == 0) 
            {
                res.send({
                    stt : false,
                    msg : 'Sai thông tin tài khoản !'
                })
            }
            else
            {
                if(value[0].matkhau == String(req.body.matkhau))
                {
                    value[0].lastsignin = Date.now()
                    value[0].totalsignin = Number(value[0].totalsignin) + 1
                    value[0].save().then(e => {
                        res.send({
                            stt : true,
                            data : e
                        })
                    })
                }
                else 
                {
                    res.send({
                        stt : false,
                        msg : 'Sai thông tin tài khoản !'
                    })
                }
            }
        })

    } 
    catch (error)
    {
        
    }

})

AccountRoute.route('/SignUp').post((req,res)=> {
    Account.find({'taikhoan' : req.body.taikhoan}).then(value=>{
        if(value.length != 0) 
        {
            res.send({
                Status : false,
                ErrMsg : 'Tai khoan has been Signed!'
            })
        }
        else 
        {
            try 
            {

                var acc = new Account({
                    taikhoan : req.body.taikhoan,
                    matkhau : req.body.matkhau,
                    ho : req.body.ho,
                    ten : req.body.ten,
                    ngaysinh : req.body.ngaysinh,

                    friendlist:[],
                    blogslist:[],

                    createdate : Date.now(),
                    totalsignin : 0,
                    online : false,
                })
    
                acc.save().then(value => {
                    res.send({
                        stt : true,
                        msg : 'Đăng ký thành công !',
                        data : value
                    })
                },err => {
                    res.send(err)
                })

            }
            catch (error) 
            {
                
            }
        
        }
    })
    .catch(e => {
        res.send({errmsg : "something wrong !!"})
    })
})

AccountRoute.route('/ChangeInfo').post((req,res) => {
    try 
    {
        
        

    } 
    catch (error) 
    {
        
    }
})

module.exports = AccountRoute