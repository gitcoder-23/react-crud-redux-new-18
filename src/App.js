import React from 'react'
import './App.css';
import AllRoutes from './AllRoutes';
import ToastMessage from './widgets/ToastMessage';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <div className='header'>
        <Link to={'/'} className="link-cls">Home</Link>
        <Link to={'/user'} className="link-cls">User</Link>
      </div>
      <h1 style={{color: 'blue', marginTop: 20, marginBottom: 20}}>ReactJS CRUD Using Vanilla-REDUX & JSON Server</h1>
      <ToastMessage />
      <AllRoutes />

    </div>
  );
}

export default App;
