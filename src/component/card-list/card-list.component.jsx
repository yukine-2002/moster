import React from 'react';
import {Card} from '../card/card.component';
import './card-list.content.css'

export const CardlistData = (props) => {

    return ( <div className='card-list'> 
    { props.data.map(a => <Card key ={a.id} data={a} />) }
     </div>)
}
    
