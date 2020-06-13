import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [modalIsShowing, setModalIsShowing] = useState(false);

  const handleOpenModal = () => {
    setModalIsShowing(true);
  };

  const handleCloseModal = () => {
    setModalIsShowing(false);
  };

  return (
    <div>
      {modalIsShowing ? (
        <div onClick={handleCloseModal} className="back-drop"></div>
      ) : null}

      <button className="open-modal-btn" onClick={handleOpenModal}>
        This should be the quote block itself!
      </button>

      <Modal
        className="modal"
        showModal={modalIsShowing}
        handleClose={handleCloseModal}
      >
        This is where the modal would pop up with more details regarding the
        author and quote itself.
      </Modal>
    </div>
  );
}

export default App;
