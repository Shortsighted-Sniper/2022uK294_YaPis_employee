import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

function CraeteButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add/");
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleClick}>
      Create Employee
    </Button>
  );
}

export default CraeteButton;