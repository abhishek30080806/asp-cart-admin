// dashbaord
import Default from "../Components/Dashboard/Default";

// //E-commerce
import ProductListContain from "../Components/Application/Ecommerce/ProductList";
import { categories, review, subCategory } from "./RouteVariable";


export const routes = [
  { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout`, Component: <Default /> },
  { path: `${process.env.PUBLIC_URL}/app/action/${categories}/:layout`, Component: <ProductListContain /> },
  { path: `${process.env.PUBLIC_URL}/app/action/${subCategory}/:layout`, Component: <ProductListContain /> },
  { path: `${process.env.PUBLIC_URL}/app/action/${review}/:layout`, Component: <ProductListContain /> },
];
