import React from 'react';
import PropTypes from 'prop-types';

class FilterHouses extends React.Component {
  render() {
    return(
      <div className="house-select">
      <label>Selecciona una casa</label>
      <select onChange={this.props.handleFilterHouses}>
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select>
      </div>
    );
  }
}

FilterHouses.propTypes = {
  handleFilterHouses: PropTypes.func,
}

export default FilterHouses;