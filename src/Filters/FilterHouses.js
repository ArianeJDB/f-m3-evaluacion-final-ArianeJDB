import React from 'react';

class FilterHouses extends React.Component {
  render() {
    return(
      <div className="search-houses">
        <label>Gryffindor</label>
        <input 
          type="checkbox" 
          name="Gryffindor" 
          value="Gryffindor" 
          // onChange={this.props.handle}
          // checked={this.props.filterHouses.includes('Gryffindor')}
        />
        <label>Slytherin</label>
        <input 
          type="checkbox" 
          name="Slytherin" 
          value="Slytherin"
          // onChange={this.props.handleFilterHouses}
          // checked={this.props.filterHouses.includes('Slytherin')}
        />
        <label>Hufflepuff</label>
        <input 
          type="checkbox" 
          name="Hufflepuff" 
          value="Hufflepuff"
          // onChange={this.props.handleFilterHouses}
          // checked={this.props.filterHouses.includes('Hufflepuff')}
        />
        <label>Ravenclaw</label>
        <input 
          type="checkbox" 
          name="Ravenclaw" 
          value="Ravenclaw"
          // onChange={this.props.handleFilterHouses}
          // checked={this.props.filterHouses.includes('Ravenclaw')}
        />
      </div>
    );
  }
}
export default FilterHouses;