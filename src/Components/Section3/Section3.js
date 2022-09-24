import React from "react";
import img from "../../assets/sec3img.png"
function Section3() {
	return (
		<div className="bg-opacity3">
		<div className="content">
			<div className="sec3container row container-fluid">
				<div className=" container-fluid section3  col-12 col-sm-12 col-md-12 col-lg-6 ">
					<h6 className="">MOBILE BANKING</h6>

					<span className="">
						Meda App - Chat, Pay & Play
					</span>

					<h5 className="">
					Meda Chat is a categorically disruptive mobile app merging the gap between social media, mobile banking & entertainment creating a multi-purpose social and commerce application.
					</h5>
					<button type="button" class="btn btn-light">LEARN MORE ABOUT</button>
				</div>
				<div className="sec3img container align-self-center col-12 col-sm-12 col-md-12 col-lg-6">
					<img className="img-fluid mx-auto d-block" src={img} alt="" />
				</div>
			</div>
		</div>
		</div>
	);
}

export default Section3;
