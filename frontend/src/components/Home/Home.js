import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import './Home.css';

export default function Home() {
    let navigate = useNavigate();

    const handleAsk = () => {
        navigate("/listPots");
    }
    return(
        <div className='home'>
            <Button variant="outline-primary" onClick={handleAsk}> Ask a Question</Button>
            <Button variant="outline-primary" onClick={() => navigate("/listQuestions")}> List Questions</Button>
            <Button variant="outline-primary" onClick={() => navigate("/createPot")}> Create a Pot</Button>
        </div>        
    );
}