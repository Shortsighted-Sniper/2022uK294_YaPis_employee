import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { EmployeeDataEntry } from "../components/AllEmployeeDataTable";

const headers = {'Authorization': localStorage.getItem("token")};

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getEmployees: async () => {
        const data = await api.get("employee", {headers : headers});
        return data['data'];
    },
    getEmployeeById: async (employeeId : number) => {
        const url = `employee/${employeeId}`;  
        const data = await api.get(url, { headers: headers });
        return data['data'];
    },
    deleteEmployeeById: async(id : number) => {
        const url = `employee/${id}`;  
        api.delete(url, { headers: headers });
    },
    createEmployee: async(newEmployeeDataEntry: EmployeeDataEntry) =>{
        const url = `employee/`;  
        const data = await api.post(url, newEmployeeDataEntry, {headers: headers});
        return data['data'];
    },
    updateEmplyeeData: async(id : number, newEmployeeDataEntry: EmployeeDataEntry) => {
        const url = `employee/${id}`;  
        const data = await api.put(url, newEmployeeDataEntry, {headers: headers});
        return data['data'];
    }
});

export default EmployeeService;