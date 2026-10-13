import './NavbarItem.css';
import navList from '../../data/navBar.json';

function NavbarItems() {
    return (
        <div className="navbarItem">
			<div className="navbarItem-list">
				<div className="navbarItem-list-container">
					{navList.map((navBar, index) => {
						return (
							<div
								className={
									'navbarItem-list-item ' + `${navBar.active ? 'active' : ''}`
								}
								key={index}>
								<i className={'fa ' + `${navBar.icon}`} />
								<span>{navBar.type}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
    );
}

export default NavbarItems;