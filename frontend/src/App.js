import './App.css';
import './styles/helper.css';
import NavBarComponent from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ListPots from './components/ListPots/ListPots';
import QuestionForm from './components/QuestionForm/QuestionForm';
import ListQuestions from './components/ListQuestions/ListQuestions';
import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarComponent />        
      </header>
      <Container className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listPots" element={<ListPots />} />
        <Route path="/questionForm/:id" element={<QuestionForm />} />
        <Route path="/listQuestions" element={<ListQuestions />} />
      </Routes> 
      </Container>
    </div>
  );
}

export default App;
