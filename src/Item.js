import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const Item =({data})=>{
    const {title}=useParams();
    return(
        <div>
            {data
            .filter(card=>card.title===title)
            .map((card,index)=>{
                <div key={index}>
                    <h1>{card.itemname}</h1>
                </div>
            })}
        </div>
    )
}

export default Item;