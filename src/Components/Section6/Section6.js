import React from 'react'
import img from "../../assets/sec6img.png"
function Section6() {
  return (
   <div className=" bg-opacity">
    <div className=" content">
      
       <div className="container-fluid  row pb-3 Section6">
				<div className="section6 col-12 col-sm-12 col-md-12 col-lg-6 ">

					<span className="mt-3">
						QESSP
					</span>
<hr />
					<h5 className="">
					We developed a database system that is used to collect key performance indicator data and assessment results from all schools across Ethiopia (33,000+) on a monthly, quarterly and annual basis.
					</h5>
				</div>
				<div className="sec6img align-self-center container-fluid  col-12 col-sm-12 col-md-12 col-lg-6">
					<img className="img-fluid mx-auto d-block" src={img} alt="" />
				</div>
			</div>
         </div>
    </div>
  )
}

export default Section6