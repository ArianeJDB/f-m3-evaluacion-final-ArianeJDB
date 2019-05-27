import React from 'react';
import './App.scss';
import {fetchCharacters} from './services/fetchCharacters';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail'


class App extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     characters: [],
     filterName: '',
     filterHouses: '' 
   }
   this.handleFilterName = this.handleFilterName.bind(this);
   this.handleFilterHouses = this.handleFilterHouses.bind(this);
   this.resetFilterName = this.resetFilterName.bind(this);
 }
 
componentDidMount(){
  const LS = JSON.parse(localStorage.getItem('characters'));
    if(!LS || !LS.length) {
      this.getCharacters();
    } else {
      this.setState({'characters': LS});
    }
}

resetFilterName(){
  this.setState({
    filterName: ''
  });
}

 getCharacters(){
   fetchCharacters()
    .then(data => {
      const newData = data.map((item, index) => {
        return {...item, id:index};
      });
      this.setState({characters: newData}, () => {
        localStorage.setItem('characters', JSON.stringify(this.state.characters));
      });

      this.setState({
        characters: newData
      })
    });
 }
 
 handleFilterName(e) {
   const value = e.currentTarget.value;
   this.setState({
     filterName: value
   })
 }

 handleFilterHouses(e) {
   const value = e.currentTarget.value;
   console.log(value);
   this.setState({
    filterHouses: value
   })
 }
  render() {
   return (
     <React.Fragment>
     <Switch>
       <Route exact path="/" render={() => 
        <Home
          characters={this.state.characters}
          filterName={this.state.filterName}
          handleFilterName={this.handleFilterName}
          filterHouses={this.state.filterHouses}
          handleFilterHouses={this.handleFilterHouses}
         
       />
       }
       />
       <Route path="/detail/:magic" render={(takeParams) => 
        <CharacterDetail 
          takeParams={takeParams}
          characters={this.state.characters}
          resetFilterName={this.resetFilterName}
        />
       }
       />
     </Switch>
     </React.Fragment>
   );
 }
}


export default App;
