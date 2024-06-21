import React from 'react'

export default function Home() {
  return (
    <div className="container">
            <div className="row">
            <section className="section1">
                <div className="row">
                    <div className="col-6 section1_col1">
                        <h1>
                            Elegant and creative solutions
                        </h1>
                        <p>
                            We are team of talented designers making websites with Bootstrap
                        </p>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                    <div className="col-6">
                        <img src="https://bootstrapmade.com/demo/templates/eNno/assets/img/hero-img.png" className="img-responsive img-fluid image1" />
                    </div>
                </div>

                <div style={{color:'red'}}>
                        <h2 style={{fontFamily:"Tahoma"}}>Demo Text</h2>
                </div>
            </section>
            </div>
        </div>
  )
}
