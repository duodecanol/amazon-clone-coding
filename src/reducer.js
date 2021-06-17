export const initialState = {
  basket: [],
  user: null
};

const reducer = (state, action) => {

  console.log(action)

  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id); // find index matching button actionID with productID
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); // newBasket[index] 부터 1개의 item을 delete
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in basket!!`
        )
      };
      return {
        ...state,
        basket: newBasket
        // ...state,
        // basket: state.basket.filter(item => item.id !== action.id) // id 일치하는 품목 전부삭제
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;