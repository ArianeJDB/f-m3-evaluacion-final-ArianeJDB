import React from 'react';
import FilterName from '../Filters/FilterName';
import CharacterList from './CharacterList'
import FilterHouses from '../Filters/FilterHouses';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
        <h1 className='title'>Mis magos favoritos</h1>
        <FilterName 
          handleFilterName={this.props.handleFilterName} 
          
        />
        <FilterHouses 
         handleFilterHouses={this.props.handleFilterHouses}
        />
        
        </header>
        <CharacterList 
          characters={this.props.characters} 
          filterName={this.props.filterName}
          filterHouses={this.props.filterHouses}
        />
      </React.Fragment>
    );
  }
}
Home.propTypes = {
  handleFilterName: PropTypes.func,
  handleFilterHouses: PropTypes.func,
  characters: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string,
  filterHouses: PropTypes.string,

}
export default Home;