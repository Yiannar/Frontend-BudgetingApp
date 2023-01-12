import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

export default function TransactionsEditForm(){
    let {index} = useParams()
    const navigate = useNavigate()

    const [transaction, setTransaction]= useState({
        date: "",
        name: "",
        amount: "",
        from : "",
        category: "",
        id: 0,
    })

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value})
    }

    useEffect(()=>{
        axios 
        .get(`${API}/transactions/${index}`)
        .then(res => setTransaction(res.data))
        .catch(err => console.log(err))
    },[index])
    
    const handleSubmit = (event)=>{
        event.preventDefault()

        axios 
        .put(`${API}/transactions/${index}`, transaction)
        .then(res =>{
            setTransaction(res.data)
            navigate(`/transactions/${index}`)
        })
        .catch (err => console.log(err))
    }

    return(
        <div className="NewForm">
            <h3>New Entry</h3>

            <form onSubmit={handleSubmit}>
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
            value={transaction.item_name}
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
            <button className="newSubmit" onClick={()=> navigate('/')}>Back to Home</button>
        </div>
    );
    
}