import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css';


class Main extends React.Component {
  render(){
    return (
    <main>
    {data.map((beasts,index) => {
      return <HornedBeast name={beasts.name} image_url={beasts.image_url} key={index}/>
    })}

    </main>
    )
  }
}

export default Main;