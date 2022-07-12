import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Question(){
    const questionId = useParams().id;
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        async function getQuestion() {
            const response = await fetch(`http://localhost:5003/api/question/${questionId}`);
            setQuestion(await response.json());
        }
        getQuestion();
        
    }
    , []);
    
    const handleSubmit = async () => {
        const newAnswer = {
            text: answer
        };
        console.log(question);
        setQuestion({
            ...question,
            answers: [...question.answers, newAnswer]
        });
        await fetch("http://localhost:5003/api/addAnswer/"+question._id, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newAnswer),
          })
          .catch(error => {
            window.alert(error);
            return;
          });
        setAnswer("");
    }

        
    return(
        <div>
           <h1>{question.title}</h1>
            <p>{question.description}</p>
            <h2>All Answers</h2>
            {question.answers && question.answers.map(answer => (
                <p>{answer.text}</p>
            ))} 
            <h2>Add an Answer</h2>
            <textarea value={answer} onChange={e => setAnswer(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}