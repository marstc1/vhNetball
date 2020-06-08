import React, { useState } from "react";

const Modal = () => {
  const modalId = "CovidModal";
  const [openModalId, setOpenModalId] = useState(modalId);

  const handleClose = () => {
    setOpenModalId("");
  };

  const customModalStyle = {
    backgroundColor: "rgba(0,0,0,0.6)",
  };

  const isOpen = openModalId === modalId;

  return (
    isOpen && (
      <div className='modal' style={customModalStyle}>
        <div className='modal-content'>
          <div className='modal-header'>
            <span className='title'>Sad Times ...</span>
            <span className='close-btn' onClick={handleClose}>
              x
            </span>
          </div>
          <div className='modal-body'>
            <p>
              With a heavy heart we have made the tough decision to cancel the
              tournament this year. With so much uncertainty around when it will
              be safe to organise a large event, the sensible decision is to
              postpone to 2021 when we will be back even stronger than before.
            </p>
            <p>
              If you do still want to donate to Nelsons Journey then you can
              still do this via our{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://link.justgiving.com/v1/fundraisingpage/donate/pageId/10843969?amount=15.00&currency=GBP&reference=EF30&exitUrl=https%3A%2F%2Fvhnetball.netlify.com%2F%3FjgDonationId%3DJUSTGIVING-DONATION-ID&message=Tounament%20entry%20fee'>
                Just Giving
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export { Modal };
