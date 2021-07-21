import React, { useContext, useState } from 'react'
import './Child.css'
import { TransactionContext } from './transContext'
//import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//import Button from '@material-ui/core/Button'
//import { isUserWhitespacable } from '@babel/types';
function Child() {
    // const  transactions = useContext(TransactionContext);
    const { transactions, addTransaction, } = useContext(TransactionContext);
    // let [transactions,setTransaction] = useState(TransactionContext);
    let [newDisc, setDisc] = useState("");
    let [newAmount, setAmount] = useState();

    console.log(transactions)

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].Amount > 0)
                income += transactions[i].Amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].Amount < 0)
                expense += transactions[i].Amount
        }
        return expense;
    }

    const handleaddition = (event) => {
        event.preventDefault();
        console.log(newDisc, newAmount)
        addTransaction({ Amount: Number(newAmount), Disc: newDisc })

        setDisc('');
        setAmount(0);

    }
    const deletetrans = (key) => {
        // deleteTransaction(key);
        console.log(key)
        console.log('hello')
    }
    return (
        <div className='Expenseapp'>
            <h1 className='textalign'>Expense Tracker</h1>

            <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

            <div className='Expensesummary'>
                <h3>Income <br />${getIncome()}</h3>
                <h3>Expense <br />${getExpense()}</h3>
            </div>

            <h3>  History   </h3>
            <hr />
            <ul className="Expensehistory">

                {transactions.map((transobj, ind) => {
                    return (
                        <li key={ind} className={transobj.Amount > 0 ? 'positive' : 'negative'}>
                            {/* <Button color='secondary' onClick={() => deletetrans(ind)}>
                                <DeleteForeverIcon />

                            </Button> */}

                            {/* <input type='Submit' value='x' /> */}
                            <span> {transobj.Disc} </span>
                            <span> ${transobj.Amount} </span>

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
                <input type='Submit' value='Add Transaction' className='submitbut'/>
            </form>

        </div>

    );
}

export default Child;

