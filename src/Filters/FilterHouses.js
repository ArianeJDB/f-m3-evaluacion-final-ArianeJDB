import React from 'react';

class FilterHouses extends React.Component {
  render() {
    return(
      <form className="search-houses">
        <label htmlFor="gryffindor">Gryffindor</label>
        <input 
          type="checkbox" 
          name="gryffindor" 
          value="gryffindor" 
          onChange={this.props.handleFilterHouses}
          checked={true}
        />
        <label htmlFor="Slytherin">Slytherin</label>
        <input 
          type="checkbox" 
          name="Slytherin" 
          value="slytherin"
          onChange={this.props.handleFilterHouses}
          checked={true}
        />
        <label htmlFor="hufflepuff">Hufflepuff</label>
        <input 
          type="checkbox" 
          name="hufflepuff" 
          value="hufflepuff"
          onChange={this.props.handleFilterHouses}
          checked={true}
        />
        <label htmlFor="ravenclaw">Ravenclaw</label>
        <input 
          type="checkbox" 
          name="ravenclaw" 
          value="ravenclaw"
          onChange={this.props.handleFilterHouses}
          checked={true}
        />
      </form>
    );
  }
}
export default FilterHouses;