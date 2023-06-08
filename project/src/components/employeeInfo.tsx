import { Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import employees from "../employees.json";
import EmployeeService from "../Service/EmployeeService";
import tableCell from "./tableCell";

export interface EmployeeDataEntry {
  id: number;
  birth_date: string;
  first_name: string;
  last_name: string;
  gender: string;
  hire_date: string;
}

const AllEmployeeData = () => {
  const [employeeList, setEmployeeList] = useState<EmployeeDataEntry[]>(
    []
  );

  useEffect(() => {
    EmployeeService()
      .getEmployees()
      .then((employees) => {
        setEmployeeList(employees);
      });
  }, []);

  return (
    <div>
      <Grid container>
        {employeeList.map((employee, index) => (
          <Grid container key={index}>
            {tableCell(index + 1 + ".", 0.5)}
            {tableCell(employee.id, 1)}
            {tableCell(employee.first_name, 2)}
            {tableCell(employee.last_name, 2)}
            {tableCell(employee.gender, 1)}
            {tableCell(employee.hire_date, 2.25)}
            {tableCell(employee.birth_date, 2.25)}
            {tableCell("[Edit link]", 1)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllEmployeeData;
