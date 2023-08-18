import React from 'react'
import '../../App.css';
// import fac_reg from '../../fac-register.png'
// import fac_info from '../../fac_info.png'
// import fac_pub from '../../fac_pub.gif'
// import fac_pub_reg from '../../fpr.png'


const Home = () => {
    return (
        <div className="home">

            <a href="/faculties">  <div className="section" style={{ background: "#01c3c7" }} >
                <div className="fr_section" > <label className="headsection">Association Information
               </label>
                    <label className="description">Get the details about the members of the student associations.</label>
                </div>
                {/* <div style={{}} > <img className="img_fi" src={fac_info} /></div> */}

            </div>
            </a>

            <a href="/add-faculty"><div className="section" id="fac_regist" style={{ background: "#e7de57" }} >
                <div className="fr_section" > <label className="headsection">Member Registration
               </label>
                    <label className="description">Click here to register for membership in student association.</label>
                </div>
                {/* <div style={{}} > <img className="img_fr" src={fac_reg} /></div> */}
            </div>

            </a>

            <a href="/publications"><div className="section" style={{ background: "#bd57e7" }} >
                <div className="fr_section" > <label className="headsection">Event Details
               </label>
                    <label className="description">Click here to get the details about the upcoming events.</label>
                </div>
                {/* <div style={{}} > <img className="img_pb" src={fac_pub} /></div> */}
            </div>
            </a>

            <a href="/add-publication">  <div className="section" style={{ background: "#3cb371" }} >
                <div className="fp_section" > <label className="headsection">Event Update                
               </label><br></br>
                    <label className="description">Click here to add the event.</label>
                </div>
                {/* <div style={{}} > <img className="img_fi" src={fac_pub_reg} /></div> */}

            </div>
            </a>
        </div>
    )
}

export default Home

