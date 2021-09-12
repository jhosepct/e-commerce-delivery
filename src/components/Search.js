import React from 'react'

class Search extends React.Component {

    constructor(props){
        super(props);
        
    }

    onChangeEvent = e =>{
        this.props.onsearch(e.target.value);
    }

    render(){
        return (
            <div className="search">
                <input className="" placeholder="Busca un producto " onChange={this.onChangeEvent} />
            </div>
        )
    }
}

export default Search
