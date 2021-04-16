import React, { Component } from "react";
import UpdatePost from "./UpdatePost";

var spacing = {
    position: "fixed",
    top: "0",
  }

class Modal2 extends Component {
  render() {
    return (
        <div style={spacing} style={{ display: this.props.show ? 'flex' : 'none' }} className="Modal">
            <div  className="ModalContent">
                <h1>{this.props.item._id}{this.props.item.type_id}</h1>
                {/* <h1>UPDATE</h1> */}
                <UpdatePost item={this.props.item}/>
                <button onClick={() => this.props.callback()}>CLOSE</button>
            </div>
        </div>
    );
  }
}
export default Modal2;