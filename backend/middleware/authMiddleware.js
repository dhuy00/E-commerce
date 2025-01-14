const jwt = require('jsonwebtoken')
const { responseReturn } = require('../utils/response')

module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies

  if (!accessToken) {
    console.log("error");
    responseReturn(res, 409, { error: "Please Login Firs. AccessToken Not Found" });
  }
  else {
    try {
      const decodeToken = jwt.verify(accessToken, process.env.SECRET);
      req.role = decodeToken.role;
      req.id = decodeToken.id;
      next();
    } catch (error) {
      responseReturn(res, 409, { error: "Invalid Or Expired Token" });
    }
  }
}