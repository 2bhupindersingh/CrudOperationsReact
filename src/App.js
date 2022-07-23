import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/pages/NotFound';
import AddUsers from './components/users/AddUsers';
import EditUsers from './components/users/EditUsers';
import ViewUsers from './components/users/ViewUsers';

function App(props) {
  return (
    
    <Router>
      <div className="App">
    <Navbar />

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/user/add' element={<AddUsers/>}/>
        <Route exact path='/user/edit/:id' element={<EditUsers/>}/>
        <Route exact path='/user/view/:id' element={<ViewUsers/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
      </div>
  </Router>
  );
}

export default App;
