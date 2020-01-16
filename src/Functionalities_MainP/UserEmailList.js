import React from "react";
import ListEmail from "./ListEmail";

//Triversing each email
const UserEmailList = props =>{
    const items = props.userEmails.map(function(item,index){
        //to specifically remove an element// 
    return<ListEmail delete={(e)=>props.delete(item.Email)} name={item.Email} key={index} handleClickEvent={props.handleClickEvent}/>
    })
    return(
    <ul>
        {items}

    </ul>
    )
}
export default UserEmailList;