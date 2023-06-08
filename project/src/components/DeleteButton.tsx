import { Paper, Grid, Button } from "@mui/material";
import EmployeeService from "../Service/EmployeeService";

function DeleteButton(id: number) {
    const handleClick = () => {
    EmployeeService().deleteEmployeeById(id);
    
  };

  return (
    <Grid item xs={1}>
      <Paper elevation={3} square>
          <Button variant="text" color="primary" onClick={handleClick}>
            Delete
          </Button>
      </Paper>
    </Grid>
  );
}

export default DeleteButton;
