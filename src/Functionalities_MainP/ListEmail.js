import React from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Password from "../Password";
const ListEmail = (props) =>{
    return(
    // <Router>
    // <div>
    <li onClick={(e) => props.handleClickEvent(props.name)}>
        {props.name}

        <span className="material-icons"
            onClick={props.delete}>
            remove_circle
        </span>
        
    </li>
    
    
    // <Route path='/password' component={Password}/> 
    // </div>
    // </Router>
    
    )

}
export default ListEmail;