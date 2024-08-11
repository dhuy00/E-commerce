const { model, Schema } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

categorySchema.index({ name: "text" });

module.exports = model("categories", categorySchema);
