import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListQuestions from "../ListQuestions/ListQuestions";
import QuestionCard from "../QuestionCard/QuestionCard";
import Form from 'react-bootstrap/Form';

import "./Question.scss";
import { Button } from "react-bootstrap";

export default function Question() {
  const questionId = useParams().id;
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    async function getQuestion() {
      const response = await fetch(
        `http://localhost:5003/api/question/${questionId}`
      );
      setQuestion(await response.json());
    }
    getQuestion();
  }, []);

  const handleSubmit = async () => {
    const newAnswer = {
      text: answer,
    };
    console.log(question);
    setQuestion({
      ...question,
      answers: [...question.answers, newAnswer],
    });
    await fetch("http://localhost:5003/api/addAnswer/" + question._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnswer),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setAnswer("");
  };

  return (
    <div className="mtxl">
      <QuestionCard question={question}></QuestionCard>

      <div className="mtxl">
        {question.answers && <h2 className="answers">Answers: <span className="count">{question.answers.length}</span></h2>}

        {question.answers &&
          question.answers.map((answer) => <p className="answer">{answer.text}</p>)}
        
        <Form.Group className="mb-3 mw700 mtxl" controlId="formBasicDescription">
                    <Form.Label className="add-answer">Add an answer</Form.Label>
                    <Form.Control as="textarea" value={answer} onChange={(e) => setAnswer(e.target.value)}placeholder="Description" rows={4}/>
        </Form.Group>
        
        <Button variant="primary"disabled={answer.length < 1} onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}
