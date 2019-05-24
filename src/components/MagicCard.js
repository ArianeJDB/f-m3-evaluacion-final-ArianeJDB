import React from 'react';

class MagicCard extends React.Component {
  render() {
    return(
      <div className="magic-card">
        <img src={this.props.image} alt={this.props.name}/>
        <h2>{this.props.name}</h2>
        <p>House: {this.props.house}</p>
      </div>
    );
  }
}
export default MagicCard;