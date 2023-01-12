import axios from 'axios'
import React from 'react'
import{useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router';
const API = process.env.REACT_APP_API_URL

export default function Transaction(){

const {index}= useParams()
const [transaction,setTransaction] = useState([])
let navigate = useNavigate()

useEffect(()=>{
    axios
    .get(`${API}/transactions/${index}`)
    .then((res)=>setTransaction(res.data))
    .catch((err)=> navigate("/*"))
},[index])

function handleDelete(){
    axios 
    .delete(`${API}/transactions/${index}`)
    .then(()=>{
        navigate('/transactions')
    })
    .catch((err)=> console.log(err))
}


return (
<div className='transactions'>
    <table>
        <thead>
        <tr>
            <th> Date</th>
            <th>Name</th>
            <th>Amount</th>
        </tr>
        </thead>
        {transaction.map((val, item)=>{
            return (
                <tbody>
                <tr item={item}>
                    <td>{val.date}</td>
                    <td>{val.name}</td>
                    <td>{val.amount}</td>
                </tr>
                </tbody>
            )
        })}
    </table>
    <div>
        <button onClick={()=>navigate("/transactions")}>Back</button>
        <button onClick={()=> navigate(`/transactions/${index}/edit`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>

</div>
)} 