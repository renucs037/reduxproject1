import React from 'react'

export default function Header() {
  return (
    <>
         <div className="container">
        <div className="row">
        <header>
               
    
               <div className="col-12">
                   <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                        <a className="navbar-brand" href="#">eNno</a>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarScroll">
                         <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Team</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                <button className="btn btn-secondary">Get Started</button>
                                </li>
                            </ul>
                         </div>
                       </div>
                   </nav>
               </div>
           </header>
        </div>
    </div>
    </>
  )
}
