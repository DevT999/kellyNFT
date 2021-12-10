import React, { Component, memo, useState, useRef, useEffect } from 'react';

import { Modal } from "react-bootstrap";
const DetailModal = ({
    title,
    onOk,
    onClose,
    ...props
}) => {
     
    return (
        <Modal show={true} onHide={onClose} centered className="detail-modal" backdrop="static">
            <Modal.Header closeButton className="modal-title">
            </Modal.Header>
            <Modal.Body>
            <div className="section-content">
                <div className="text-3xl justify-center items-center mb-5">
                    <div className="text-center">{title}</div>
                </div>
                {/* <div className="sm-12 w-100 d-flex justify-content-center align-items-center body-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="sm-12 w-100 d-flex justify-content-center align-items-center body-lg mt-2">Turpis at etiam sem purus eget ut risus, viverra erat.</div> */}
                <div className="responsive-row">
                    <div className="responsive-col flex-2 pr-2">
                        
                    </div>
                    <div className="responsive-col flex-2 pl-2">
                        <button onClick={()=>onOk(true)} className="">
                            Yes
                        </button>
                    </div>
                </div>
            </div>
            </Modal.Body>
        </Modal>
    )
}

export default DetailModal;