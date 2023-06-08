import { Grid, Typography, AppBar } from "@mui/material";
import tableCell from "./tableCell";

function TableHeader() {
  return (
    <div>
      <Grid container width={"100%"} position={"static"}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Typography marginLeft={1} align="left">
              EmployeeList.com
            </Typography>
          </AppBar>
        </Grid>
        {tableCell("", 0.5)}
        {tableCell("ID", 1)}
        {tableCell("First Name", 2)}
        {tableCell("Last Name", 2)}
        {tableCell("Gender", 1)}
        {tableCell("Birth Date", 2.25)}
        {tableCell("Hire Date", 2.25)}
        {tableCell("Edit", 1)}
      </Grid>
    </div>
  );
}

export default TableHeader;
