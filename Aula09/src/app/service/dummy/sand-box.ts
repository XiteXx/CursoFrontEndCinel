import { IUser } from "../../shared/i-user";


const DataDummy2: IUser = {id: 1234, email: "leonardo@gmail.pt", idade: 26, activo: true, salario: 10000, dataregisto: new Date(), departamento: "IT"};

//export const DataDummy: IUser = [{...DataDummy2}];
export const DataDummy: IUser[] = [
    {id: 1, email: "leonardo@gmail.pt", idade: 26, activo: true, salario: 10000, dataregisto: new Date(), departamento: "IT"},
    {id: 2, email: "leonardo2@gmail.pt", idade: 27, activo: false, salario: 12000, dataregisto: new Date(), departamento: "IT2"},
    {id: 3, email: "leonardo3@gmail.pt", idade: 28, activo: true, salario: 14000, dataregisto: new Date(), departamento: "IT3"},
    {id: 4, email: "leonardo4@gmail.pt", idade: 29, activo: false, salario: 16000, dataregisto: new Date(), departamento: "IT4"},
    {id: 5, email: "leonardo5@gmail.pt", idade: 30, activo: true, salario: 18000, dataregisto: new Date(), departamento: "IT5"},
    {id: 6, email: "leonardo6@gmail.pt", idade: 31, activo: false, salario: 20000, dataregisto: new Date(), departamento: "IT6"},
    {id: 7, email: "leonardo7@gmail.pt", idade: 32, activo: true, salario: 22000, dataregisto: new Date(), departamento: "IT7"},

];