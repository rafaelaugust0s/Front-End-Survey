import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useForm} from "react-hook-form";
import axios from "axios";




const Update=()=>{

 const [getCustomer,setCustomer]=useState({customer:{}})
 let customer_id= localStorage.getItem('customer_id')

 useEffect(async ()=>{

  let response;
  try{
   response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers/${customer_id}`)
   setCustomer(response.data)

  }catch (e) {
   alert(e.toString())
  }
 },[])
    return(

<div class='container'>
 <div class= 'col-12'>
  {/*<Message/>*/}
 </div>
 <form >
  <div className="form-group">
   <label htmlFor="text">Name</label>
   <input type="text" value={getCustomer.customer.name}  className="form-control" name='name'
         />
   {/*{errors.name &&<p>Please enter a valid name!</p>}*/}
  </div>
  <div className="form-group">
   <label htmlFor="email">Email address:</label>
   <input type="email" placeholder={getCustomer.customer.email} className="form-control" name="email"
          />
   {/*{errors.email &&<p>Please enter a valid email!</p>}*/}
  </div>
  <div className="form-group">
   <label htmlFor="DateOfBirth">Date Of Birth</label>
   <input type="text" placeholder={getCustomer.customer.dateOfBirth} className="form-control"  name="dateOfBirth"
          />
   {/*{errors.dateOfBirth &&<p>Please enter a valid Date Of Birth!</p>}*/}
  </div>
  <div className="checkbox">
   <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" className="btn btn-success" >UPDATE</button>
 </form>

</div>
    )
}

export default Update


//
//  // const {register,handleSubmit, formState:{errors}}= useForm()
//  const [getCustomer,setCustomer]=useState({customer:{}})
//  // const [showMessage, setMessage]= useState(false)
//  // const [getMsg,setMsg]=useState(["","",""])
//
//
//  let customer_id= localStorage.getItem('customer_id')
//
//  useEffect(async ()=>{
//
//   let response;
//   try{
//    response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers/${customer_id}`)
//    setCustomer(response.data)
//
//   }catch (e) {
//    alert(e.toString())
//   }
//  },[])
//
//  // const onSubmit= async (formData,event)=> {
//  //
//  //  try {
//  //   const response = await axios.patch(`${process.env.REACT_APP_BACKEND_API}/customers/`, formData)
//  //   console.log('form updated!')
//  //   // setMsg(['form updated'])
//  //  } catch (e) {
//  //   console.log("something went wrong!")
//  //   // setMsg(['something went wrong!'])
//  //
//  //  }
//
//   // setMessage(true)
//   // event.target.reset()
//
//  // }
//  // const Message=()=>{
//  //  if(showMessage== true){
//  //   return(
//  //       <div className={'alert-alert'+ getMsg[0]}>
//  //        <strong> {getMsg[1]}</strong>{getMsg[2]}
//  //       </div>
//
//   //  )
//   // }
//   // return <></>
//
//
//
//  return(
// <div class='container'>
//  <div class= 'col-12'>
//   {/*<Message/>*/}
//  </div>
//  <form >
//   <div className="form-group">
//    <label htmlFor="text">Name</label>
//    <input type="text" placeholder={getCustomer.customer.name}  className="form-control" name='name'
//          />
//    {/*{errors.name &&<p>Please enter a valid name!</p>}*/}
//   </div>
//   <div className="form-group">
//    <label htmlFor="email">Email address:</label>
//    <input type="email" placeholder={getCustomer.customer.email} className="form-control" name="email"
//           />
//    {/*{errors.email &&<p>Please enter a valid email!</p>}*/}
//   </div>
//   <div className="form-group">
//    <label htmlFor="DateOfBirth">Date Of Birth</label>
//    <input type="text" placeholder={getCustomer.customer.dateOfBirth} className="form-control"  name="dateOfBirth"
//           />
//    {/*{errors.dateOfBirth &&<p>Please enter a valid Date Of Birth!</p>}*/}
//   </div>
//   <div className="checkbox">
//    <label><input type="checkbox"/> Remember me</label>
//   </div>
//   <button type="submit" className="btn btn-success" >UPDATE</button>
//  </form>
//
// </div>
//
//
//
//
//  )
//

