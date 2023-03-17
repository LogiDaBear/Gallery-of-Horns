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
      favorites: this.state.favorites + 1
    })
  }


  render() {

    return (
      <article>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
             {this.state.favorites}
            </Card.Text>  
            <img onClick={this.props.updateSbeast} src={this.props.image_url} alt={this.props.keyword} />
            <Button onClick={this.handleClicks} variant="info">💔 Favorite</Button>
          </Card.Body>
        </Card>
      </article>
    )
  }
}


export default HornedBeast;