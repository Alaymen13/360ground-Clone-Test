import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../../App.css'
import logo from "../../assets/360Ground.png"
import {
    Link
} from 'react-router-dom';

function Header() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="light"
			variant="light"
			className="header "
		>
			<Container >
				<Link to="/" className="logo">
					<img src={logo} alt="logo" />
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="lists"
				>
					<Nav className="me-auto lists1"></Nav>
					<Nav className="header1">
						<Link className="Link"  to="/AboutUs">
							<h6>ABOUT US</h6>
						</Link>
						<Link  className="Link" to="/Profile">
							<h6>PROFILE</h6>
						</Link>
						<Link className="Link" to="/Products">
							<h6>PRODUCTS</h6>
						</Link>
						<Link  className="Link" to="/Services">
							<h6>SERVICES</h6>
						</Link>
						<Link className="Link" to="/Blog">
							<h6>BLOG</h6>
						</Link>
						<Link className="Link" to="/Contact">
							<h6>CONTACT</h6>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
