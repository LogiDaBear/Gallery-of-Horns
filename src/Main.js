import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data/data.json';
import './Main.css';
import SelectedBeast from './SelectedBeast';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
      showModal: false,


    }
  }


  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast
    })
  }


  render() {
    console.log(this.state)
    return (
      <main>
        {this.props.data.map((beast, index) => {
          return (
            <HornedBeast
              className='hornedBeast'
              name={beast.name}
              image_url={beast.image_url}
              key={index}
              updateSbeast={() => this.handleOpenModal(beast)}
            />
          )
        })}

        {this.state.selectedBeast &&

          <SelectedBeast
            showModal={this.state.showModal}
            selectedBeast={this.state.selectedBeast} //looking at component
            handleCloseModal={this.handleCloseModal} //reference
          />
        }


      </main>

    )
  }
}

export default Main;