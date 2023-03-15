import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render(){
    return (
    <>
    <h2>Gallery of Horns</h2>

    <HornedBeast name="Me"></HornedBeast>
    <HornedBeast name="You"></HornedBeast>
    <HornedBeast name="We"></HornedBeast>
    </>
    )
  }
}

export default Main;