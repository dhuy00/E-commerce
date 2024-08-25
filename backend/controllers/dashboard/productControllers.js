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

  get_products = async (req, res) => {
    const { page, searchValue, parPage } = req.query;
    const { id } = req;
    const skipPage = parseInt(parPage) * parseInt(page) - 1;
    try {
      if (searchValue) {
        const products = await productModel
          .find({
            $text: { $search: searchValue },
            sellerId: id,
          })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalProduct = await categoryModel
          .find({
            $text: { $search: searchValue },
            sellerId: id,
          })
          .countDocuments();
        responseReturn(res, 200, { products, totalProduct });
      } else {
        const products = await productModel
          .find({ sellerId: id })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalProduct = await productModel
          .find({ sellerId: id })
          .countDocuments();
        responseReturn(res, 200, { products, totalProduct });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  get_product = async (req, res) => {
    const { productId } = req.params;
    try {
      const product = await productModel.findById(productId);
      if (product) {
        responseReturn(res, 200, { product });
      } else {
        responseReturn(res, 404, { error: "Product not found!" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  update_product = async (req, res) => {
    let { name, description, discount, price, brand, stock, productId } =
      req.body;
    name = name.toString().trim();
    const slug = name.split(" ").join("-");
    try {
      const product = await productModel.findByIdAndUpdate(productId, {
        name,
        description,
        discount,
        price,
        brand,
        stock,
        slug,
      });
      if (product) {
        responseReturn(res, 200, { product, message: "Product updated!" });
      } else {
        responseReturn(res, 404, { error: "Product not found!" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  update_image_product = async (req, res) => {
    const form = formidable.IncomingForm({ multiples: true });
    form.parse(req, async (err, fields, files) => {
      const { oldImage, productId } = fields;
      const { newImage } = files;
      if (err) {
        responseReturn(res, 500, { error: "Internal Server Error" });
      } else {
        try {
          cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            secure: true,
          });
          const result = await cloudinary.uploader.upload(newImage.filepath, {
            folder: "products",
          });
          if (result) {
            let { image } = await productModel.findById(productId);
            const index = image.findIndex((img) => img === oldImage);
            image[index] = result.secure_url;
            const product = await productModel.findByIdAndUpdate(productId, {
              image,
            });
            responseReturn(res, 200, { product, message: "Image updated!" });
          } else {
            responseReturn(res, 404, { error: "Something went wrong" });
          }
        } catch (error) {
          responseReturn(res, 500, { error: "Internal Server Error" });
        }
      }
    });
  };
}

module.exports = new productControllers();
