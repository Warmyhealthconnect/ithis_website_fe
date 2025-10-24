import React from 'react'
import './Modalcomponent.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addnewsApi } from '../../../services/allApis';

function Modalcomponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (



        <>
            <button className='enquiry-btn btn' onClick={handleShow}>Fee Enquiry</button>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Fee Enquiry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="name" className='w-100' style={{color:"#4d4d4d"}}>Name
                        <input className='form-control mb-3' name='name' id='name' type="text"/>
                    </label>
                    <label htmlFor="email" className='w-100' style={{color:"#4d4d4d"}}>Email
                        <input className='form-control mb-3' name='email' id='email' type="email"/>
                    </label>
                    <label htmlFor="mobile" className='w-100' style={{color:"#4d4d4d"}}>Mobile
                        <input className='form-control mb-3' name='mobile' id='mobile' type="number"/>
                    </label>
                    <label htmlFor="course" className='w-100' style={{color:"#4d4d4d"}}>Course
                        <input className='form-control mb-3' name='course' id='course' type="text"/>
                    </label>
                    <label htmlFor="message" className='w-100' style={{color:"#4d4d4d"}}>Message
                        <textarea name="message" id="message" className='form-control mb-3'style={{height:"140px"}}></textarea>
                    </label>

                </Modal.Body>
                <Modal.Footer>
                    <Button className='w-100' style={{backgroundColor:"var(--component)",borderRadius:"40px"}} variant="secondary" onClick={handleClose}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )

}

export default Modalcomponent