import City from '../../component/city/City';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import TypeOfHotels from '../../component/typeHotel/TypeHotel';
import HotelList from '../../component/hotelList/HotelList';
import './Home.css';
import MailList from '../../component/mailList/MailList';
import Footer from '../../component/footer/Footer';

const Home = () => {
	return (
		<div >
			<Navbar />
			<Header />
			<div className="home-Container">
				<City />
				<h1 className="home-Title">Browse by property type</h1>
				<TypeOfHotels />
				<h1 className="home-Title">Homes guests love</h1>
				<HotelList />
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
