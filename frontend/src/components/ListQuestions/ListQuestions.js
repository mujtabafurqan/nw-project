import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import "./ListQuestions.scss";
import QuestionCard from "../QuestionCard/QuestionCard";

export default function ListQuestions(){
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getQuestions() {
            const response = await fetch(`http://localhost:5003/api/question/`);
        
            if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              window.alert(message);
              return;
            }
        
            const questions = await response.json();

            console.log(questions);
            setQuestions(questions);
          }
        
          getQuestions();
          console.log(questions);
          return;
        }, [questions.length]);

    return(
        <div>
            <h1 className="mbxl page-title">List Questions</h1>
            <ListGroup className="custom-list-group mbxl">
            {questions.map(question => (
                <QuestionCard question={question} navigate={navigate}></QuestionCard>
            ))}
            </ListGroup>
        </div>
    );
}