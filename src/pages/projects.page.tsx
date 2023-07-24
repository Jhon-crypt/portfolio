import React from 'react';
import { AiOutlineCode } from "react-icons/ai"
import image1 from '../images/wizard.png'
import image2 from '../images/life.png'
import image3 from '../images/tbvh.png'
import image4 from '../images/phoneshopz.png'
import image5 from '../images/recap-app.netlify.app_.png'
import image6 from '../images/imagex.png'


function Projects(): JSX.Element {

    return (

        <>
        <br /> < br / >
        <div id="project" className="mt-5 py-5 pb-5 container text-light">

            <h3 className="text-center display-5 fw-bold">
                Projects <AiOutlineCode />
            </h3>

            <div className="text-center">

            <div className="row pt-4">

                <div className="col">

                    <div className="card bg-dark mb-2">

                        <img className="crad-img-top" src={image1}
                        style={{"objectFit":"cover","height":"150px"}} alt="logo"/>

                        <div className="card-img-overlay" style={{"fontWeight":"bold","border":"1px solid",
                        "backgroundColor" : "rgba(0,0,0,0.4)"}}>

                            <h4 className="card-title">
                                Wizard Ai
                            </h4>

                            <p className="card-text">Research Made Easy With Ai</p>

                            <a href="https://wizardai.vercel.app/" className="btn btn-light text-dark">
                                View <i className="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="card bg-dark mb-2">

                        <img className="crad-img-top" src={image2}
                        style={{"objectFit":"cover","height":"150px"}} alt="logo"/>

                        <div className="card-img-overlay" style={{"fontWeight":"bold","border":"1px solid","backgroundColor": "rgba(0,0,0,0.4)"}}>

                            <h4 className="card-title">
                                Life Machines
                            </h4>

                            <p>Landing page for a custom pc provider</p>

                            <a href="https://life-machines.vercel.app/" className="btn btn-light text-dark">
                                View <i className="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="card bg-dark mb-2">

                        <img className="crad-img-top" src={image3} 
                        style={{"objectFit":"cover","height":"150px"}} alt="logo"/>

                        <div className="card-img-overlay" style={{"fontWeight":"bold","border":"1px solid",
                        "backgroundColor": "rgba(0,0,0,0.4)"}}>

                            <h4 className="card-title">
                                TBVH(To be Very Honest)
                            </h4>

                            <p>A anonymous chatting site</p>

                            <a href="https://tbvh.vercel.app/" className="btn btn-light text-dark">
                                View <i className="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="card bg-dark mb-2">

                        <img className="crad-img-top" src={image4}
                        style={{"objectFit":"cover","height":"150px"}} alt="logo"/>

                        <div className="card-img-overlay" style={{"fontWeight":"bold","border":"1px solid",
                        "backgroundColor": "rgba(0,0,0,0.4)"}}>

                            <h4 className="card-title">
                                Phone-Shopz
                            </h4>

                            <p>A simple phone store landing page</p>

                            <a href="https://phoneshopz.netlify.app/" className="btn btn-light text-dark">
                                View <i className="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="card bg-dark mb-2">

                        <img className="crad-img-top" src={image5}
                        style={{"objectFit":"cover","height":"150px"}} alt="logo"/>

                        <div className="card-img-overlay" style={{"fontWeight":"bold","border":"1px solid",
                        "backgroundColor": "rgba(0,0,0,0.4)"}}>

                            <h4 className="card-title">
                                Recap 
                            </h4>

                            <p>A social media video downloader</p>

                            <a href="https://recap-app.netlify.app/" className="btn btn-light text-dark">
                                View <i className="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="card bg-dark mb-2">

                        <img className="crad-img-top" src={image6}
                        style={{"objectFit":"cover","height":"150px"}} alt="logo"/>

                        <div className="card-img-overlay" style={{"fontWeight":"bold","border":"1px solid",
                        "backgroundColor": "rgba(0,0,0,0.4)"}}>

                            <h4 className="card-title">
                                ImageX
                            </h4>

                            <p>Generate images from texts</p>

                            <a href="https://recap-app.netlify.app/" className="btn btn-light text-dark">
                                View <i className="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            </div>

        </div> 
        </>

    )

}

export default Projects