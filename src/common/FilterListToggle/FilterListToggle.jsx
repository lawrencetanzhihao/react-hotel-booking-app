import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const FilterListToggle = ({ options, value, selectToggle }) => {
  return (
    <ToggleButtonGroup value={value} exclusive onChange={selectToggle}>
      {options.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterListToggle;
