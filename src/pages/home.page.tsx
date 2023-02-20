import React from 'react';
import logo from '../images/nftt.png'

function Home(){

    return (
        <>
        <br /><br />
        <div id="home" className="mt-5 px-4 pt-3 mb-5 text-center text-light">

            <img className="d-block mx-auto mb-4" src={logo}
                style={{ "objectFit": "cover", "border": "1px solid black", "height": "200px", "borderRadius": "100px", "width": "200px" }}
                alt="Avatar" />

            <h1 className="display-5 fw-bold">Hi, I'm John(Coding_Wizard__)</h1>

            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">I'm yet another passionate tech bro as they usually call it, focused on building web specific
                    applications, Constantly learning new stuff, doing my best in making the world a better place.</p>

            </div>

        </div>
        </>
    )

}

export default Home