import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const headers = { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpc2hjaGFuLnlhbkBnbWFpbC5jb20iLCJpYXQiOjE2ODYxNDUyNzMsImV4cCI6MTY4NjE0ODg3Mywic3ViIjoiMiJ9.F0-bDRSgqC9WmDGz2iep1S0MJI5Kqg_3Yn51iCpfmKM`};

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getEmployees: async () => {
        const data = await api.get("employee", {headers : headers});
        return data['data'];
    },
    getEmeployeeById: async (employeeId : number) => {
        const url = `employee/${employeeId}`;  
        const data = await api.get(url, { headers: headers });
        return data['data'];
    }
});

export default EmployeeService;