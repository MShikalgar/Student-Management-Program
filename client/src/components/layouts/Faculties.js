import React from 'react'

import spinner from "../../spinner.gif"
const faculties = ({ posts }) => {
    return (
        <>
            <div className="Fidiv">
                <div className="fi_title"><label>Member Information</label></div>
                {!posts.length ?( <img  src={spinner} alt ="loding ...."/>):(
                
                
                posts.map((facultie, key) => (
                     <div className="container1" >
                <h2>Name :{facultie.name}</h2>
                <p>Email :{facultie.email}</p>
                <p>Phone : {facultie.phone}</p>
                <p>Year : {facultie.year}</p>
                <p>Designation :{facultie.designation}</p>            
                </div>
            )) )}
               
        </div>
        </>
    );
};

export default faculties

