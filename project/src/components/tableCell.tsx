import { Paper, Grid, Typography } from "@mui/material";

function employeeFirstName(content: any, width: number) {
  return (
    <Grid item xs={width}>
      <Paper elevation={3} square>
        <Typography marginLeft={1} align="left">
          {content}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default employeeFirstName;
