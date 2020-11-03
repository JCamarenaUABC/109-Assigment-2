//reducer

const cartProductsReducer = (state = [], action) => {
  //if(){}
  if (action.type === "ADD_PRODUCT") {
    var copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === "REMOVE_PRODUCT") {
    return state.filter((pc) => pc.product.id !== action.payload.id);
  }
  return state;
};

export default cartProductsReducer;
