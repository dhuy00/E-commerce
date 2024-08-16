const formidable = require("formidable");
const { responseReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;
const productModel = require("../../models/productModel");

class productControllers {
  add_product = async (req, res) => {
    const form = new formidable.IncomingForm({ multiples: true });
    form.parse(req, async (err, fields, files) => {
      let {
        name,
        price,
        category,
        description,
        stock,
        discount,
        shopName,
        brand,
      } = fields;
      const { images } = files;
      name = name.toString().trim();
      const slug = name.split(" ").join("-");
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true,
      });
      try {
        let allImageUrl = [];
        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.uploader.upload(images[i].filepath, {
            folder: "products",
          });
          allImageUrl.push(result.secure_url);
        }
        const product = await productModel.create({
          sellerId: id,
          name,
          slug,
          shopName,
          category: category.toString().trim(),
          description: description.toString().trim(),
          brand: brand.toString().trim(),
          price: parseInt(price),
          stock: parseInt(stock),
          discount: parseInt(discount),
          images: allImageUrl,
        });
        responseReturn(res, 201, { product, message: "Product added!" });
      } catch (error) {
        responseReturn(res, 500, { error: "Internal Server Error" });
      }
    });
  };
}

module.exports = new productControllers();
