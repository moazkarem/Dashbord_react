import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { GridToolbar } from "@mui/x-data-grid";
import Header from "../pages/Header/Header";
const Invoices = () => {

  const rows = [
    {
      id: 1,
      RegisterId: 123456,
      Name: "Moaz Karem",
      Age: 22,
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      city: "Cairo",
      Zipcode: 10001,
    },
    {
      id: 2,
      RegisterId: 123456,
      Name: "Rana Ehab",
      Age: 47,
      phone: "(751)179-5454",
      email: "Rana@jmail.com",
      address: "01952",
      city: "Alex",
      Zipcode: 10001,
    },
    {
      id: 3,
      RegisterId: 149375,
      Name: "Manar Ahmed",
      Age: 37,
      phone: "(751)153-5454",
      email: "Manar@jmail.com",
      address: "01952",
      city: "Cairo",
      Zipcode: 10001,
    },
    {
      id: 4,
      RegisterId: 459226,
      Name: "Ehab Ashraf",
      Age: 23,
      phone: "(624)153-5454",
      email: "Ehab@jmail.com",
      address: "01952",
      city: "Giza",
      Zipcode: 10001,
    },
    {
      id: 5,
      RegisterId: 845261,
      Name: "Asylat Karem",
      Age: 7,
      phone: "(751)953-5454",
      email: "Asylat@jmail.com",
      address: "01778",
      city: "Alex",
      Zipcode: 30004,
    },
    {
      id: 6,
      RegisterId: 753214,
      Name: "Nada Esmaeel",
      Age: 19,
      phone: "(147)153-5454",
      email: "Nada@jmail.com",
      address: "01933",
      city: "Nekla",
      Zipcode: 20001,
    },
    {
      id: 7,
      RegisterId: 951362,
      Name: "Mostafa Ashraf",
      Age: 36,
      phone: "(751)743-5454",
      email: "Mostafa@jmail.com",
      address: "01469",
      city: "London",
      Zipcode: 12546,
    },
    {
      id: 8,
      RegisterId: 357846,
      Name: "Hanan Ayman",
      Age: 47,
      phone: "(751)953-9854",
      email: "Hanan@jmail.com",
      address: "259671",
      city: "NewYork",
      Zipcode: 10236,
    },
    {
      id: 9,
      RegisterId: 951264,
      Name: "Nermeen Waeel",
      Age: 29,
      phone: "(751)153-5694",
      email: "Nermeen@jmail.com",
      address: "963250",
      city: "Giza",
      Zipcode: 10015,
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",

      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "RegisterId",
      headerName: "Register Id",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Age",
      headerName: "Age",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Zipcode",
      headerName: "Zipcode",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
    <Header  title={'Invoices'} subtitle={'List Of Invoicess Balance'} />
      <DataGrid
      checkboxSelection
      slots={{
        toolbar: GridToolbar,
      }}
        rows={rows}
        columns={columns}
      
      />
    </Box>
  );
};

export default Invoices;
