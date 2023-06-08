import { Container, Grid, Input, Button, AppBar } from "@mui/material";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { EmployeeDataEntry } from "../components/AllEmployeeDataTable";
import EmployeeService from "../Service/EmployeeService";

export default function CarsDetailSite() {
  const navigate = useNavigate();

  let { id } = useParams();

  const [employee, setEmployee] = useState<EmployeeDataEntry>();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    EmployeeService().getEmployeeById(Number(id)).then(result => setEmployee(result));}, []);

  const formik = useFormik({
    initialValues: {
      id: null,
      birth_date: "",
      first_name: "",
      last_name: "",
      gender: "",
      hire_date: "",
    },

    onSubmit: (values) => {

      handleSubmit({
        "id": Number(id),
        "birth_date": values.birth_date,
        "first_name":values.first_name,
        "last_name":values.last_name,
        "gender":values.gender,
        "hire_date":values.hire_date
      }
      );
    },
  });

  const handleSubmit = (newEmployeeData : EmployeeDataEntry) => {
    console.log(newEmployeeData);
    EmployeeService()
      .updateEmplyeeData(Number(id), newEmployeeData)

      .then((response) => {
        console.log(response);

        navigate("/");
      })

      .catch((e) => {
        postMessage(e.response.data);
      });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="App">
        {employee && (
          <>
            <AppBar />

            <Container sx={{ marginY: 5 }}>
              <>

                <p>birth_date: {employee.birth_date}</p>

                <Grid container spacing={1}>
                  <Input
                    id="birth_date"
                    name="birth_date"
                    defaultValue={formik.values.birth_date}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <p>first_name: {employee.first_name}</p>
                <Grid container spacing={1}>
                  <Input
                    id="first_name"
                    name="first_name"
                    defaultValue={formik.values.first_name}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <p>last_name: {employee.last_name}</p>
                <Grid container spacing={1}>
                  <Input
                    id="last_name"
                    name="last_name"
                    defaultValue={formik.values.last_name}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <p>hire_date: {employee.hire_date}</p>
                <Grid container spacing={1}>
                  <Input
                    id="hire_date"
                    name="hire_date"
                    defaultValue={formik.values.hire_date}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <p>gender: {employee.gender}</p>
                <Grid container spacing={1}>
                  <Input
                    id="gender"
                    name="gender"
                    defaultValue={formik.values.gender}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ marginBottom: "1rem", marginTop: "1rem" }}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <Link to="/">Back</Link>
                  </Grid>
                </Grid>
              </>
            </Container>
          </>
        )}
      </div>
    </form>
  );
}
