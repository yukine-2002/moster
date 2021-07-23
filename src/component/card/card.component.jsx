import React from 'react';

export const Card = (props) => (
    ( <div className ="card-content" >
        <img alt="props.data.name" src={`https://robohash.org/${props.data.id}?set=set2&size=180x180`}/>

        <h2>{props.data.name}</h2>
        <p>{props.data.email}</p>
        </div>)
)