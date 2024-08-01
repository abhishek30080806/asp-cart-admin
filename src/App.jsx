import React from 'react';
import Routers from './Route';
import AnimationThemeProvider from './_helper/AnimationTheme/AnimationThemeProvider';
import CustomizerProvider from './_helper/Customizer/CustomizerProvider';
import FilterProvider from './_helper/Ecommerce/Filter/FilterProvider';
import ProductProvider from './_helper/Ecommerce/Product/ProductProvider';
import CartProvider from './_helper/Ecommerce/Cart/CardProvider';

const App = () => (
  <div className='App'>
    <CustomizerProvider>
      <AnimationThemeProvider>
        <FilterProvider>
          <CartProvider>
            <ProductProvider>
              <Routers />
            </ProductProvider>
          </CartProvider>
        </FilterProvider>
      </AnimationThemeProvider>
    </CustomizerProvider>
  </div>
);

export default App;
