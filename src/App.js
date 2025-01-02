import React from 'react'
import './App.css';
import AllRoutes from './AllRoutes';
import ToastMessage from './widgets/ToastMessage';



function App() {
  return (
    <div className="App">
      <h1 style={{color: 'blue', marginTop: 20, marginBottom: 20}}>ReactJS CRUD Using Vanilla-REDUX & JSON Server</h1>
      <ToastMessage />
      <AllRoutes />

    </div>
  );
}

export default App;
