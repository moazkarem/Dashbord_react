/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Stack, useTheme } from "@mui/material";
import Card_FirstSec from "./Card_FirstSec";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import { data1 , data2, data3 , data4 } from "./Data secon piechart/DataSecOne";
const FirstPart = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
      gap={1}
    >
      <Card_FirstSec
        icon={
          <EmailOutlinedIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12361"}
        subTitle={"Email Sent"}
        data={data1}
        increase={"+14%"}
        scheme={'red_grey'}
      />
      <Card_FirstSec
        icon={
          <PointOfSaleOutlinedIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,147"}
        subTitle={"Sales Obtained"}
        data={data2}
        scheme={"category10"}
        increase={"+21%"}
      />
      <Card_FirstSec
      icon={
        <PersonAddOutlinedIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      }
      title={"32441"}
      subTitle={"New Clients"}
      data={data3}
      scheme={"accent"}
      increase={"+5%"}
    />
    <Card_FirstSec
    icon={
      <TrafficOutlinedIcon
        sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
      />
    }
    title={"1,325,178"}
    subTitle={"Traffic Recorded"}
    data={data4}
    scheme={"dark2"}
    increase={"+65%"}
  />
    </Stack>
  );
};

export default FirstPart;
