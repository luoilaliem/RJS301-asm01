import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import SearchList from '../../component/searchList/SearchList';
import SearchPopup from '../../component/searchPopup/SearchPopup';
import './Search.css';

const Search = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="search-Container">
        <div className="search-Wrapper">
          <SearchPopup />
          <div className="search-Result">
            <SearchList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
