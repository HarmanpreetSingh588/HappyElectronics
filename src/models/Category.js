// import mongoose from "mongoose";

// const categorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Category name is required"],
//     trim: true,
//     minlength: [2, "Category name must be at least 2 characters"],
//     maxlength: [50, "Category name must not exceed 50 characters"],
//     unique: true,
//   },
// });

// export default mongoose.models.Category || mongoose.model("Category", categorySchema);


import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    trim: true,
    minlength: [2, "Category name must be at least 2 characters"],
    maxlength: [50, "Category name must not exceed 50 characters"],
    unique: true,
  },
});

// Check if the model already exists in mongoose.models
const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
