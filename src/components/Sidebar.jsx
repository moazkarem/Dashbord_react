import React from "react";
import { useLocation } from 'react-router-dom';
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { grey } from '@mui/material/colors';
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Tooltip from '@mui/material/Tooltip';
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import {  useNavigate } from "react-router-dom";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Array1 = [
  { icon: <HomeOutlinedIcon />, text: "Dashbord", path: "/" },
  { icon: <PeopleOutlineOutlinedIcon />, text: "Manage Team", path: "/team" },
  {
    icon: <ContactsOutlinedIcon />,
    text: "Contact Information",
    path: "/contact",
  },
  {
    icon: <ReceiptOutlinedIcon />,
    text: "Invoices Balanse",
    path: "/invoices",
  },
];
const Array2 = [
  { icon: <Person2OutlinedIcon />, text: "Profile Form", path: "/form" },
  { icon: <CalendarMonthOutlinedIcon />, text: "Calender", path: "/calender" },
  {
    icon: <LiveHelpOutlinedIcon />,
    text: "FAQ",
    path: "/faq",
  },
];
const Array3 = [
  { icon: <BarChartOutlinedIcon />, text: "Bar Char", path: "/bar" },
  { icon: <PieChartOutlineOutlinedIcon />, text: "Pie Char", path: "/pie" },
  { icon: <TimelineOutlinedIcon />, text: "Line Char", path: "/line" },
  { icon: <MapOutlinedIcon />, text: "Geography", path: "/geographu" },
];
const Sidebar = ({ open, handleDrawerClose }) => {
  let location = useLocation();
    const Navigate = useNavigate()
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          mt: 1,
          mb: 1,
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          border: "2px solid gray",
          transition:'.25s'
        }}
        alt="Travis Howard"
        src="https://www.wonderslist.com/wp-content/uploads/2021/05/Anastasia-Knyazeva-worlds-most-beautiful-girl.jpg"
      />
      <Typography align="center" fontSize={open ? 17 : 0}sx={{ transition:".25s"}}>
        Moaz Karem
      </Typography>
      <Typography align="center" fontSize={open ? 15 : 0} sx={{mb:1 , transition:".25s" , color:theme.palette.primary.dark}}>
        Admin
      </Typography>
      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
          <Tooltip title={item.text} placement="left">
          <ListItemButton
          onClick={() => {
            Navigate(item.path)
          }
          }
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              bgcolor:location.pathname === item.path ? theme.palette.mode === 'dark'? grey[900] :grey[400] : null,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          </Tooltip>
           
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={ open ? null : item.text} disablePadding sx={{ display: "block" }}>
          <Tooltip title={item.text} placement="left">
          <ListItemButton
          onClick={() => {
              Navigate(item.path)
            }
          }
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            bgcolor:location.pathname === item.path ? theme.palette.mode === 'dark'? grey[900] :grey[400] : null,
          }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          </Tooltip>
           
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
    
          <Tooltip title={ open ? null : item.text} placement="left">
          <ListItemButton
            onClick={() => {
                Navigate(item.path)
              }
            }
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              bgcolor:location.pathname === item.path ? theme.palette.mode === 'dark'? grey[900] :grey[400] : null,
            }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>

            
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
