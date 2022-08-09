import React from 'react';

function Footer(props) {
    return (
        <div>

            <footer className="footer text-center mt-4">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h5 className=" mb-4">Location</h5>
                            <p className="lead mb-0">
                                27 Jane Street, John Doe
                                <br />
                                TS 5000027
                            </p>
                        </div>
                        
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h5 className=" mb-4">Around the Web</h5>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        </div>
                        
                        <div className="col-lg-4">
                            <h5 className="mb-4">About</h5>
                            <p className="lead mb-0">
                                BuyBest
                            </p>
                        </div>
                    </div>
                </div>

            </footer>
            
        </div>
    );
}

export default Footer;