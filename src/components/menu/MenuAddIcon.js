import React, { Component } from 'react'
import addicon from '../../assets/addicon.png'
import Modal1 from '../CreateUpdateDelete/Post/Modal1'

export default class MenuAddIcon extends Component {
    constructor(props) {
    super(props);

    this.state = {
      show: false,
      isShowingUpdateModal1: false,
    };
  }
  refreshPage() {
    window.location.reload(false);
  }

  updateModal1 = (evt) => {
    this.setState({ isShowingUpdateModal1: true })
  }

    render() {
        return (
            <>
            <button onClick={this.updateModal1} className={this.props.classname}>
                <div><img src={addicon} alt=" " className="icon" /></div>
            </button>
            <Modal1 callback={() => this.setState({isShowingUpdateModal1: false})} item={this.props.item} show={this.state.isShowingUpdateModal1} />
            </>
        )
    }
}
