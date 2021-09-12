import React from 'react'
import List from './List'

function Preview(props) {
    

    return (
        <div>
            <List categoriaName={props.categoriaName} items={props.items} addToCart={props.addToCart}/>
        </div>
    )
}

export default Preview
