import React from 'react';
import { Modal, Button } from 'react-bootstrap';


function editModal(props) {
   
    
   
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Position 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                modal 
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default editModal;