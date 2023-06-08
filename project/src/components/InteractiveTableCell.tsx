import { Paper, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function InterractiveTableCell(content: any, width: number, link: string) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };

  return (
    <Grid item xs={width}>
      <Paper elevation={3} square>
          <Button variant="outlined" color="primary" onClick={handleClick}>
            {content}
          </Button>
      </Paper>
    </Grid>
  );
}

export default InterractiveTableCell;
