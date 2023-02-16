import moment from "moment";

const defaultDateRange = moment().startOf("day");
export const createStockData = (data) => {
  const stocksData = [];
  for (let i = 0; i < data; i++) {
    const daysRange = moment(defaultDateRange)
      .subtract(1 * i, "day")
      .format("MM-DD-YYYY");
    const generatedPrice = Math.floor(Math.random() * 100);
    stocksData.push({
      daysRange: daysRange,
      generatedPrice: generatedPrice,
    });
  }
  const cloneData = structuredClone(stocksData);
  return cloneData;
};

const SELL = "sell";
const BUY = "buy";
const HOLD = "hold";

//preditction based on moving average
export const getRecommendation = (data) => {
  if (data && data.length === 0) {
    return;
  }
  const prices = data.map((el) => el.generatedPrice).reverse();
  const days = data.length;

  // calculate the moving average
  //sum of the prices / days
  // we're using the slice() method to extract the last days number of elements from the prices array,
  //and then using the reduce() method to sum up the values in the extracted array.
  //Finally, we're dividing the sum by the number of days to calculate the moving average.
  const movAvgs = prices.slice(-days).reduce((a, b) => a + b) / days;
  const movingAverages = movAvgs.toFixed(2);

  //price of the last day
  const lastDayPrice = data[data.length - 1].generatedPrice;
  let recommendation;
  if (lastDayPrice > movingAverages) {
    recommendation = BUY;
  } else if (lastDayPrice < movingAverages) {
    recommendation = SELL;
  } else {
    recommendation = HOLD;
  }
  return recommendation;
};

export const fakePosts = [
  "I love this stock!",
  "I hate this stock",
  "This stock is okay",
  "I'm not sure how I feel about this stock",
];

const POSITIVE = "positive";
const NEGATIVE = "negative";
const NEUTRAL = "neutral";

const sentiments = [
  { id: 0, value: POSITIVE },
  { id: 1, value: NEGATIVE },
  { id: 2, value: NEUTRAL },
];

//preditction based on sentiment analysis
export const getSocialPostRecommendation = (posts) => {
  if (!posts || posts.length === 0) {
    return "";
  }
  const postSentiments = posts.map((p) => classify(p));
  let maxSentiment = postSentiments[0].value;
  let mapOfOcurrences = {};

  for (let i in postSentiments) {
    const current = postSentiments[i].value;
    if (mapOfOcurrences[current]) {
      mapOfOcurrences[current]++;
    } else {
      mapOfOcurrences[current] = 1;
    }
    if (mapOfOcurrences[maxSentiment] < mapOfOcurrences[current]) {
      maxSentiment = current;
    }
  }
  console.log("maxSentiment", maxSentiment);
  return maxSentiment;
};

const classify = (post) => {
  return sentiments[getRndInteger(0, sentiments.length)];
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// module.exports = getRecommendation;

// const testData = [
//   {
//     daysRange: "02-16-2023",
//     generatedPrice: 10,
//   },
//   {
//     daysRange: "02-15-2023",
//     generatedPrice: 9,
//   },
//   {
//     daysRange: "02-14-2023",
//     generatedPrice: 8,
//   },
//   {
//     daysRange: "02-13-2023",
//     generatedPrice: 7,
//   },
//   {
//     daysRange: "02-12-2023",
//     generatedPrice: 6,
//   },
//   {
//     daysRange: "02-11-2023",
//     generatedPrice: 5,
//   },
//   {
//     daysRange: "02-10-2023",
//     generatedPrice: 4,
//   },
//   {
//     daysRange: "02-09-2023",
//     generatedPrice: 3,
//   },
//   {
//     daysRange: "02-08-2023",
//     generatedPrice: 2,
//   },
//   {
//     daysRange: "02-04-2023",
//     generatedPrice: 1,
//   },
// ];

// test("test data", () => {
//   expect(getRecommendation(testData)).toBe("BUY");
// });
