import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { generateStockData } from "../../redux/stockDataSlice";

const TimeWindow = (props) => {
  const [timeRange, setTimeRange] = useState(0);
  const { stockSymbol } = props;
  const dispatch = useDispatch();

  //stock symbol is required
  if (stockSymbol.length > 0) {
    dispatch(generateStockData(timeRange));
  } else {
    dispatch(generateStockData(0));
  }

  const handleChange = (event) => {
    setTimeRange(event.target.value);
    dispatch(generateStockData(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Time Range</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timeRange}
          label="Time Range"
          onChange={handleChange}
        >
          <MenuItem value={10} key={10}>
            10 days
          </MenuItem>
          <MenuItem key={20} value={20}>
            20 days
          </MenuItem>
          <MenuItem key={30} value={30}>
            30 days
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TimeWindow;
