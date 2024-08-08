const {model, Schema} = require('mongoose')

const sellerSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  role: {
    type: String,
    default: "seller"
  },
  status: {
    type: String,
    default: "pending"
  },
  payment: {
    type: String,
    default: "inactive"
  },
  method: {
    type: String,
    require: true
  },
  image: {
    type: String,
    default: ''
  },
  shopInfo: {
    type: Object,
    require: {}
  },
}, {timestamps: true})

module.exports = model("sellers", sellerSchema)

