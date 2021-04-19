//Importing Constant
import { ADD_TO_CART, GET_ALL_NUMBERS_IN_CART } from "../constant";

//State stuff
const initialState = {
  basketNumber: 0,
  cartCost: 0,
  products: {
    WisteriaMollyCat: {
      name: "Wisteria Molly Cat",
      price: 15.00 ,
      place: "Wisteria",
      number: 0,
      inCart: false,
    },
    AmericaSmudgeCat: {
      name: "America Smudge Cat",
      price: 89.00,
      place: "America",
      number: 0,
      inCart: true,
    },
    OscarIndonesianCat: {
      name: "Oscar Indonesian Cat",
      price: 19.00,
      place: "Indonesian",
      number: 0,
      inCart: true,
    },
  },
};

// Use the initialState as a default value
export const AddToCartReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  // const { type, payload } = action;
  switch (action.type) {
    // Do something here based on the different types of actions
    case ADD_TO_CART:
      let addQuantity = { ...state.products[action.type] };
      addQuantity.number += 1;
      addQuantity.inCart = true;
      // console.log("addQuantity", addQuantity);
      // console.log('price', state.products.WisteriaMollyCat.price);
      return {
        // that has all the existing state data
        ...state,
        basketNumber: state.basketNumber + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.type]: addQuantity,
        },

        // ...payload,
      };

    case GET_ALL_NUMBERS_IN_CART:
      return {
        ...state,
      };

    default:
      //If this reducer doesn't recognize the action type, or doesn't
      return state;
  }
};
