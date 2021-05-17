import React, {useEffect,useState} from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import 'survey-react/survey.css';
// import { MdDeleteForever } from "react-icons/fa";
import axios from "axios";
import Update from "./update";

import * as PropTypes from "prop-types";


class Tableable extends React.Component {
    render() {
        return null;
    }
}

Tableable.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};



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
        <div className="container">
            <div className="row-customer">
                <div className="col-12 text-left">
                    <p>Customer Information</p>
                </div>
            </div>
            <form className= "table">{<br/>}

                <Table>
                    <Thead>
                    <Tr>
                           <Th>NAME</Th>
                        <Th>EMAIL</Th>
                        <Th>DATE OF BIRTH </Th>
                        <Th>ADDRESS </Th>
                        <Th>POSTAL CODE </Th>
                        <Th>CITY</Th>
                        <Th>PROVINCE</Th>
                        <Th>PHONE</Th>
                        <Th>SIN</Th>
                        <Th>MARITAL STATUS</Th>

                        <Th>   </Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{getCustomer.customer.name}</Td>
                        <Td>{getCustomer.customer.email}</Td>
                        <Td>{getCustomer.customer.dateOfBirth}</Td>
                        <Td>{getCustomer.customer.address}</Td>
                        <Td>{getCustomer.customer.postalCode}</Td>
                        <Td>{getCustomer.customer.city}</Td>
                        <Td>{getCustomer.customer.province}</Td>
                        <Td>{getCustomer.customer.phone}</Td>
                        <Td>{getCustomer.customer.sin}</Td>
                        <Td>{getCustomer.customer.maritalStatus}</Td>

                        <Td>
                            <a href="/update"> <button type="button"  className="btn btn-success text-right"   >UPDATE</button></a>
                            <a href="/"> <button type="button" onClick={deleteCustomer} className="btn btn-danger text-right" >DELETE</button></a>
                        </Td>
                    </Tr>
                    </Tbody>
                </Table>
            </form>
            <div className="col-12" id="update">
                {/*<Update/>*/}
            </div>
        </div>
    )
}
export default MyForm