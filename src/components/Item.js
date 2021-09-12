import React from 'react';
import './Item.css';

function Item(props) {

    function handleClick(id, categoria) {
        props.onHandleSelectNote(id, categoria);
    }
    return (

        <div className="item">
                <div className="image"><img src={'image/' + props.image} width="100%" /></div>
                <div className="title">{props.title}</div>
                <div className="description">
                    <p> {props.description.substring(0,50)} </p>
                    {/*
                        <p>
                        {
                            this.state.starts.map(x =>
                                <FontAwesomeIcon icon={faStar} style={{color:"#27ae60", fontSize:"1.2rem", padding:"0.1rem"}} />
                            )
                        }
                        </p>
                        Calificación: 
                        <select value={this.props.rating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    */}
                   
                </div>
                <div className="actions" >
                    <div> S/{props.price} </div>
                    <button className="buttonAdd" onClick={()=> handleClick(props.id, props.categoria)}  >Add To Cart</button>
                </div>
            </div>
    )
}      


export default Item
