import React, { Component, memo, useState, useRef, useEffect } from 'react';

import { Modal, Container, Row, Col } from "react-bootstrap";
const DetailModal = ({
    title,
    img,
    onOk,
    onClose,
    ...props
}) => {
     
    return (
        <Modal show onHide={onClose} centered className="detail-modal" backdrop="static">
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={6} md={6} style={{paddingLeft: '0px'}}>
                            <img src={img} className="nft-img" alt="nft"/>
                        </Col>
                        <Col xs={6} md={6} style={{height: 'auto', display: 'flex'}}>
                            <div className="flex flex-column justify-content-center align-items-center">
                                <div className="text-center py-2" style={{fontSize: '1.875rem', lineHeight: '2.25rem'}}>{title}</div>
                                <div className="text-center pt-4 pb-2 h-100" style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>Celebratory Ethereum NFT for the X launch</div>
                                
                                <button type="button" onClick={() => onOk()} className="ok-btn">
                                    Close
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default DetailModal;