import { createSlice, configureStore } from '@reduxjs/toolkit';
import { LocalDataService } from './data/dataService';

const productData = new LocalDataService().fetchData();

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState: {
    products: productData,
  },
  reducers: {},
});

const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState: {
    product: productData.length > 0 ? productData[0] : undefined,
  },
  reducers: {},
});

export const store = configureStore({
  reducer: {
    allProducts: allProductsSlice.reducer,
    currentProduct: currentProductSlice.reducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
