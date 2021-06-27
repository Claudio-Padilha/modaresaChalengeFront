import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useClient, useClientActions } from './hooks/client'

import Home from './screens/home/home';

function App() {

  const { getAllClients } = useClientActions()

  const { allClients } = useClient()

  getAllClients()

  return (
    <Home />
  );
}

export default App;
