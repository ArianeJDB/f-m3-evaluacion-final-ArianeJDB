import React from 'react';

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
export default FilterHouses;