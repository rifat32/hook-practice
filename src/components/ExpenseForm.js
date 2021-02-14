import React from 'react';
import {MdSend} from 'react-icons/md';


export default function ExpenseForm({amount,charge,handleCharge,handleAmount,handleSubmit , edit}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                  
                <div className="form-group">
                    <label htmlFor="charge" style={{color:'black'}}>charge</label>
                    <input style={{border:"2px solid black",backgroundColor:"white"}} type="text" name="charge" id="charge" className="form-control" placeholder="e.g rent" value={charge} onChange={handleCharge}/>
                </div>
                
                    </div>
                    <div className="col-6">
                    <div className="form-group">
                    <label htmlFor="amount" style={{color:'black'}}>amount</label>
                    <input style={{border:"2px solid black",backgroundColor:"white"}}  type="number" name="amount" id="amount" className="form-control" placeholder="e.g 100" value={amount} onChange={handleAmount}/>
                </div>
                    </div>

                </div>
            </div>
          
            <button className='btn' type="submit">
              {edit?'edit':'submit'}  <MdSend className='btn-icon'/>
            </button>
        </form>
    )
}
