import React from 'react';
import PropTypes from 'prop-types';

class FilterName extends React.Component {
  render() {
    return(
      <input 
        type="text" 
        onChange={this.props.handleFilterName} 
        placeholder="¿Quién es tu mago favorito?"
      />
    
      );
  }
}

FilterName.propTypes = {
  handleFilterHouses: PropTypes.func,
}

export default FilterName;