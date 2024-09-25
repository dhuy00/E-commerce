const {model, Schema} = require('mongoose')

const categorySchema = new Schema({
  categoryName: {
    type: String,
    require: true
  },
  groupName: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  }
})

module.exports = model("category", categorySchema)