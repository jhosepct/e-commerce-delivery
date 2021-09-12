import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = (props) => {

    function handleClickAdd(id, categoria) {
        props.onHandleSelectAdd(id, categoria);
    }

    function handleClickDel(id, value) {
        props.onHandleSelectDel(id, value);
    }
    


    return (
        <div className="cart-item">
            <div className="img">
               <img src={'image/' + props.data.image}></img> 
            </div>
            <div className="mini-cart">
                <p>Nacional</p>
                <div className="title">{props.data.title}</div>
                <div className="price"> S/{props.data.price * props.data.quantity} </div>
                <div className="quantity">
                    <button className="button"  onClick={()=> handleClickDel(props.data.id, false)}><span>-</span></button>
                    <span>{props.data.quantity}</span>
                    <button className="button" onClick={()=> handleClickAdd(props.data.id, props.data.categoria)} ><span>+</span></button>
                </div>
            </div>
            <div className="delete-product">
                <div className="selectDel" onClick={()=> handleClickDel(props.data.id, true)} >
                    <FontAwesomeIcon icon={faTimesCircle} className="icon-button" />
                </div>
            </div>
        </div>
        
    )
}

export default CartItem
