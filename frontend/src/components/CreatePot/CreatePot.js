import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";

export default function QuestionForm() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newPot = {
            name: e.target.formName.value,
            tag: e.target.formTag.value,
            homepage: e.target.formHomePageUrl.value,
            initialPotAmount: e.target.formInitialPotAmount.value
        }

        await fetch("http://localhost:5003/api/pot/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPot),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        navigate("/")
    }

    return (
        <div>
            <h1>Create a new Pot</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" maxLength="50" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTag">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control type="text" placeholder="Enter Tag" maxLength="10" />
                </Form.Group>
                    <Form.Label>HomePage URL</Form.Label>
                <Form.Group className="mb-3" controlId="formHomePageUrl">
                    <Form.Control type="text" placeholder="HomePage URL" />
                </Form.Group>
                <Form.Label>Initial Pot Amount</Form.Label>
                <Form.Group className="mb-3" controlId="formInitialPotAmount">
                    <Form.Control type="number" placeholder="Inital Pot Amount" />
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}