import Slider from "@mui/material/Slider";

const SliderRange = ({ value, changePrice }) => {
  return (
    <div>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
    </div>
  );
};

export default SliderRange;
