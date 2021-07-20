import React, { createContext, useReducer } from "react"

import TransactionReducer from "./transReducer";

const initialtransaction = [

    { Amount: 500, Disc: 'Cash' },
    { Amount: -50, Disc: 'water' },
    { Amount: -200, Disc: 'Bill' },
]

export const TransactionContext = createContext(initialtransaction);


export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(TransactionReducer, initialtransaction);

    function addTransaction(transaction) {
        dispatch({
            type: "ADD",
            payload: {
                Amount: transaction.Amount,
                Disc: transaction.Disc
            },
        })
    }

    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
               addTransaction
            }}>
            {children}
        </TransactionContext.Provider>
    );

}