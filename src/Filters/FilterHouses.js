import React from 'react';

class FilterHouses extends React.Component {
  render() {
    return(
      <form className="search-houses">
        <label htmlFor="gryffindor">Gryffindor</label>
        <input 
          type="checkbox" 
          name="filterHouses" 
          value="gryffindor" 
          onChange={this.props.handleFilterHouses}
          checked={this.props.filterHouses.includes('gryffindor')}
        />
        <label htmlFor="Slytherin">Slytherin</label>
        <input 
          type="checkbox" 
          name="filterHouses" 
          value="slytherin"
          onChange={this.props.handleFilterHouses}
          checked={this.props.filterHouses.includes('slytherin')}
        />
        <label htmlFor="hufflepuff">Hufflepuff</label>
        <input 
          type="checkbox" 
          name="filterHouses" 
          value="hufflepuff"
          onChange={this.props.handleFilterHouses}
          checked={this.props.filterHouses.includes('hufflepuff')}
        />
        <label htmlFor="ravenclaw">Ravenclaw</label>
        <input 
          type="checkbox" 
          name="filterHouses" 
          value="ravenclaw"
          onChange={this.props.handleFilterHouses}
          checked={this.props.filterHouses.includes('ravenclaw')}
        />
      </form>
    );
  }
}
export default FilterHouses;