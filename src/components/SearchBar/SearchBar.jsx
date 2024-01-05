import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <FaSearch className="searchBar-icon" />
      <input
        type="text"
        placeholder="Enter location or hotel name"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
