const categoryModel = require('../models/categoryModel');
const { responseReturn } = require('../utils/response');

class categoryControllers {
  category_add = async(req, res) => {
    const {categoryName, groupName, textColor, bgColor, previewImage} = req.body;
    try {
      const getCategoryByName = await categoryModel.findOne({categoryName});
      if(getCategoryByName) {
        responseReturn(res, 404, {error: "Category Already Exist"});
      } else {
        const category = await categoryModel.create({
          categoryName,
          groupName,
          textColor,
          bgColor,
          previewImage
        })

        responseReturn(res, 201, {message: "Add Category Successfully"});
      }
    } catch (error) {
      
    }
  }
}