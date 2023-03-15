import React from "react";


class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <p>Howdy {this.props.name}</p>
      </article>
    )
  }
}

export default HornedBeast;