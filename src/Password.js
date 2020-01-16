import React, {Component} from "react";
import PassList from './PassList'

class Password extends Component{
constructor(props){
        super(props);
        this.state={
        newItem: "",
    }
}


      
render(){
    let list = <p>[New Account] add Passwords </p>;

    if (this.props.acc.Website) {
            list = this.props.acc.Website.map((website, index) => {
            return(
            <PassList 
                website={website} 
                onTextBoxChange={this.props.onTextBoxChange}
                updateAcc={this.props.updateAcc} 
                acc={this.props.acc} 
                value={this.props.value}
                //////////////// 
                onChangeE={this.props.onChangeE}
                key={index}
                i={index}
            />
        )
    })
}

    return(
    <div>
           <h1>{this.props.acc.Email}</h1>
            {list}
    </div>
    )
}
}
export default Password;
