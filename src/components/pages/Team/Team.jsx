import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../Header/Header";
const Team = () => {
  const theme = useTheme();
  const rows = [
    {
      id: 1,
      name: "Khloud",
      email: "Khloud@jmail.com",
      age: 18,
      phone: "(656)121-5454",
      access: "Admin",
    },
    {
      id: 2,
      name: "Zead",
      email: "Zead@jmail.com",
      age: 20,
      phone: "(751)153-5454",
      access: "Admin",
    },
    {
      id: 3,
      name: "Khalid",
      email: "Khalid@jmail.com",
      age: 43,
      phone: "(951)153-953",
      access: "Admin",
    },
    {
      id: 4,
      name: "Mohamed",
      email: "Mohamed@jmail.com",
      age: 35,
      phone: "(656)121-5454",
      access: "Manager",
    },
    {
      id: 5,
      name: "Mai",
      email: "Mai@jmail.com",
      age: 28,
      phone: "(950)753-5454",
      access: "Manager",
    },
    {
      id: 6,
      name: "Amal",
      email: "Amal@jmail.com",
      age: 60,
      phone: "(325)789-1244",
      access: "User",
    },
    {
      id: 7,
      name: "Noha",
      email: "Noha@jmail.com",
      age: 14,
      phone: "(919)318-6451",
      access: "User",
    },
    {
      id: 8,
      name: "Ayman",
      email: "Ayman@jmail.com",
      age: 23,
      phone: "(721)321-5412",
      access: "User",
    },
    {
      id: 9,
      name: "Mostafa",
      email: "Mosataf@jmail.com",
      age: 45,
      phone: "(957)156-4278",
      access: "User",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
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
      field: "age",
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
      field: "access",
      headerName: "Access",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.main
                  : "#3da58a",
              p: "5px",
              width: "99px",
              textAlign: "center",
              borderRadius: "5px",
              display: "flex",
              justifiyContent: "space-between",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlinedIcon
                sx={{ fontSize: "18px", color: "#fff", mx: 1 }}
              />
            )}
            {access === "User" && (
              <LockPersonOutlinedIcon
                sx={{ fontSize: "18px", color: "#fff", mx: 2 }}
              />
            )}
            {access === "Manager" && (
              <SecurityOutlinedIcon
                sx={{ fontSize: "18px", color: "#fff", mx: 1 }}
              />
            )}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {" "}
              {access}{" "}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div>
    <Header  title={'Team'} subtitle={' Manage Your Team Members '} />
      <div style={{ height: 600, width: "98%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default Team;
