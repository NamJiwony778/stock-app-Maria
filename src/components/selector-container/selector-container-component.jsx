import React, { useState } from "react";
import StockSymbolInput from "../stock-symbol-input/stock-symbol-input-component";
import TimeWindow from "../time-window/time-window-component";
import SocialMedia from "../social-media/social-media-component";
import "../../styles/styles.scss";

const SelectorContainer = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  return (
    <div className="container">
      <StockSymbolInput
        stockSymbol={stockSymbol}
        setStockSymbol={setStockSymbol}
      />

      <SocialMedia />
      <TimeWindow stockSymbol={stockSymbol} />
    </div>
  );
};

export default SelectorContainer;
