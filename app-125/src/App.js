import React from 'react';
import List from './components/list/List';
import Header from './components/Header';


function App() {

  return (
    <div className="App">
      <Header/>
      <List type={"이력서"}/>
    </div>
  );
}

export default App;
