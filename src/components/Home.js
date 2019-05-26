import React from 'react';
import FilterName from '../Filters/FilterName';
import CharacterList from './CharacterList'
import FilterHouses from '../Filters/FilterHouses';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
        <h1 className='title'>Mis magos favoritos</h1>
        <FilterName 
          characters={this.props.characters} 
          handleFilterName={this.props.handleFilterName} 
          filterName={this.props.filterName}
        />
        <FilterHouses 
         handleFilterHouses={this.props.handleFilterHouses}
         filterHouses={this.props.filterHouses}
        //handle={this.props.handle}
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

export default Home;