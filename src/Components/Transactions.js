import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

export default function Transactions(){
    const [transactions, setTransactions]= useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios
        .get(`${API}/transactions`)
        .then((res)=>{
            console.log(res.data)
            setTransactions(res.data)})
        .catch((err) => {
            console.log(err)})
        
    }, [])

    let total = transactions.reduce((acc, transaction) => {
        if (transaction.category === "Income") {
          acc += Number(transaction.amount);
        } else {
          acc -= Number(transaction.amount);
        }
        return acc;
      }, 0);

    return (
        <div>
            <h2>Transactions</h2>
            <h3>Amount ${total}</h3>
            <div>
                {
                transactions.map((transaction, index)=>{
                return(
                    <div key={transaction.id}>
                        <h4>{transaction.date}</h4>
                             <Link to={`/transactions/${index}`}>
                        <h4 className="item">{transaction.item_name}</h4>
                            </Link>
                <h4>$ {transaction.amount}</h4>
                <div className="buttons">
                             <Link to={`/transactions/${index}/edit`}>
                    Edit{" "}
                  </Link>
                </div>
                 </div>
                        )
                    })
                }
            </div>

        </div>
    );
};
