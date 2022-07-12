import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import "./ListPots.css";
import React from 'react';
import { Link, Navigate } from "react-router-dom";

export default function ListPots(){
    const dataList = ["Uniswap", "abcd", "west-virginia"]
    
    const [potList, setPotList] = useState([]); 
    let navigate = useNavigate();
    const handleClick = (name) => {
        // console.log(name);
        navigate(`/questionForm/${name}`);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:5003/api/pot/list");
            const data = await response.json();
            setPotList(data);
        }
        fetchData();
    }
    , []);

    return(
        <div className="mtxl ">
        <ListGroup >
            {potList.map((pot, id) => 
            <ListGroup.Item action key={`${pot}_${id}`} variant="dark" onClick={() => handleClick(pot.name)}>
                {pot.name}
            </ListGroup.Item>)}
        </ListGroup>
        </div>
    );
}