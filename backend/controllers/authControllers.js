const adminModel = require('../models/adminModel');
const sellerModel = require('../models/sellerModel')
const { responseReturn } = require('../utils/response');
const bcrypt = require('bcrypt')
const {createToken} = require('../utils/tokenCreate')

class authControllers {
  admin_login = async(req, res) => {
    const {email, password} = req.body;
    try {
      const admin = await adminModel.findOne({email}).select('+password');
      console.log(admin);
      if(admin) {
        const passwordMatch = await bcrypt.compare(password, admin.password)
        
        if(passwordMatch) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          })

          res.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7*24*60*60*1000),
          })
          responseReturn(res, 200, {token, message: "Login Successful!"});
        }
        else {
          responseReturn(res, 404, {error: "Wrong Password!"});
        }
      }
      else {
        responseReturn(res, 404, {error: "Email not found!"})
      }
    } catch (error) {
      responseReturn(res, 500, {error: error.message})
    }
  }
  //End 


  seller_register = async(req, res) => {
    const {email, username, password} = req.body;
    try {
      const getUserByEmail = await sellerModel.findOne({email})
      const getUserByUsername = await sellerModel.findOne({username})
      if(getUserByEmail) {
        responseReturn(res, 404, {error: 'Email Already Exist'})
      }
      if(getUserByUsername) {
        responseReturn(res, 404, {error: 'Username Already Exist'})
      }
      else {
        const seller = await sellerModel.create({
          username, 
          email,
          password: await bcrypt.hash(password, 10),
          method: 'Manually',
          shopeInfo: {}
        })

        const token = await createToken({id: seller.id, role: seller.role})
        res.cookie('accessToken', token, {
          expires: new Date(Date.now() + 7*24*60*60*1000)
        })
        
        responseReturn(res, 201, {token, message: "Register Successfully"})
        console.log(seller)
      }
    } catch (error) {
      responseReturn(res, 500, {error: 'Server Internal Error'})
    }
  }
  //End 

  seller_login = async(req, res) => {
    const {username, password} = req.body;
    try {
      const seller = await sellerModel.findOne({username}).select('+password');
      if(seller) {
        const passwordMatch = await bcrypt.compare(password, seller.password)
        if(passwordMatch) {
          const token = await createToken({
            id: seller.id,
            role: seller.role,
          })

          res.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7*24*60*60*1000),
          })
          responseReturn(res, 200, {token, message: "Login Successful!"});
        }
        else {
          responseReturn(res, 404, {error: "Wrong Password!"});
        }
      }
      else {
        responseReturn(res, 404, {error: "Username not found!"})
      }
    } catch (error) {
      responseReturn(res, 500, {error: error.message})
    }
  }
  //End 

  getUser = async(req, res) => {
    const {id, role} = req;
    try {
      if (role === "admin") {
        const user = adminModel.findById({id});
        responseReturn(res, 200, {userInfo: user})
      }
      else {
        console.log("Seller Info")
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new authControllers()