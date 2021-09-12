import React, { useState } from 'react'
import {faChevronDown, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Search from './Search';
import Cart from './Cart';



class Header extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            open: false
          };
    }

    render(){
        return (
            <div className="header">
                <div className="header-menu">
                    <div className="logo">
                        <img src={this.props.logo} />
                        <span>{this.props.title}</span>
                    </div> 
                    <div className="shopping">                                                  
                            <span onClick={() => this.setState({open: !this.state.open})} >
                                <div className="carrito-button">
                                    <FontAwesomeIcon icon={faShoppingCart} className="shopping-button" />
                                    <div className="cart-number">{this.props.count} </div>
                                </div>
                                <span className="carrito">Mi carrito</span>
                                <FontAwesomeIcon icon={faChevronDown} className="arrowDown"/>                             
                            </span>                    
                    </div>
                    {this.state.open && 
                                <Cart cart={this.props.cart}  clearCart={this.props.clearCart} delFromCart={this.props.delFromCart} addToCart={this.props.addToCart} makeAnOrder={this.props.makeAnOrder} total={this.props.total} count={this.props.count} />
                    }
                </div>
            </div>
            
        )
    }
}

export default Header
