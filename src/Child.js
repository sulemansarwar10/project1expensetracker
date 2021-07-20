import React, { useContext, useState } from 'react'
import './Child.css'
import { TransactionContext } from './transContext'
function Child() {
   // const  transactions = useContext(TransactionContext);
    const { transactions, addTransaction } = useContext(TransactionContext);
  // let [transactions,setTransaction] = useState(TransactionContext);
    let [newDisc, setDisc] = useState("");
    let [newAmount, setAmount] = useState();
    console.log('hello')
    console.log(transactions)
    const handleaddition = (event) => {
        event.preventDefault();
        console.log(newDisc, newAmount)
        addTransaction({ Amount: Number(newAmount), Disc: newDisc })

        setDisc('');
        setAmount(0);

    }
    return (
        <div className='Expenseapp'>
            <h1 className='textalign'>Expense Tracker</h1>

            <h3>Your Balance <br /> 500</h3>

            <div className='Expensesummary'>
                <h3>Income <br />600</h3>
                <h3>Expense <br />250</h3>
            </div>

            <h3>  History   </h3>
            <hr />
            <ul className="Expensehistory"> 

                {transactions.map((transobj )=> {
                    return (
                        <li>
                            <span> {transobj.Disc} </span>
                            <span> {transobj.Amount} </span>
                        </li>
                    )
                })}
            </ul>


            <h3>  Add New Transaction   </h3>
            <hr />
            <form className='Transactionprocess' onSubmit={handleaddition}>

                <label>
                    Discription <br />
                    <input type='text' value={newDisc} placeholder="Discription" onChange={(ev) => setDisc(ev.target.value)} required />
                </label>
                <br />
                <label>
                    Amount <br />
                    <input type='number' value={newAmount} placeholder="Amount" onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />
                <input type='Submit' value='Add Transaction' />
            </form>

        </div>

    );
}

export default Child;

