import React from 'react';
import {fetchCharacters} from './services/fetchCharacters';
import './App.scss';
import MagicList from './components/MagicList';


class App extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     characters: [],
   }
 }
componentDidMount(){
  this.getCharacters();
}

 getCharacters(){
   fetchCharacters()
    .then(data => {
      const newData = data.map((item, index) => {
        return {...item, id:index};
      });

      this.setState({
        characters: newData
      })
    });
 }
 
  render() {
   return (
     <React.Fragment>
    <h1>Mis magos favoritos</h1>
    <input type="text" />
    <MagicList 
      characters={this.state.characters}
    />
    </React.Fragment>
   );
 }
}

export default App;
