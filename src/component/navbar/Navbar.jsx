import './Navbar.css'; // import Css
import NavbarItem from './NavbarItem';

function Navbar() {
	return (
		<div>
			<div className="navbar-header">
				<div className="navbar-container">
					<h2 className="navbar-title">Booking Website</h2>
					<div className="navbar-items">
						<button className="navbar-button">Register</button>
						<button className="navbar-button">Login</button>
					</div>
				</div>
			</div>
			<NavbarItem />
		</div>
	);
}

export default Navbar;