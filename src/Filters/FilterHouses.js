import React from 'react';
import PropTypes from 'prop-types';

class FilterHouses extends React.Component {
  render() {
    return(
      <div className="house-select">
      <label>Selecciona una casa</label>
      <select onChange={this.props.handleFilterHouses}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
      </div>
    );
  }
}

FilterHouses.propTypes = {
  handleFilterHouses: PropTypes.func,
}

export default FilterHouses;