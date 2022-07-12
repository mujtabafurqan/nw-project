import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import {VscComment } from "react-icons/vsc";

import "./QuestionCard.scss";

QuestionCard.propTypes = {
    
};

function QuestionCard(props) {
    return (
        <ListGroup.Item className="custom-list" key={props.question.id}>
        <div>
            <div className="flex-row vertical-center mbl ">
                <h3 className="mrm">{props.question.title}</h3>
                { props.question.potName && <Badge bg="info">{props.question.potName}</Badge>}
            </div>
            <p>{props.question.description}</p>
            {props.navigate && <hr></hr>}
            {props.navigate && <button className="show-comments-btn" onClick={() => props.navigate('/question/'+ props.question._id)}>
                <VscComment className="comment-icon mrs"/>
                <span className="count">{props.question.answers.length}</span>
            </button>}
            
        </div>
    </ListGroup.Item>
    );
}

export default QuestionCard;