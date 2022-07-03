import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export default function ListQuestions(){
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function getQuestions() {
            const response = await fetch(`http://localhost:5003/question/`);
        
            if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              window.alert(message);
              return;
            }
        
            const questions = await response.json();
            setQuestions(questions);
          }
        
          getQuestions();
          console.log(questions);
          return;
        }, [questions.length]);

    return(
        <div>
            <h1>List Questions</h1>
            <ListGroup>
            {questions.map(question => (
                <ListGroup.Item key={question.id}>
                    <div>
                        <h3>{question.title}</h3>
                        <p>{question.description}</p>
                    </div>
                </ListGroup.Item>
            ))}
            </ListGroup>
        </div>
    );
}