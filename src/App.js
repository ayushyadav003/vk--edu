import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import Contact from './pages/contact-us';
import NotFound from './pages/404'


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/contactus' element={<Contact/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
