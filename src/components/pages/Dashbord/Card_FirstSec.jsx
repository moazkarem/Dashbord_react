import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const Card_FirstSec = ({ icon, title, subTitle, data, increase, scheme }) => {
  const theme = useTheme();
  return (
    <div>
      <Paper
     
        sx={{
          minWidth: "300px",
          p: 1.5,
          display: "flex",
          flexGrow:1,
          justifyContent: "space-between",
          
        }}
      >
        <Stack gap={1}>
          {icon}
          <Typography>{title}</Typography>
          <Typography>{subTitle}</Typography>
        </Stack>

        <Stack alignItems={"center"}>
          <Box sx={{ height: "100px", width: "100px" }}>
            <ResponsivePie
              data={data}
              colors={{ scheme: scheme }}
              margin={{ top: 50, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.7}
              enableArcLinkLabels={false}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              enableArcLabels={false}
              borderWidth={1}
              theme={{
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 0,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: theme.palette.text.primary,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  container: {
                    background: theme.palette.background.default,
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
            />
          </Box>
          <Typography>{increase}</Typography>
        </Stack>
      </Paper>
    </div>
  );
};

export default Card_FirstSec;
