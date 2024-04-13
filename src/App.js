import React from 'react';
import Form from './Component/Form';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Details from './Component/Details';
import Error from './Component/Error';
function App() {
  return (
    <>
      <Header />
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/details' element={<Details />} />
          <Route path='/*' element={<Error />} />
        </Routes>

      </div>
    </>


  );
}

export default App;
