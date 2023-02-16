import React from "react";
import { useGetStockSymbolsQuery } from "../../redux/stockSymbolsSlice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { generateSocialCount } from "../../redux/socialMediaCountSlice";
import { generateStockData } from "../../redux/stockDataSlice";
import { selectData } from "../../redux/stockDataSlice";
import { useSelector } from "react-redux";

const StockSymbolInput = (props) => {
  const {
    data: stockSymbolsData,
    isLoading,
    isError,
    error,
  } = useGetStockSymbolsQuery();

  const { stockSymbol, setStockSymbol } = props;

  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const handleChange = (event) => {
    setStockSymbol(event.target.value);
    dispatch(generateSocialCount());
    dispatch(generateStockData(data.length));
  };

  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <span>Error: {error}</span>
      </div>
    );
  }

  if (stockSymbolsData && stockSymbolsData.length > 0) {
    return (
      <Box>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Stock Symbol</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stockSymbol}
            label="stockSymbol"
            onChange={handleChange}
          >
            {stockSymbolsData &&
              stockSymbolsData.map((stocksSymbol) => (
                <MenuItem value={stocksSymbol.ticker} key={Math.random() * 100}>
                  {stocksSymbol.ticker}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    );
  }

  if (stockSymbolsData && stockSymbolsData.length === 0) {
    return (
      <div>
        <span>There are no stoks symbols</span>
      </div>
    );
  }
};

export default StockSymbolInput;
