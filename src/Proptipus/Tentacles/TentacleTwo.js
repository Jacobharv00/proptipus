import React from "react";
import tempImg from "../../images/SadFish.jpeg"

class TentacleTwo extends React.Component {

  // card data looks like this
      // name: "Red Eye Tetra",
      // image: "https://aquadiction.world/img/profile/red-eye-tetra1.jpg",
      // type: "[DIVINE-BEAST]",
      // attack: 9001,
      // description:
      //   "Robust and lively, Tetra make a great addition to any fish army."

  card = this.props.fishGiOhCard

  render() {
    return (
      <div className="tentacle-two">
      <span className="fish-name">
        {this.props.favoriteFishGiOhCard.name}
      </span>

      <img alt="fish" className="fish-image" 
      src={this.props.favoriteFishGiOhCard.image} />

      <span className="fish-type">
        {this.props.favoriteFishGiOhCard.type}
      </span>

      <span className="fish-description">
        {this.props.favoriteFishGiOhCard.description}
      </span>

      <span className="fish-attack">
        {this.props.favoriteFishGiOhCard.attack}
      </span>

    </div>
    );
  }
}

export default TentacleTwo;
