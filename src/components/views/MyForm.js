import React, {useEffect,useState} from "react"
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import 'survey-react/survey.css';
import {Container,Table,}from 'react-bootstrap';
// import { MdDeleteForever } from "react-icons/fa";
import axios from "axios";
import Update from "./update";






const MyForm=  ()=> {

    const [getCustomer, setCustomer]= useState({customer:{}})
    const [showTable, setTable] = useState(false)

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

    const deleteCustomer=async ()=>{
        //api call fro DELETE


            const response= await axios.delete(`${process.env.REACT_APP_BACKEND_API}/customers/${customer_id}`)
            alert("customer deleted!")
        // window.location="/";

    }

    // const Tableable= () => {
    //
    //     if (showTable === true) {
    //         return (
    //
    //             <div className="container ">
    //                 <Update/>
    //             </div>
    //         )
    //     }
    //     return <></>
    //     setTable(true)
    // }



    return (
        <Container>

            <div className="container">

                <form className= "table">{<br/>}
                    <div className="row-customer">
                        <div className="col-12 text-left">
                            <p>Customer Information</p>
                        </div>
                    </div>
                    <Table responsive striped bordered className="noWrap">
                        <thead>
                            <tr className="tableheader">
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>DATE OF BIRTH </th>
                                <th>ADDRESS </th>
                                <th>POSTAL CODE </th>
                                <th>CITY</th>
                                <th>PROVINCE</th>
                                <th>PHONE</th>
                                <th>SIN</th>
                                <th>MARITAL STATUS</th>

                                <th>   </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{getCustomer.customer.name}</td>
                                <td>{getCustomer.customer.email}</td>
                                <td>{getCustomer.customer.dateOfBirth}</td>
                                <td>{getCustomer.customer.address}</td>
                                <td>{getCustomer.customer.postalCode}</td>
                                <td>{getCustomer.customer.city}</td>
                                <td>{getCustomer.customer.province}</td>
                                <td>{getCustomer.customer.phone}</td>
                                <td>{getCustomer.customer.sin}</td>
                                <td>{getCustomer.customer.maritalStatus}</td>

                                <td>
                                    <a href="/update"> <button type="button"  className="btn btn-success text-right"   >UPDATE</button></a>
                                    <a href="/"> <button type="button" onClick={deleteCustomer} className="btn btn-danger text-right" >DELETE</button></a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </form>
                <div className="col-12" id="update">
                    {/*<Update/>*/}
                </div>
            </div>

        </Container>
    )
}
export default MyForm