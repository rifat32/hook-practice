
import React, {useState, useEffect,useContext} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import {ExpenseContext} from './context';




function App() {
  const {expenses,
    setExpenses, 
    charge,
    setCharge,
    amount,
    setAmount,
    alert,
    setAlert,
    edit,
    setEdit,
    id,
    setId,
    handleCharge,
    handleAmount,
    handleSubmit,
    clearItems,
      handleDelete,
      handleEdit
} = useContext(ExpenseContext)
  
  return (
    <>
    {alert.show &&  <Alert type={alert.type} text={alert.text}/>}
   
    <h1>budget calculator </h1>
    <main className="app">
    <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit} />
    <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems}/>
    </main>
    <h1>
      total spendings : <span className="total">
  $ {expenses.reduce((a , c) => {
return a += parseInt(c.amount); 
  },0)}
      </span>
    </h1>
   
   
    
     
    </>
  );
}

export default App;
