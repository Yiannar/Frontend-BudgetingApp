import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
import NewFormEntry from '../Components/NewFormEntry.css'
const API = process.env.REACT_APP_API_URL;

export default function NewForm() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    id: uuid(),
  });

  const handleTextChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => navigate("/transactions"))
      .catch((err) => console.log(err));
  };

    return (
        <div className="NewForm">
            <h3>New Entry</h3>

            <form className="Formedit"onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input 
            id="date"
            value={transaction.date}
            type='text'
            onChange={handleTextChange}
            placeholder = "date"
            />
            <label htmlFor="name">Name</label>
            <input 
            id="item_name"
            value={transaction.name}
            type='text'
            onChange={handleTextChange}
            placeholder = "name"
            />
            <label htmlFor="amount">Amount</label>
            <input 
            id="amount"
            value={transaction.amount}
            type= "number"
            onChange={handleTextChange}
            placeholder = "amount"
            />
            <label htmlFor="from">From</label>
            <input 
            id="from"
            value={transaction.from}
            type='text'
            onChange={handleTextChange}
            placeholder = "from"
            />
            <label htmlFor="category">Category</label>
            <input 
            id="category"
            value={transaction.category}
            type='text'
            onChange={handleTextChange}
            placeholder = "category"
            />
            <br/>
            <input type='submit'/>
            </form>
            <button className="newSubmit" onClick={()=> navigate('/transactions')}>Back</button>
        </div>
    );
}

