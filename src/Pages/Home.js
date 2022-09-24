import React from "react";
import Header from "../Components/Header/Header.js";
import Section1 from "../Components/Section1/Section1.js"
import Section2 from "../Components/Section2/Section2.js"
import Section3 from "../Components/Section3/Section3.js"
import Section4 from "../Components/Section4/Section4.js"
import Section5 from "../Components/Section5/Section5.js"
import Section6 from "../Components/Section6/Section6.js"
import Section7 from "../Components/Section7/Section7.js"
import Section8 from "../Components/Section8/Section8.js"
import Footer from "../Components/Footer/Footer.js"
function Home() {
	return (
		<div>
			{/* <Header /> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
		
		</div>
	);
}

export default Home;
