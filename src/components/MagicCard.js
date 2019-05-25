import React from 'react';
import {Link} from 'react-router-dom';
class MagicCard extends React.Component {
  render() {
    return(
      <div className="magic-card">
        <img src={this.props.image} alt={this.props.name} className='img' />
        <h2>{this.props.name}</h2>
        <p>House: {this.props.house}</p>
        <Link to={`/detail/${this.props.id}`}>Ver más</Link>
      </div>
    );
  }
}
export default MagicCard;