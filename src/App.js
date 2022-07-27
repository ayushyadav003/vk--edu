import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Home from './pages/home';
import Contact from './pages/contact-us';
import NotFound from './pages/404'
import { useState } from 'react';


function App() {

  const[value, setValue] = useState('');

  console.log(value);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/contactus' element={<Contact/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      {/* <input type="text" onChange={(e)=>setValue(e.target.value)}/>
    {
      ["Ayush","yadav","arjun","vikash","aman"].filter(item => {
          if(value === ''){
            return item
          }
          else if(item.toLowerCase().includes(value.toLowerCase())){
            return item;
          }
      }).map(item =>
      <p>{item}</p>
    ) */}
    </div>
  );
}

export default App;
