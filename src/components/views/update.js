import React, {useState,useEffect,Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useForm} from "react-hook-form";
import axios from "axios";
import Footer from "../common/Footer";
import MyForm from "./MyForm";


const Update=()=>{
    const [getCustomer,setCustomer]=useState({customer:{}})
    let customer_id= localStorage.getItem('customer_id')
    const {register, handleSubmit,  formState: { errors }} = useForm()
    const [showMessage, setMessage] = useState(false)
    const [getMsg, setMsg] = useState(["","",""])


    useEffect(async ()=>{
        let response;
        try{
            response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers/${customer_id}`)
            setCustomer(response.data)
        }catch (e) {
            alert(e.toString())
        }
    },[])


    const OnChange =(e,formData)=>{
        this.setState({
        [e.target.name]: e.target.value,

    })
        console.log(OnChange(e,formData));

    }
        const onSubmit = async (formData,event) => {
            console.log(formData)
            try{
            let response = await axios.patch(`${process.env.REACT_APP_BACKEND_API}/customers/${customer_id}`, formData)
            setMsg(["alert-success", " ","Your information has been updated successfully!"])
        }
    catch (e)
        {
            setMsg(["alert-danger", "Oops!","Something went wrong!"])
        }
            setMessage(true)
            event.target.reset()
    }
    // window.location="";

    const Message= () =>{


        if(showMessage === true){
            return(
                <div className={"alert " + getMsg[0]}>
                    <strong>{getMsg[1]}</strong> {getMsg[2]}
                </div>
                // <div className="alert-success">
                //     <strong>SUCCESS</strong> "Customer updated successfully!
                //  </div>
            )

        }
        return <></>
    }

//     const NewInfo= () => {
//
// return(
//     <div className="container ">
//         <MyForm/>
//     </div>
//     )
//         }
//         return <></>

    return(
        <div class='container'>
            <div className="row-customer">
                <div className="col-12 text-left">
                    <p> Customer Information Update</p>
                </div>
            </div>
            <form class='update' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-12'>
                    <Message/>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Name</label>
                    <input type="text" value={getCustomer.customer.null}
                           onChange={e=> this.change(e)}
                           className="form-control" name='name'  {...register("name", { required:true})}
                    />
                    {errors.name &&<h6>Please enter a valid name!</h6>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" value={getCustomer.customer.null}
                           onChange={e=> this.change(e)}
                           className="form-control" name="email"  {...register("email", { required:true})}
                    />
                    {errors.email &&<h6>Please enter a valid email!</h6>}
                </div>
                <div className="form-group">
                    <label htmlFor="DateOfBirth">Date Of Birth</label>
                    <input type="text" value={getCustomer.customer.null}
                           onChange={e=> this.change(e)}
                           className="form-control"  name="dateOfBirth"  {...register("dateOfBirth", { required:true})}
                    />
                    {errors.dateOfBirth &&<h6>Please enter a valid Date Of Birth!</h6>}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" value={getCustomer.customer.null}
                           onChange={e=> this.change(e)}
                           className="form-control"  name="address"  {...register("address", { required:true})}
                    />
                    {errors.address &&<h6>Please enter a valid Address!</h6>}
                </div>
                <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input type="text" value={getCustomer.customer.null}
                           onChange={e=> this.change(e)}
                           className="form-control"  name="postalCode"  {...register("postalCode", { required:true})}
                    />
                    {errors.address &&<h6>Please enter a valid Postal Code!</h6>}
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" value={getCustomer.customer.null}
                           onChange={e=> this.change(e)}
                           className="form-control"  name="city"  {...register("city", { required:true})}
                    />
                    {errors.address &&<h6>Please enter a valid City!</h6>}
                </div>
                <div className="form-group">
                    <label htmlFor="province">Province</label>
                    <input type="text" value={getCustomer.customer.null}
                           onChange={e=> this.change(e)}
                           className="form-control"  name="province"  {...register("province", { required:true})}
                    />
                    {errors.address &&<h6>Please enter a valid Province!</h6>}
                </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" value={getCustomer.customer.null}
                               onChange={e=> this.change(e)}
                               className="form-control"  name="phone"  {...register("phone", { required:true})}
                        />
                        {errors.address &&<h6>Please enter a valid Phone!</h6>}
                    </div>
                <div className="form-group">
                            <label htmlFor="sin">SIN</label>
                            <input type="text" value={getCustomer.customer.null}
                                   onChange={e=> this.change(e)}
                                   className="form-control"  name="sin"  {...register("sin", { required:true})}
                            />
                    {errors.address &&<h6>Please enter a valid SIN!</h6>}
                </div>   <div className="form-group">
                            <label htmlFor="maritalStatus">Marital Status</label>
                            <input type="text" value={getCustomer.customer.null}
                                   onChange={e=> this.change(e)}
                                   className="form-control"  name="maritalStatus"  {...register("maritalStatus", { required:true})}
                            />
                    {errors.address &&<h6>Please enter a valid Marital Status!</h6>}
                </div>
                <div className="checkbox text-right">
                    <label><input type="checkbox"/> Remember me</label>
                    <a href="/MyForm"><button type="submit" className="btn btn-success" >UPDATE</button>
                    </a>
                </div>
            </form>

        </div>

    )
}
export default Update
