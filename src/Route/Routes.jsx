// dashbaord
import Default  from "../Components/Dashboard/Default";

// //E-commerce
import Products from "../Components/Application/Ecommerce/Products";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout`, Component: <Default /> },
  { path: `${process.env.PUBLIC_URL}/app/ecommerce/product/:layout`, Component: <Products /> },

];
