import React from 'react';
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md';

export default function ExpenseList({expenses,handleDelete,handleEdit,clearItems}) {
    return (
        <>
        <ul className='list'>
{expenses.map((el) => {
    return <Item key={el.id} expense={el} handleDelete={handleDelete} handleEdit={handleEdit}/>
})}
        </ul>
           {expenses.length && <button className='btn' onClick={clearItems}>clear epenses <MdDelete className='btn-icon'/></button>}
        </>
    )
}
