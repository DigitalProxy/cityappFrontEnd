import React, { Component } from "react";
import UpdatePost from "./UpdatePost";

class Modal2 extends Component {
  render() {
    return (
        <div style={{ display: this.props.show ? 'flex' : 'none' }} className="Modal">
            <div  className="ModalContent">
                <h1>{this.props.item._id}{this.props.item.type_id}</h1>
                <UpdatePost item={this.props.item}/>
                <button onClick={() => this.props.callback()}>CLOSE</button>
            </div>
        </div>
    );
  }
}
export default Modal2;