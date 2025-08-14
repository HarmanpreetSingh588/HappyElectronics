// "use server";

// import { connectDB } from "@/lib/db";
// import Category from "@/models/Category";

// export default async function fetchCategories() {
//   await connectDB();
//   const categories = await Category.find().sort({ name: 1 });
//   return categories.map((cat) => ({
//     id: cat._id.toString(),
//     name: cat.name,
//   }));
// }

"use server";

import { connectDB } from "@/lib/db";
import Category from "@/models/Category";

export default async function fetchCategories() {
  try {
    await connectDB(); // Connect to MongoDB only when function runs
    const categories = await Category.find().sort({ name: 1 });

    return categories.map((cat) => ({
      id: cat._id.toString(),
      name: cat.name,
    }));
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return []; // Return empty array if DB fails
  }
}

