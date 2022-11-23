import React from 'react';
import ReactDOM from 'react-dom/client';
import Users from './componets/users';
import "bootstrap/dist/css/bootstrap.css"
// import Loader from './componets/Loader/Loader';
// import Table from './componets/Table/Table'
// import Table from './componets/Table/table';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='container'>
    <Users />
  </div>



);


