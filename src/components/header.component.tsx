import React from 'react';
import {Outlet, Link} from "react-router-dom"
import logo from '../images/nftt.png'
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineCode } from "react-icons/ai"
import { AiOutlineThunderbolt } from "react-icons/ai"
import { AiOutlineProfile } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"

function Header() {

    return(
        <>
        <nav className="navbar navbar-expand-md
        fixed-top navbar-dark bg-dark">

            <div className="container-fluid">

                <a className="navbar-brand" href="/">
                    <img className="rounded-circle me-2" src={logo} 
                    style={{"objectFit":"cover","border":"1px solid black","height":"50px",
                    "borderRadius":"25px","width":"50px"}} alt="logo"/> 
                    Coding_Wizard__
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" 
                aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample02">

                    <ul className="navbar-nav mx-auto mb-md-0" style={{ "width" : "450px"}}>

                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                <Link className="text-light text-decoration-none" to="/"><AiOutlineHome /> Home</Link>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                <Link className="text-light text-decoration-none" to="/Skills"><AiOutlineThunderbolt /> Skills</Link>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                <Link className="text-light text-decoration-none" to="/Projects"><AiOutlineCode /> Projects</Link>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                <Link className="text-light text-decoration-none" to="/Contact"><AiOutlineProfile /> Contact</Link>
                            </a>
                        </li>

                    </ul>

                    <button className="btn btn-outline-light">
                        <AiOutlineStar />
                    </button>
                    
                </div>

            </div>


        </nav>

        <Outlet />

        </>

    )

}

export default Header