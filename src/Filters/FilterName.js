import React from 'react';

class FilterName extends React.Component {
  render() {
    return(
      <input type="text" onChange={this.props.handleFilterName}/>
    );
  }
}
export default FilterName;