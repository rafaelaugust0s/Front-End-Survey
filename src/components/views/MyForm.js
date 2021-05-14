import React, {useEffect,useState} from "react"
import 'survey-react/survey.css';
import axios from "axios";




const MyForm=  ()=> {

    const [getCustomer, setCustomer]= useState({customer:{}})

    //extract the customer_id from local storage

    let customer_id = localStorage.getItem('customer_id')


     useEffect(async ()=> {
         let response;
         try {
             response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers/${customer_id}`)
             setCustomer(response.data)

         } catch (e) {
             alert(e.toString())
         }
     },[])


    return (


        <div className="container">

            <h2>Customer Information</h2>

            <form>

                <table className="table table-bordered">
                    <thead>

                    <tr>

                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>DATE OF BIRTH </th>
                        <th>   </th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{getCustomer.customer.name}</td>
                        <td>{getCustomer.customer.email}</td>
                        <td>{getCustomer.customer.dateOfBirth}</td>
                        <td>
                            <a href="/update"> <button type="button" className="btn btn-success text-right"   >UPDATE</button></a>
                            <a href="/delete"> <button type="button" className="btn btn-danger text-right" >DELETE</button></a>
                        </td>


                    </tr>

                    </tbody>
                </table>
            </form>
        </div>
    )
}
export default MyForm