/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "france",
    color: "hsl(151, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 62,
      },
      {
        x: "helicopter",
        y: 162,
      },
      {
        x: "boat",
        y: 24,
      },
      {
        x: "train",
        y: 15,
      },
      {
        x: "subway",
        y: 62,
      },
      {
        x: "bus",
        y: 166,
      },
      {
        x: "car",
        y: 235,
      },
      {
        x: "moto",
        y: 45,
      },
      {
        x: "bicycle",
        y: 285,
      },
      {
        x: "horse",
        y: 29,
      },
      {
        x: "skateboard",
        y: 84,
      },
      {
        x: "others",
        y: 219,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(173, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 44,
      },
      {
        x: "helicopter",
        y: 0,
      },
      {
        x: "boat",
        y: 157,
      },
      {
        x: "train",
        y: 126,
      },
      {
        x: "subway",
        y: 194,
      },
      {
        x: "bus",
        y: 9,
      },
      {
        x: "car",
        y: 273,
      },
      {
        x: "moto",
        y: 53,
      },
      {
        x: "bicycle",
        y: 210,
      },
      {
        x: "horse",
        y: 266,
      },
      {
        x: "skateboard",
        y: 70,
      },
      {
        x: "others",
        y: 192,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(1, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 214,
      },
      {
        x: "helicopter",
        y: 32,
      },
      {
        x: "boat",
        y: 148,
      },
      {
        x: "train",
        y: 210,
      },
      {
        x: "subway",
        y: 74,
      },
      {
        x: "bus",
        y: 67,
      },
      {
        x: "car",
        y: 261,
      },
      {
        x: "moto",
        y: 87,
      },
      {
        x: "bicycle",
        y: 229,
      },
      {
        x: "horse",
        y: 132,
      },
      {
        x: "skateboard",
        y: 184,
      },
      {
        x: "others",
        y: 257,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(28, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 204,
      },
      {
        x: "helicopter",
        y: 7,
      },
      {
        x: "boat",
        y: 232,
      },
      {
        x: "train",
        y: 105,
      },
      {
        x: "subway",
        y: 105,
      },
      {
        x: "bus",
        y: 126,
      },
      {
        x: "car",
        y: 165,
      },
      {
        x: "moto",
        y: 239,
      },
      {
        x: "bicycle",
        y: 242,
      },
      {
        x: "horse",
        y: 37,
      },
      {
        x: "skateboard",
        y: 154,
      },
      {
        x: "others",
        y: 104,
      },
    ],
  },
];

const LineData = ({ isDashbord = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashbord ? "280px" : "75vh", width: "97%" }}>
      <ResponsiveLine
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
              strokeWidth: 1,
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
        data={data}
        keys={["spanish", "Germany", "France"]}
        indexBy="year"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.25}
        innerPadding={2}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year",
          legendPosition: "middle",
          legendOffset: 35,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Min Widect / Month ",
          legendPosition: "middle",
          legendOffset: -55,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashbord ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashbord ? null : "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineData;
