import React, { useState } from "react";

const Modal = () => {
  const modalId = "CovidModal";
  const [openModalId, setOpenModalId] = useState(modalId);

  const handleClose = () => {
    setOpenModalId("");
  };

  const isOpen = openModalId === modalId;

  return (
    isOpen && (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <span className='title'>Info</span>
            <span className='close-btn' onClick={handleClose}>
              x
            </span>
          </div>
          <div className='modal-body'>
            {" "}
            <p>
              Thanks for checking in on our website. We are monitoring the
              COVID-19 situation very closely, taking advice and determining how
              it may impact events later in the year.
            </p>
            <p>
              At this time, there are no changes to The Victoria Hawkins Netball
              Tournament in June 2020.
            </p>
            <p>
              As the situation evolves, we will update this page and communicate
              any modified plans.
            </p>
            <p>Kind regards, Lisa Price</p>
          </div>
        </div>
      </div>
    )
  );
};

export { Modal };
