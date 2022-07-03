import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import "./ListPots.css";
import Container from 'react-bootstrap/Container';
import React from 'react';
import { Link, Navigate } from "react-router-dom";

export default function ListPots(){
    const dataList = ["Uniswap", "abcd", "west-virginia"]
    
    let navigate = useNavigate();
    const handleClick = (id) => {
        // console.log(id);
        navigate(`/questionForm/${id}`);
    }

    return(
        <div className="mtxl ">
        <ListGroup >
            {dataList.map((x, id) => 
            <ListGroup.Item action key={`${x}_${id}`} variant="dark" onClick={() => handleClick(x)}>
                {x}
            </ListGroup.Item>)}
        </ListGroup>
        </div>
    );
}