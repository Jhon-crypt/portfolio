import React from 'react';

function Contact(){

    return (

        <>
        <br /><br />
        <div id="contact" className="mt-5 py-5 pb-5 container text-light">

            <h3 className="text-center display-5 fw-bold">
                Contact <i className="fa fa-address-book"></i>
            </h3>

            <div className="text-center">

            <div className="row pt-4 mx-auto" style={{ "width" : "150px" }}>

                <div className="col">

                    <div className="card bg-dark" style={{"width":"200px"}}>

                        <div className="card-body">

                            <h4 className="card-title">
                               <i className="fa fa-send"></i> Email
                            </h4>

                            <p>johnoladele690@gmail.com</p>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="card bg-dark" style={{"width":"200px"}}>

                        <div className="card-body">

                            <h4 className="card-title">
                                <i className="fa fa-github"></i> Github
                            </h4>

                            <p>https://github.com/jhon-crypt/</p>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="card bg-dark" style={{"width":"200px"}}>

                        <div className="card-body">

                            <h4 className="card-title">
                               <i className="fa fa-twitter"></i> Twitter
                            </h4>

                            <p>https://twitter.com/coding_wizard__</p>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="card bg-dark" style={{"width":"200px"}}>

                        <div className="card-body">

                            <h4 className="card-title">
                               <i className="fa fa-phone"></i> Phone
                            </h4>

                            <p>+2439061811990</p>

                        </div>

                    </div>

                </div>

            </div>

            </div>

        </div>
        </>

    )

}

export default Contact