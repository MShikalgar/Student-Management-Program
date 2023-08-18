import React from 'react'
import spinner from "../../spinner.gif"
const publications = ({ posts2 }) => {
    return (
        <>
            <div className="Pidiv">
                <div className="pi_title">Event Details</div>

                 {!posts2.length ?( <img  src={spinner} alt ="loding ...."/>):( 
                posts2.map((publications, key) => (
                     <div className="container1" >
                <h2>Event Name : {publications.title}</h2>
                <h4>Organised by  : {publications.organiser }</h4>
                <h4>Discription : {publications.details }</h4>
                <h4>DATE : {publications.date }</h4>
                <h4>Fees : {publications.fees }</h4>
                                        
                </div>
                )))}
        </div>
        </>
    );
};

export default publications

// main container 

// const MainContainer = styled.div`
// margin:7rem 0 ;
// `;