import React, {Component} from "react";
class Search extends Component{
    render(){
    
    return(
        <div>
            <label>Search your E-mail </label>     
            <input type="text"
            //settig value into the box
            onChange={this.props.onChange}
                value={this.props.value}
            />    
        </div>
        )    
    }
}
export default Search;