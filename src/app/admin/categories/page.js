// import fetchCategories from "@/app/actions/fetchCategories";
// import AdminCategoriesClient from "@/Components/AdminCategoriesClient";

// export default async function AdminCategoriesPage() {
//   const categories = await fetchCategories();
//   return <AdminCategoriesClient initialCategories={categories} />;
// }


import fetchCategories from "@/app/actions/fetchCategories";
import AdminCategoriesClient from "@/Components/AdminCategoriesClient";

// Force this page to run dynamically at request time (not build time)
export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  let categories = [];
  try {
    categories = await fetchCategories();
  } catch (error) {
    console.error("Failed to load categories:", error);
  }

  return <AdminCategoriesClient initialCategories={categories} />;
}
