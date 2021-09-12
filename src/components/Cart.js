import React from 'react';
import CartItem from './CartItem';
import formatCurrency from "format-currency"


function Cart(props) {
    function handleClick() {
        props.clearCart();
    }
    function handleSelectAdd(id, categoria) {
        props.addToCart(id, categoria);
    }
    function handleSelectDel(id, value) {
        props.delFromCart(id, value);
    }
    function orderClick() {
        props.makeAnOrder();
    }
    let opts = { format: "%s%v", symbol: "S/" };
    return (
        <div className="cart">
            <p className="cantAdd"><span>Tienes agregados {props.count} productos</span> </p>
            <button className="delete" onClick={()=> handleClick()} >Limpiar pedidos</button>
            <div className="list-cart">
                {
                    props.cart.map((item,index )=> (
                        <CartItem key={index} delFromCart={props.delFromCart} data={item} onHandleSelectAdd={handleSelectAdd} onHandleSelectDel={handleSelectDel} total={props.total} />
                    ))
                }
            </div>
            
            <div className="subTotal"> Subtotal: {formatCurrency(
                props.cart.reduce((amount, item) => (item.price * item.quantity) + amount, 0),
                opts
              )} </div>
            <div className="continue"><button onClick={() => orderClick()} >Continue</button></div>
        </div>
    )
}

export default Cart
