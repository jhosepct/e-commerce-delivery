import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Section(props) {
    function handleClick(item, e){
        props.onHandleSelectCategoria(item, e);
    }
    return (
        <div className={(props.index === props.actualIndex)? 'activeCategoria' : 'categoria'} onClick={(e) => handleClick(props.item, e)}>
            <FontAwesomeIcon icon={faChevronDown} />
            <span> {props.categoria} </span>
        </div>
    )
}

export default Section
