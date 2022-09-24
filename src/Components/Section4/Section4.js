import React from 'react'
import img from "../../assets/sec4img.png"
function Section4() {
  return (
    <div className="sec4bg">
     <div className="container-fluid  row pb-3 ">
				<div className="  section4 col-12 col-sm-12 col-md-12 col-lg-6 ">
					<h6 className="">MOBILE BANKING</h6>

					<span className="">
						Amole mPOS
					</span>
<hr />
					<h5 className="">
					We designed, developed & maintain Amole mPOS mobile & web app. It’s a multifaceted Mobile Point-of-Sale platform for Banks, Agents, and Merchants. Project involved design and development work for Mobile, POS Terminal and Web platforms.
					</h5>
						<button type="button" class="btn btn-dark">LEARN MORE ABOUT</button>
				</div>
				<div className="sec4img align-self-center  col-12 col-sm-12 col-md-12 col-lg-6">
					<img className="img-fluid mx-auto d-block" src={img} alt="" />
				</div>
			</div>
    </div>
  )
}

export default Section4