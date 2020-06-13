import React from "react";

import "./Modal.css";

const modal = ({ showModal, handleClose, children }) => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: showModal ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: showModal ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h3>This is where we could put a Header</h3>
          <span className="close-modal-btn" onClick={handleClose}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>{children}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={handleClose}>
            CLOSE
          </button>
          <button className="btn-continue">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default modal;
