// Rebuild as a class component

// 1st imports
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import data from './data/data.json';


// 2nd create the class--will always have a render method

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}
// 3rd export the class
export default App;