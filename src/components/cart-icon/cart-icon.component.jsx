import React from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import toggleCartHidden from '../../redux/cart/cart.actions';
import "./cart-icon.styles.scss";
import { connect } from "react-redux"
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapStateToProps = (state) => ({
    // selector
    /* itemCount being primitive redux shallow
      checks btw state changes in mapState where
      redux check if value is same as before and 
      saves rerender */
    itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
