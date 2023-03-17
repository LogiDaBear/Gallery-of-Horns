import React from 'react';
import Modal from 'react-bootstrap/Modal';


// 2ND CREATE THE CLASS - will always have a render method

class SelectedBeast extends React.Component {


  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}> 
          <Modal.Header closeButton>{this.props.selectedBeast.title}</Modal.Header>
          <Modal.Body closeButton>
            
            <img id='modalimg' src={this.props.selectedBeast.image_url}
            />
          
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

// 3RD EXPORT THE CLASS FOR OTHER FILES TO IMPORT
export default SelectedBeast;