import React, { Component } from "react";

import Modal from "./components/Modal/Modal";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false,
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop"></div>
        ) : null}

        <button className="open-modal-btn" onClick={this.openModalHandler}>
          This should be the quote block itself!
        </button>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
        >
          This is where the modal would pop up with more details regarding the
          author and quote itself.
        </Modal>
      </div>
    );
  }
}

export default App;
