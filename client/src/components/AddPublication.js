import React, { useState } from "react";
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";

const AddPublication = () => {
    

    const [title, setTitle] = useState("");
    const [organiser, setOrganiser] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [fees, setFees] = useState("");

const history = useHistory();


    const changeOnClick = e => {
        e.preventDefault();


        const publications = {
            title,organiser,details,date,fees
        }

        

        const res=axios.post("http://localhost:5000/publications/addp", publications)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
            if(res.status === 400||!title||!organiser||!details||!date||!fees){
                window.alert("Invalid Registration")
                console.log("Invalid Registration")
               
            }else{
                window.alert("Registration Successfull")
                history.push("/")  

            }
          
            
    };
    

    return (

        <div>

            <form   className="formContainer"    onSubmit={changeOnClick} encType="multipart/form-data" >
            <h5><b>Event Details Update</b></h5>
                <div className="form-group">
                    <label htmlFor="title">Event name</label>
                    <input type="text"
                        onChange={e => setTitle(e.target.value)}
                        className="form-control" id="title"  placeholder="Enter event " autocomplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="oraganiser">Organised by :</label>
                    <input type="text"
                        onChange={e => setOrganiser(e.target.value)}
                        className="form-control" id="organiser"  placeholder="Enter organiser" autocomplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Description: </label>
                    <textarea type="textarea"
                        onChange={e => setDetails(e.target.value)}
                        className="form-control" id="details"  placeholder="Enter the details"  autocomplete="off"/>
                </div>
                <div className="form-group">
                {/* <label htmlFor="date">Date: </label> */}
                    {/* <input type="text"
                        onChange={e => setDate(e.target.value)}
                        className="form-control" id="date"  placeholder="Enter Date"  autocomplete="off"/> */}
                
                    <label htmlFor="date">Date: </label><br/>
                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                </div>
                <div className="form-group">
                    <label htmlFor="fees">Fees: </label>
                    <input type="text"
                        onChange={e => setFees(e.target.value)}
                        className="form-control" id="fees"  placeholder="Enter the Fees"  autocomplete="off"/>
                </div>
                <div className="submit_div" ><button  className="submit_btn" type="submit" >Submit</button></div>
            </form>
        </div>
    )
}

export default AddPublication
