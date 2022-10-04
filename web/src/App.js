import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'


function App() {
  return <div className="App">
    
    <Router>
      <NavBar/>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
    
  </div>;
}

export default App;
