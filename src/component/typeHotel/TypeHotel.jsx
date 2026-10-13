import './TypeHotel.css';
import hotel_types from '../../data/type.json';

const PropertyList = () => {
	return (
		<div className="typeHotels">
			{hotel_types.map((hotel, index) => {
				return (
					<div key={index}>
						<div className="typeHotelsItem">
							<img src={hotel.image} alt="" className="typeHotelsImg" />
							<div className="typeHotelsTitles">
								<h1>{hotel.name}</h1>
								<h2>{hotel.count} hotels</h2>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PropertyList;