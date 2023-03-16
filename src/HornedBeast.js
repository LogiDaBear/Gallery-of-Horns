import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,

    }
  }

  //Method to increment the number of rocks

  handleFavorites = () => {
    this.setState({
      waves: this.state.favorites + 1
    })
  }


  render(){
    return (
      <article>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{this.state.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <img src={this.props.image_url} alt={this.props.name} />
        <Button variant="info">💔 Favorite</Button>
        <p onClick={this.handleFavorites}></p>
      </Card.Body>
    </Card>
     
        <Button>Cool!</Button>
      </article>
    )
  }
}


export default HornedBeast;