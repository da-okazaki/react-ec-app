import React from 'react';
import Router from './Router';
import { useSelector } from 'react-redux';
import "./assets/reset.css"
import "./assets/style.css"

const App = () => {

  const selector = useSelector((state) => state);
  console.log(selector.users);

  return (
    <main>
      <Router />
    </main>
  );
}

export default App;
