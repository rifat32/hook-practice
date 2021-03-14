import React, {useState, useEffect,useContext} from 'react';
const ExpenseContext = React.createContext() ;
function ExpenseProvider(props) {
    const intitalExpenses = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem('expenses')):[];
    const [expenses,setExpenses] = useState(intitalExpenses);
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
      const newId = expenses.length + 1;
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
          
        let tempExpenses = expenses.filter((el) => el.id != id)
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
            console.log(id)
          
          }


    return (
        <ExpenseContext.Provider value={
            {
                expenses : expenses,
                setExpenses: setExpenses,
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
                handleAlert,
                clearItems,
                handleDelete,
                handleEdit

            }
            
            }>
{props.children}
        </ExpenseContext.Provider>
            
        
    )
}

export {ExpenseContext,ExpenseProvider}
