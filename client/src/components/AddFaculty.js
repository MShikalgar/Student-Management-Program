import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const AddFaculty = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [year,setYear]=useState("");
    const [designation,setDesignation]=useState("");
    

    const history=useHistory();
const changeOnClick = e =>{
    e.preventDefault();


    const faculties={
        name ,
        email,
        phone,
        year,
        designation,       
    }

   const res1 =axios.post("http://localhost:5000/faculties/add",faculties)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
    if(res1.status===400||!name||!email||!phone||!designation||!year){
        window.alert("Invalid Registration")

    }else{
        window.alert("Registration successfull")
        history.push("/")  
    }
};


    return (
        <div>
            
            <form className="formContainer" onSubmit={changeOnClick} encType="multipart/form-data">
                <h5><b>Member Registration Form</b></h5>
            {/* <div  class="alert alert-success">  </div> */}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    onChange={e=>setName(e.target.value)}
                    className="form-control" id="name" aria-describedby="name" placeholder="Enter Name" autocomplete="off" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    onChange={e=>setEmail(e.target.value)}
                    className="form-control" id="email" aria-describedby="email" placeholder="Enter Email"  autocomplete="off"/>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" 
                    onChange={e=>setPhone(e.target.value)} 
                     className="form-control" id="phone" aria-describedby="phone" placeholder="Enter Phone "autocomplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year of Study</label>
                    <input type="text" 
                    onChange={e=>setYear(e.target.value)}
                    className="form-control" id="year" aria-describedby="year" placeholder="Enter The Year " autocomplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="designation">Designation</label>
                    <input type="text" 
                    onChange={e=>setDesignation(e.target.value)}
                    className="form-control" id="designation"aria-describedby="designation"  placeholder="Enter Designation "autocomplete="off" />
                </div>
               
             
                <button  type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AddFaculty
