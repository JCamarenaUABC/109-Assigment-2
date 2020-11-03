// action: an arrow fn that return an object

//object contains a type (desc) of action, and payload (data)

export const incrementCartCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

/*
create Cart component
add route
display h1
*/
