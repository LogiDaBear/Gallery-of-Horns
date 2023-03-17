// Rebuild as a class component

// 1st imports
import React from 'react';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import Modal from 'react-bootstrap/Modal';
import data from './data/data.json';


// 2nd create the class--will always have a render method

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
  }

  handleSelect = (event) => {
    let selected = event.target.value;

    if (selected === "1") {
      let newData = data.filter(num => num.horns === 1)
      this.setState({
        data: newData
      })
    } else if (selected === "2") {
      let newData = data.filter(num => num.horns === 2)
      this.setState({
        data: newData
      })
    } else if (selected === "3") {
      let newData = data.filter(num => num.horns === 3)
      this.setState({
        data: newData
      })
    } else if (selected === "100") {
      let newData = data.filter(num => num.horns === 100)
      this.setState({
        data: newData
      })
    } else if (selected === "all") {
      let newData = data.filter(num => num.horns === 1 || 2 || 3 || 100)
      this.setState({
        data: newData
      })
    }
  }
  render() {
    return (
      <>
        <Header />
        <Form>
          {/* <Form.Group> */}
          <Form.Select onChange={this.handleSelect} name="selected" id="select">
            <option>Horns Filter</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One-hundred</option>
            <option value="all">All</option>
          </Form.Select>
          {/* </Form.Group> */}

        </Form>
        <Main data={this.state.data}/>
        <Footer />
      </>
    )
  }
}


// 3rd export the class
export default App;