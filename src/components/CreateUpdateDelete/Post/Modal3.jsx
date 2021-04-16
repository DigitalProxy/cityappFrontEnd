import React, { Component } from "react";
import DeletePost from "./DeletePost"

class Modal3 extends Component {
  render() {
    return (
        <div style={{ display: this.props.show ? 'flex' : 'none' }} className="Modal">
            <div  className="ModalContent">
                <h1>{this.props.item._id}{this.props.item.type_id}</h1>
                <DeletePost item={this.props.item}/>
                <button onClick={() => this.props.callback()}>CLOSE</button>
            </div>
        </div>
    );
  }
}

export default Modal3;