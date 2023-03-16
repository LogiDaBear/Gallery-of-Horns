import React from "react";
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      showInfo: false

    }
  }

  //Method to increment the number of favorites

  handleClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  //Method to update state of showInfo

  wantsInfo = () => {
    this.setState({
      showInfo: true
    })
  }

  gotInfo = () => {
    this.setState({
      showInfo: false
    })
  }

  //Handler for open modal that requires an argument
  handleBeastClick = () => {
    this.props.handleOpenModal(this.props.id);
  }


  render() {

    return (
      <article>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>
             
            </Card.Text>
            <img src={this.props.image_url} alt={this.props.keyword} />
            <Button onClick={this.handleClicks} variant="info">💔 Favorite</Button>
          </Card.Body>
        </Card>
      </article>
    )
  }
}


export default HornedBeast;