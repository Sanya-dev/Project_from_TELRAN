import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const myConsole = (data) => {
//         const stateStringify = JSON.stringify(data);
//         console.log(JSON.parse(stateStringify));
//     };

export const LINK = "https://dry-island-42334-f1f2e58883c2.herokuapp.com";

const URL = `${LINK}/products/all`;

// export const getAllProducts = async(dispatch) => {
//     const response = await fetch(URL);
//     const data = await response.json();
//     dispatch(getAllProductsAction(data));
// }

const initialState = {
  list: [],
  status: "loading",
};

export const fetchProducts = createAsyncThunk(
  "/products/fetchProducts",
  async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
);

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sortAction(state, { payload }) {
      if (payload === "default") {
        state.list.sort((a, b) => a.id - b.id);
      } else if (payload === "price") {
        state.list.sort((a, b) => a.price - b.price);
      } else if (payload === "title") {
        state.list.sort((a, b) => a.title.localeCompare(b.title));
      }
    },
    discountedItems(state, { payload }) {
      // console.log(payload);
      state.list.forEach((item) => {
        item.show.discont = !payload || item.discount_price !== null;
      });
      // myConsole(state)
    },
    priceAction(state, { payload }) {
      //  console.log(payload);
      const { min, max } = payload;
      state.list.forEach((item) => {
        item.show.price = item.price >= min && item.price <= max;
      });
    },
    resetFilter(state) {
      state.list.forEach((product) => {
        Object.keys(product.show).forEach((key) => {
          product.show[key] = true;
        });
      });

      // state.list.show = show
    },

    //             ### || - Или
    //  - если значение слева от оператора - true, то выведет слева (всё выражение будет true)
    //  - если значение слева от оператора false, то выведет справа (true либо false в зависимости от того что справа)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "ready";
        state.list = payload.map((item) => ({
          ...item,
          show: { price: true, discont: true },
        }));
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { sortAction, discountedItems, priceAction, resetFilter } =
  productsSlice.actions;
export default productsSlice.reducer;
