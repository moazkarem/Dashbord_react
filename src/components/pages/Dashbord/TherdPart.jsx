import React from "react";
import BarData from "../BarChart/BarData";
import PieData from "../BieChart/PieData";
import GeoData from "../Geography/GeoData";
import { Stack, useAutocomplete } from "@mui/material";
import Paper from "@mui/material/Paper";
import {  Typography, useTheme } from "@mui/material";
const TherdPart = () => {
  const theme = useTheme()
  return (
    
    <Stack direction={"row"} gap={2} mt={2}>
      <Paper sx={{ width: "33%" }}>
      <Typography 
      color={theme.palette.secondary.main}
      fontWeight={600}
      variant="h6"
      sx={{padding:"30px 30px 0 30px"}}
      > 
      Campaign
      </Typography>
        <PieData isDashbord={true} />
      </Paper>

      <Paper sx={{ width: "33%", height: "390px" , px:'10px' }}>
      <Typography 
      color={theme.palette.secondary.main}
      fontWeight={600}
      variant="h6"
      sx={{padding:"30px 30px 0 30px"}}
      > 
      Sales Quantity
      </Typography>
        <BarData isDashbord={true} />
      </Paper>

      <Paper sx={{ width: "33%", height: "390px" }}> 

      <Typography 
      color={theme.palette.secondary.main}
      fontWeight={600}
      variant="h6"
      sx={{padding:"30px 30px 10px 30px"}}
      > 
      Geography Based Traffic
      </Typography>

        <GeoData isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default TherdPart;
