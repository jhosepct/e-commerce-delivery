import React from 'react';
import Item from './Item';

function List(props) {
    function handleSelectFood(id, categoria) {
        props.addToCart(id, categoria);
    }
    return (
        <div className="section">
            <div className="list" >
                {
                    props.items.map((item, i)=>
                        <Item 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating} 
                            price={item.price}
                            description={item.description}
                            onHandleSelectNote={handleSelectFood} 
                            categoria={item.categoria} />
                    )
                }
            </div>
        </div>
    )
}

export default List
