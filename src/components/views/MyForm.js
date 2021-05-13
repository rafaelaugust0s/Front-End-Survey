import React, {useEffect,useState} from "react"
import {useParams} from 'react-router-dom'
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import {useForm} from "react-hook-form";
import axios from "axios";
import json from "../surveys/questionOne";




 // const getData=async (payload)=>{
 //     let response =await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers`, payload)
 //    console.log(payload)



const MyForm= async ()=> {

    const [getCustomer, setCustomer]= useState({customer:{}})
    const {customer_id}=useParams()

     useEffect(async ()=> {
         let response;
         try {
             response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers/${customer_id}`)

         } catch (e) {
             alert(e.toString())
             // window.location = "/MyForm"
         }
         setCustomer(response.data)
     })


    return (


        <div className="container">

            <h2>My information</h2>
            <form>
                <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>DATE OF BIRTH</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{getCustomer.customer.name}</td>
                        <td>{getCustomer.customer.email}</td>
                        <td>{getCustomer.customer.dateOfBirth}</td>
                    </tr>

                    </tbody>
                </table>
            </form>
        </div>
    )
}
export default MyForm