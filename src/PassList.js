import React, { Component } from "react";
//import Password from "./Password";

class UpdatingAccPass extends Component {

  render() {
    return (
      
      <div>
        <li>
          {this.props.website.site}: {this.props.website.pass}
          <button className="update" onClick={() => {this.props.updateAcc(this.props.acc.Email,this.props.website.site, this.props.i)}}>Update </button>
          <input
            type="text"
            placeholder="type a task"
            value={this.props.value[this.props.i]}
            onChange={(e) => this.props.onChangeE(e,this.props.i)}
          />
        </li>
      </div>
    );
  }
}
export default UpdatingAccPass;
