import React from 'react'
import "../../App.css"
// import styled from "styled-components"
const Footer = () => {
    return (
        <div className="footer">
            {/* <div className="contact_footer"> 
            <label className="contact_us">Contact Us</label>

            </div>

            <div className="copy_footer" >
                &copy;{new Date().getFullYear()}All rights Reserved. Mini Project G2 SGU
        </div> */}


            <footer class="footer">
                <div class="container bottom_border">
                    <div class="row">
                        <h2 className="cu">Contact us</h2>
                        <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">University Details</h5>
                            {/* <!--headin5_amrc--> */}
                            <p><i class="fa fa-location-arrow"></i> Sanjay Ghodawat University, Atigre, Tal-Hatkanagale, Dist-Kolhapur, Maharashtra </p>
                            <p><i class="fa fa-phone"></i>  +91 90110 39800 / 90110 22567  </p>
                            <p><i class="fa fa-phone"></i>  Toll Free : 1800 31300 1566  </p>
                            <p><i class="fa fa fa-envelope"></i>  registrar@sanjayghodawatuniversity.ac.in  </p>
                            

                        </div>


                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Mubarak Shikalgar</h5>
                            {/* <!--headin5_amrc--> */}
                            <ul class="footer_ul_amrc">
                             
                                <p><i class="fa fa-phone"></i>  +91 9920090696  </p>
                                <p><i class="fa fa fa-envelope"></i>  mubarakshp912@gmail.com </p>
                                <a style={{ textDecoration: "none" }} href="https://www.instagram.com/shikalgarmubarak/"><p><i class="fab fa-instagram"></i>  shikalgarmubarak </p></a>
                                <a style={{ textDecoration: "none" }} href="www.linkedin.com/in/mubaraks"><p><i class="fab fa-linkedin"></i>  Mubarak Shikalgar </p></a>
                            </ul>
                        </div>

                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Parth Vharakat </h5>
                            {/* <!--headin5_amrc--> */}
                            <ul class="footer_ul_amrc">
                                <p><i class="fa fa-phone"></i>  +91 7588249569  </p>
                                <p><i class="fa fa fa-envelope"></i>  vharakatp@gmail.com </p>
                                <a style={{ textDecoration: "none" }} href="https://instagram.com/parth_vhrkt?utm_medium=copy_link"><p><i class="fab fa-instagram"></i> parth_vhrkt </p></a>
                                <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/parth-vharakat-28a5271b2"><p><i class="fab fa-linkedin"></i>  Parth Vharakat </p></a>
                            </ul>
                        </div>
                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Aditi Pawar</h5>
                            {/* <!--headin5_amrc--> */}
                            <ul class="footer_ul_amrc">
                                <p><i class="fa fa-phone"></i>  +91 8625087761  </p>
                                <p><i class="fa fa fa-envelope"></i>  pawaraditi9396@gmail.com </p>
                                {/* <a style={{ textDecoration: "none" }} href=" "><p><i class="fab fa-instagram"></i>  </p></a>
                                <a style={{ textDecoration: "none" }} href=" "><p><i class="fab fa-linkedin"></i>   </p></a> */}
                            </ul>
                        </div>

                        {/* <div class=" col-sm-4 col-md  col-12 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
                             <!--headin5_amrc ends here--> 

                            <ul class="footer_ul2_amrc">
                                <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>  Tanvi Ruge  <a href=" https://twitter.com/Daydrea24048977?s=08"> https://twitter.com/Daydrea24048977?s=08</a></p></li>
                                <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>  Tejas Patil <a href="https://twitter.com/TejasPa75499016?s=08" > https://twitter.com/TejasPa75499016?s=08</a></p></li>
                                <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><br /><p>  Soham Patil <a href="https://twitter.com/Soham47986492?s=08" > https://twitter.com/Soham47986492?s=08</a></p></li>
                            </ul>
                        </div> */}
                    </div>
                </div> 


                <div class="container">
                    <ul class="foote_bottom_ul_amrc">
                        <li><a href="/">Home</a></li>
                        {/* <li><a href="http://webenlance.com">About</a></li> */}

                    </ul>
                    {/* <!--foote_bottom_ul_amrc ends here--> */}
                    <p class="text-center">Copyright @2021 | Designed by G13 Mini project group </p>

                    <ul class="social_footer_ul">
                        <li><a href="http://webenlance.com"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="http://webenlance.com"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/school/sanjayghodawatuniversity"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://instagram.com/thesarcastic_sgu?utm_medium=copy_link"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                    {/* <!--social_footer_ul ends here--> */}
                </div>

            </footer>


        </div>
    )
}

export default Footer
