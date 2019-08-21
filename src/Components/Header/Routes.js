import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import GetUser from './GetUser';
import users from './users';

function Main() {
 return (
   <BrowserRouter>
      <div className="App">
           <Route path='/' exact component={users}/>
        <Route path='/GetUser' exact component={GetUser}/>
     </div>
   </BrowserRouter>
  );
}




export default Main;
