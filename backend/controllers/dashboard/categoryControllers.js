const formidable = require("formidable");
const { responseReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;
const categoryModel = require("../../models/categoryModel");

class categoryControllers {
  add_category = async (req, res) => {
    const form = new formidable.IncomingForm(); // formidable() không chạy được
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return responseReturn(res, 404, { error: "Something went wrong" });
      } else {
        let { name } = fields;
        let { image } = files;
        // Cần phải test lại tại name và image nó trả về dạng array chứ không phải
        // object hay string
        // khi sử dụng thunder client để test (chắc là do formidable)
        // console.log(fields);
        // console.log(name.toString());
        image = image[0]; // chuyển đổi từ array sang object
        name = name.toString().trim();
        const slug = name.split(" ").join("-");
        cloudinary.config({
          cloud_name: process.env.CLOUD_NAME,
          api_key: process.env.API_KEY,
          api_secret: process.env.API_SECRET,
          secure: true,
        });
        try {
          const result = await cloudinary.uploader.upload(image.filepath, {
            folder: "categories",
          });
          if (result) {
            const category = await categoryModel.create({
              name,
              slug,
              image: result.secure_url,
            });
            responseReturn(res, 201, {
              category,
              message: "Category added!",
            });
          } else {
            responseReturn(res, 404, { error: "Something went wrong" });
          }
        } catch (error) {
          console.log(error);
          responseReturn(res, 500, { error: "Internal Server Error" });
        }
      }
    });
  };

  get_category = async (req, res) => {
    console.log(req.body);
  };
}

module.exports = new categoryControllers();
