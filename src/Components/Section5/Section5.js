import React from 'react'
import img from "../../assets/sec5img.png"
function Section5() {
  return (
    <div>
      <div className="container-fluid  row pb-5">
				<div className="section5 col-12 col-sm-12 col-md-12 col-lg-6 pt-5">

					<span className="pt-5">
						Meda Shi TV Show
					</span>
<hr />
					<h5 className="">
					Meda Shi is a live TV Game Show played on Fana TV & on the Meda Chat App every Sunday at 4:00PM.
					</h5>
				</div>
				<div className="sec4img align-self-center  col-12 col-sm-12 col-md-12 col-lg-6">
					<img className="img-fluid mx-auto d-block" src={img} alt="" />
				</div>
			</div>
    </div>
  )
}

export default Section5