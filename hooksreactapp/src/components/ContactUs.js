import React from 'react';
//import Footer from './Footer';
//import Navbar from './Navbar';

function ContactUs(props) {
    return (
        <div>
            
            <div className="container">

                <div className="row">
                    <div className="col-12 col-sm-10 mt-4">
                        <div className="col-sm-8">
                            <h3 className="display-4">Contact Us</h3>
                            <div id="conform">   
                                <form action="mailto:janedoe@geemail.com" method="POST"
                                encType="text/plain" name="EmailForm">
                            Name:<br/> <input type="text" size="40" name="ContactName"/> <br/>
                            Message:   <br/> <textarea name="ContactComment" rows="6" cols="40"></textarea><br/>
                                    <input type="submit" value="Submit"/> 
                                </form>
                            </div>
                        </div>
                    
                    </div>
                </div>

            </div>  
                  
        </div>
    );
}

export default ContactUs;