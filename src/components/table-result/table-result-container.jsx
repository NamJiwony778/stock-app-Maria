import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { selectData } from "../../redux/stockDataSlice";
import {
  selectRecommendation,
  selectSocialPostsRecommendation,
  generateRecommendation,
} from "../../redux/recommendationSlice";
import { useSelector, useDispatch } from "react-redux";

const TableResult = () => {
  const data = useSelector(selectData);

  const dispatch = useDispatch();

  console.log("data", data);

  if (data.length > 0) {
    dispatch(generateRecommendation(data));
  }
  const recommendation = useSelector(selectRecommendation);
  const socialPostsRecommendation = useSelector(
    selectSocialPostsRecommendation
  );

  function createData(days, price) {
    return { days, price };
  }
  const rows = [];
  data.map((el) => rows.push(createData(el.daysRange, el.generatedPrice)));

  return (
    <>
      <TableContainer component={Paper} className="table-container">
        <Table
          sx={{ maxWidth: "100%" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.days}
                </TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="rec-container">
        <span>Recommendation by price: {recommendation}</span>
      </div>
      <div className="rec-container">
        <span>Recommendation by social media: {socialPostsRecommendation}</span>
      </div>
    </>
  );
};

export default TableResult;
