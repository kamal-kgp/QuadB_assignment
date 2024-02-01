import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' ;
import Home from './components/Home.js' ;
import Book from './components/Book.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book-show" element={<Book />} />
      </Routes>
    </Router>
  );
} ;

export default App;
