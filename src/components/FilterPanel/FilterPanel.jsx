import FilterListToggle from "../../common/FilterListToggle/FilterListToggle";
import SliderRange from "../../common/SliderRange/SliderRange";
import { ratingList } from "../../constants";
import "./FilterPanel.css";

const FilterPanel = ({
  selectedRating,
  selectedPrice,
  selectRating,
  changePrice,
  resetFilters,
}) => (
  <div>
    <div className="input-group">
      <p className="label">Price Range</p>
      <SliderRange value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className="input-group">
      <p className="label">Star Rating</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
    <button onClick={resetFilters}>Reset Filters</button>
  </div>
);

export default FilterPanel;
