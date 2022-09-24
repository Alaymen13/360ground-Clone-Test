import React from "react";
import Sec1img from "../../assets/sec1img.png"
import {
    Link
} from 'react-router-dom';


function Section1() {
	return (
		<div className="container ">
			<div className="row Sec1container  ">
				<div className="leftdiv col"></div>
				<span className="Sec1title text-center col-10 col-sm-9 col-md-8">
					We build scalable mobile, web & cross-platform
					applications
				</span>
				<div className="rightdiv col"></div>
			</div>
			<div>
				<h5 className="Sec1subtitle text-center mt-3">
					Design, development & strategy
				</h5>
			</div>
<div className="icon11 align-items-center row pt-2">
	<div className="col-2">
	</div>
	<div className="col-2">
	</div>
	<div className="col-2">
	</div>
			<Link to="/AboutUs" className="icon1 col-2 align-items-center ">
				<i class="fa fa-arrow-down" aria-hidden="true"></i>
			</Link>
			<div className="col-2">
	</div>
			<div className="col-2">
	</div>
</div>

			<div className="sec1img container ">
				<i class="fa-solid fa-arrow-down"></i>
				<img
					src={Sec1img}
					className="img-fluid mx-auto d-block"
				/>
			</div>
		</div>
	);
}

export default Section1;
