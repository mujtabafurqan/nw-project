import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";

export default function QuestionForm() {
    const potName = useParams().id;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.formBasicTitle.value);
        console.log(e.target.formBasicDescription.value);
        const newQuestion = {
            title: e.target.formBasicTitle.value,
            description: e.target.formBasicDescription.value,
            potName: potName
        };
        await fetch("http://localhost:5003/question/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuestion),
          })
          .catch(error => {
            window.alert(error);
            return;
          });

          navigate("/")
    }

    return (
        <div>
            <h1>Question Form For {potName}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" maxlength="10" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Description" rows={4}/>
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}