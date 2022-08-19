
import React from 'react';
import './App.css';
import Header from './components/header/header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends React.Component{
  render() {
    return(
    <div>
      <Header/>
      <ItemListContainer
      name = "Nombre: Ivan"
      surname = "Apellido: da Costa"
      edad = "Edad: 20"
      />
    </div>
      );
  }
}

export default App;
