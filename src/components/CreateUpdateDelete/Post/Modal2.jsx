import React, { Component } from "react";
import UpdatePost from "./UpdatePost";

var spacing = {
  position: "absolute",
  right: "43%",
  top: "80px",
}

class Modal2 extends Component {
  render() {
    return (
        <div style={{ display: this.props.show ? 'flex' : 'none' }} className="Modal">
            <div  className="ModalContent">
                {/* <h1>{this.props.item._id}{this.props.item.type_id}</h1> */}
                <button style={spacing} onClick={() => this.props.callback()}>CLOSE</button>
                <UpdatePost item={this.props.item}/>
            </div>
        </div>
    );
  }
}
export default Modal2;