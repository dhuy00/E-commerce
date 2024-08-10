const adminModel = require("../models/adminModel");
const sellerModel = require("../models/sellerModel");
const sellerCustomerModel = require("../models/chat/sellerCustomerModel");
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenCreate");

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Nếu như để email : email thì sao và select mà có dấu + là sao?
      const admin = await adminModel.findOne({ email }).select("+password");
      console.log(admin);
      if (admin) {
        const passwordMatch = await bcrypt.compare(password, admin.password);

        if (passwordMatch) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });

          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "Login Successful!" });
        } else {
          responseReturn(res, 404, { error: "Wrong Password!" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found!" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  seller_register = async (req, res) => {
    const { email, name, password } = req.body;
    console.log(req.body);
    try {
      const getUser = await sellerModel.findOne({ email }).select("+password");
      if (getUser) {
        responseReturn(res, 404, { error: "Email already exists!" });
      } else {
        const seller = await sellerModel.create({
          email,
          name,
          password: await bcrypt.hash(password, 10),
          method: "manually",
          shopInfo: {
            name: "",
            address: "",
            phone: "",
          },
        });
        await sellerCustomerModel.create({
          myId: seller.id,
        });
        const token = await createToken({
          id: seller.id,
          role: seller.role,
        });
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        responseReturn(res, 201, { token, message: "Register Success!" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  seller_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Nếu như để email : email thì sao và select mà có dấu + là sao?
      const seller = await sellerModel.findOne({ email }).select("+password");
      console.log(seller);
      if (seller) {
        const passwordMatch = await bcrypt.compare(password, seller.password);

        if (passwordMatch) {
          const token = await createToken({
            id: seller.id,
            role: seller.role,
          });

          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "Login Successful!" });
        } else {
          responseReturn(res, 404, { error: "Wrong Password!" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found!" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  getUser = async (req, res) => {
    const { id, role } = req;
    try {
      if (role === "admin") {
        const user = adminModel.findById({ id });
        responseReturn(res, 200, { userInfo: user });
      } else {
        const seller = sellerModel.findById({ id });
        responseReturn(res, 200, { userInfo: seller });
      }
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };
}

module.exports = new authControllers();
