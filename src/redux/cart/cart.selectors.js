import { createSelector } from 'reselect';

// input selector -> state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    // initial value of accumulatedQuantity is 0 which adds in quatity each time
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity * cartItem.quantity
            , 0)
)

// whatever comp uses the state whenever the state changes thats unrelated it does not need to rerender,