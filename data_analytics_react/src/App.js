import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './pages/nav/Navigation';
import Index from './pages/Authentication/Index';
import SignIn from './pages/SignIn';
import Analytics from './pages/Analytics';
import Data from './pages/Data';
import SignOut from './pages/SignOut';
function App() {

  const isLoggedIn=localStorage.getItem("isLoggedIn")||false;
  return (
    <div className="App">

      {isLoggedIn?
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard/">
            <Route path="analytics" element={<Analytics />} />
            <Route path="data" element={<Data />} />
            <Route path="signout" element={<SignOut />} />
          </Route>

        </Routes>
      </Router>
        :
      <Router>
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
}
    </div>
  );
}

export default App;
