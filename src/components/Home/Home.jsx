import "./Home.css";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import List from "../../components/List/List";
import { dataList } from "../../constants";

const HOTELS_URL = "https://61c3e5d2f1af4a0017d99115.mockapi.io/hotels/en";

const Home = () => { 
  const [data, setData] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000]);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectRating = (event, value) => {
    !value ? null : setSelectedRating(value);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const resetFilters = () => {
    setSelectedRating(null);
    setSelectedPrice([0, 1000]);
    setSearchInput("");
  };

  useEffect(() => {
    fetch(HOTELS_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((apiData) => {
        console.log("apiData", apiData);
        setData(apiData); // Set fetched data to state
      })
      .catch((error) => {
        console.error("There was a problem fetching the data: ", error);
      });
  }, []);

  useEffect(() => {
    applyFilters(); // Trigger filtering whenever filter criteria change
  }, [selectedRating, searchInput, selectedPrice]);

  const applyFilters = () => {
    // Using the static data from dataList
    let updatedList = dataList;

    // Using dynamic data that is called from the API response
    // let updatedList = [...data];

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const [minPrice, maxPrice] = selectedPrice;
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // Update state to store filtered results
    setData(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  return (
    <div className="home">
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />

      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* Side Panel */}
          <FilterPanel
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
            resetFilters={resetFilters}
          />
        </div>
        {/* List & Empty View */}
        <div className="home_list-wrap">
          {resultsFound ? (
            <List data={data} />
          ) : (
            <p>No results found. Please reset the filters</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
