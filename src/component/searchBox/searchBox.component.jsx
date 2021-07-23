import React from 'react';
import '../card-list/card-list.content.css';

export const SearcgBox = ({placeholder,Handle}) => {
   return <input className='search' type="search" placeholder = {placeholder} onChange ={Handle}  />
}