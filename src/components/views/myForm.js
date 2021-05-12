import React,{useState,useEffect} from "react"
import axios from "axios";



const myForm=()=>{
    return (
        <div className="container">
            <h2>Bordered Table</h2>
            <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default myForm