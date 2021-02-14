import React from 'react';
import {MdDelete,MdEdit} from 'react-icons/md'

export default function ExpenseItem({expense,handleDelete,handleEdit}) {
    const {id,charge,amount} = expense
    return (
        <li className='item'>
            <div className="info">
                <span className="expense">{charge}</span>
                <div className="amount me-auto">${amount}
                </div>
                <div>
                <button className='edit-btn' aria-label='edit button' onClick={() => handleEdit(id)}><MdEdit/></button>
<button className='clear-btn' aria-label='delete button'onClick={() =>  handleDelete(id)}><MdDelete/></button>
                </div>

            </div>
        </li>
    )
}
