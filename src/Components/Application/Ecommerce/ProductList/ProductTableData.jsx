import { categoriesColumn, productData, reviewColumn, subCategoriesColumn } from '../../../../Data/Ecommerce/ProductList';
import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';
import { categories, subCategory } from '../../../../Route/RouteVariable';
import ResponsiveClass from '../../../Tables/BasicTable/ResponsiveClass';

const ProductTableData = ({ currentUrl }) => {
  const productColumns = ((currentUrl === subCategory) ? subCategoriesColumn : (currentUrl === categories) ? categoriesColumn : reviewColumn)
  return (
    <Fragment>
      <ResponsiveClass />
    </Fragment>
  );
};
export default ProductTableData;
