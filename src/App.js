
import React, {useState, useEffect} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
// const initailExpense = [
//   {id:1,charge:'rent',amount:1600},
//   {id:2,charge:'car payment',amount:1600},
//   {id:3,charge:'credit card bill',amount:1200},
// ]
const intitalExpenses = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem('expenses')):[];

function App() {
  const [expenses,setExpenses] = useState(initailExpense);
  const [charge,setCharge] = useState('');
  const [amount,setAmount] = useState('');
  const [alert,setAlert] = useState({show:false});
  const [edit,setEdit] = useState(false);
  const [id,setId] = useState(0);
useEffect(() => {
  localStorage.setItem('expenses',JSON.stringify(expenses))
},[expenses])



  const handleCharge = (e) => {
    setCharge(e.target.value)
  }
  const handleAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleAlert = ({type,text}) => {
    setAlert({show:true,type,text});
    setTimeout(() => {
setAlert({show:false});
    },3000)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount && charge){
if(edit){
let tempExpenses = expenses.map((item) => {
  return item.id === id? {...item,charge,amount} : item
} )
setExpenses(tempExpenses)
setEdit(false)
handleAlert({type:'success',text:'item edited'});
}
else{
  const newId = expenses[expenses.length -1] + 1;
const singleExpense = {id:newId,charge:charge,amount:amount};
setExpenses([...expenses,singleExpense]);
handleAlert({type:'success',text:'item added'});

}


    
setCharge('');
setAmount('');
    }else{
      // handle alert call
      handleAlert({type:'danger',text:`charge can not be empty value and amount has to be bigger than zero.`});

    }
  }
const clearItems = () => {
setExpenses([]);
handleAlert({type:'danger',text:' all items deleted'});
}
const handleDelete = (id) => {
let tempExpenses = expenses.filter((el) => el.id !== id)
setExpenses(tempExpenses);
handleAlert({type:'danger',text:'item is deleted'});
}
const handleEdit = (id) => {
  const expense = expenses.find(el => el.id === id);
  let {charge, amount} = expense;
  setCharge(charge)
  setAmount(amount)
  setEdit(true);
  setId(id);

}
  
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
