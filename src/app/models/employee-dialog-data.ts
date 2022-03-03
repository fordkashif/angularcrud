import { Job } from "./job";

export interface EmployeeDialogData {
    id:number;
   firstName:string;
   lastName:string;
   dateEmployed:string;
   jobs:Job[];
}
