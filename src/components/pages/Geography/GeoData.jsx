import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { geo } from "./FeaturesGeo";
const data = [
  {
    id: "AFG",
    value: 52358,
  },
  {
    id: "AGO",
    value: 549130,
  },
  {
    id: "ALB",
    value: 100026,
  },
  {
    id: "ARE",
    value: 270501,
  },
  {
    id: "ARG",
    value: 574241,
  },
  {
    id: "ARM",
    value: 449362,
  },
  {
    id: "ATA",
    value: 160062,
  },
  {
    id: "ATF",
    value: 113,
  },
  {
    id: "AUT",
    value: 647477,
  },
  {
    id: "AZE",
    value: 714548,
  },
  {
    id: "BDI",
    value: 970419,
  },
  {
    id: "BEL",
    value: 846047,
  },
  {
    id: "BEN",
    value: 741210,
  },
  {
    id: "BFA",
    value: 96886,
  },
  {
    id: "BGD",
    value: 875263,
  },
  {
    id: "BGR",
    value: 805962,
  },
  {
    id: "BHS",
    value: 587731,
  },
  {
    id: "BIH",
    value: 25796,
  },
  {
    id: "BLR",
    value: 975002,
  },
  {
    id: "BLZ",
    value: 253539,
  },
  {
    id: "BOL",
    value: 61148,
  },
  {
    id: "BRN",
    value: 599879,
  },
  {
    id: "BTN",
    value: 804094,
  },
  {
    id: "BWA",
    value: 848365,
  },
  {
    id: "CAF",
    value: 893286,
  },
  {
    id: "CAN",
    value: 881389,
  },
  {
    id: "CHE",
    value: 679218,
  },
  {
    id: "CHL",
    value: 435703,
  },
  {
    id: "CHN",
    value: 591638,
  },
  {
    id: "CIV",
    value: 7513,
  },
  {
    id: "CMR",
    value: 748932,
  },
  {
    id: "COG",
    value: 478052,
  },
  {
    id: "COL",
    value: 334962,
  },
  {
    id: "CRI",
    value: 520844,
  },
  {
    id: "CUB",
    value: 766685,
  },
  {
    id: "-99",
    value: 215024,
  },
  {
    id: "CYP",
    value: 675060,
  },
  {
    id: "CZE",
    value: 585826,
  },
  {
    id: "DEU",
    value: 728611,
  },
  {
    id: "DJI",
    value: 919823,
  },
  {
    id: "DNK",
    value: 434780,
  },
  {
    id: "DOM",
    value: 951456,
  },
  {
    id: "DZA",
    value: 546513,
  },
  {
    id: "ECU",
    value: 355405,
  },
  {
    id: "EGY",
    value: 440874,
  },
  {
    id: "ERI",
    value: 718474,
  },
  {
    id: "ESP",
    value: 17124,
  },
  {
    id: "EST",
    value: 593106,
  },
  {
    id: "ETH",
    value: 955396,
  },
  {
    id: "FIN",
    value: 424486,
  },
  {
    id: "FJI",
    value: 379040,
  },
  {
    id: "FLK",
    value: 451271,
  },
  {
    id: "FRA",
    value: 359105,
  },
  {
    id: "GAB",
    value: 893862,
  },
  {
    id: "GBR",
    value: 916773,
  },
  {
    id: "GEO",
    value: 942191,
  },
  {
    id: "GHA",
    value: 11158,
  },
  {
    id: "GIN",
    value: 829694,
  },
  {
    id: "GMB",
    value: 504194,
  },
  {
    id: "GNB",
    value: 28194,
  },
  {
    id: "GNQ",
    value: 642770,
  },
  {
    id: "GRC",
    value: 760131,
  },
  {
    id: "GTM",
    value: 197593,
  },
  {
    id: "GUY",
    value: 221162,
  },
  {
    id: "HND",
    value: 307105,
  },
  {
    id: "HRV",
    value: 435263,
  },
  {
    id: "HTI",
    value: 230508,
  },
  {
    id: "HUN",
    value: 381396,
  },
  {
    id: "IDN",
    value: 941991,
  },
  {
    id: "IND",
    value: 23687,
  },
  {
    id: "IRL",
    value: 944858,
  },
  {
    id: "IRN",
    value: 603676,
  },
  {
    id: "IRQ",
    value: 977388,
  },
  {
    id: "ISL",
    value: 753239,
  },
  {
    id: "ISR",
    value: 685547,
  },
  {
    id: "ITA",
    value: 756600,
  },
  {
    id: "JAM",
    value: 824580,
  },
  {
    id: "JOR",
    value: 336425,
  },
  {
    id: "JPN",
    value: 392969,
  },
  {
    id: "KAZ",
    value: 744665,
  },
  {
    id: "KEN",
    value: 689978,
  },
  {
    id: "KGZ",
    value: 391989,
  },
  {
    id: "KHM",
    value: 2419,
  },
  {
    id: "OSA",
    value: 107483,
  },
  {
    id: "KWT",
    value: 319462,
  },
  {
    id: "LAO",
    value: 716437,
  },
  {
    id: "LBN",
    value: 149076,
  },
  {
    id: "LBR",
    value: 991577,
  },
  {
    id: "LBY",
    value: 232061,
  },
  {
    id: "LKA",
    value: 939747,
  },
  {
    id: "LSO",
    value: 721700,
  },
  {
    id: "LTU",
    value: 214899,
  },
  {
    id: "LUX",
    value: 173779,
  },
  {
    id: "LVA",
    value: 16718,
  },
  {
    id: "MAR",
    value: 927996,
  },
  {
    id: "MDA",
    value: 667448,
  },
  {
    id: "MDG",
    value: 599963,
  },
  {
    id: "MEX",
    value: 60262,
  },
  {
    id: "MKD",
    value: 584360,
  },
  {
    id: "MLI",
    value: 325644,
  },
  {
    id: "MMR",
    value: 105978,
  },
  {
    id: "MNE",
    value: 899174,
  },
  {
    id: "MNG",
    value: 154539,
  },
  {
    id: "MOZ",
    value: 149897,
  },
  {
    id: "MRT",
    value: 314431,
  },
  {
    id: "MWI",
    value: 427509,
  },
  {
    id: "MYS",
    value: 405539,
  },
  {
    id: "NAM",
    value: 300883,
  },
  {
    id: "NCL",
    value: 955138,
  },
  {
    id: "NER",
    value: 939565,
  },
  {
    id: "NGA",
    value: 936602,
  },
  {
    id: "NIC",
    value: 408721,
  },
  {
    id: "NLD",
    value: 994741,
  },
  {
    id: "NOR",
    value: 702103,
  },
  {
    id: "NPL",
    value: 272346,
  },
  {
    id: "NZL",
    value: 975414,
  },
  {
    id: "OMN",
    value: 536563,
  },
  {
    id: "PAK",
    value: 734122,
  },
  {
    id: "PAN",
    value: 141913,
  },
  {
    id: "PER",
    value: 799250,
  },
  {
    id: "PHL",
    value: 460295,
  },
  {
    id: "PNG",
    value: 304739,
  },
  {
    id: "POL",
    value: 414132,
  },
  {
    id: "PRI",
    value: 800288,
  },
  {
    id: "PRT",
    value: 231327,
  },
  {
    id: "PRY",
    value: 160141,
  },
  {
    id: "QAT",
    value: 800215,
  },
  {
    id: "ROU",
    value: 310749,
  },
  {
    id: "RUS",
    value: 0,
  },
  {
    id: "RWA",
    value: 537026,
  },
  {
    id: "ESH",
    value: 413136,
  },
  {
    id: "SAU",
    value: 372154,
  },
  {
    id: "SDN",
    value: 760566,
  },
  {
    id: "SDS",
    value: 925941,
  },
  {
    id: "SEN",
    value: 208622,
  },
  {
    id: "SLB",
    value: 973911,
  },
  {
    id: "SLE",
    value: 913879,
  },
  {
    id: "SLV",
    value: 820582,
  },
  {
    id: "ABV",
    value: 563831,
  },
  {
    id: "SOM",
    value: 658852,
  },
  {
    id: "SRB",
    value: 773809,
  },
  {
    id: "SUR",
    value: 840661,
  },
  {
    id: "SVK",
    value: 633004,
  },
  {
    id: "SVN",
    value: 737192,
  },
  {
    id: "SWZ",
    value: 878866,
  },
  {
    id: "SYR",
    value: 582015,
  },
  {
    id: "TCD",
    value: 939782,
  },
  {
    id: "TGO",
    value: 640069,
  },
  {
    id: "THA",
    value: 85323,
  },
  {
    id: "TJK",
    value: 964586,
  },
  {
    id: "TKM",
    value: 986466,
  },
  {
    id: "TLS",
    value: 283320,
  },
  {
    id: "TTO",
    value: 280876,
  },
  {
    id: "TUN",
    value: 493960,
  },
  {
    id: "TUR",
    value: 572022,
  },
  {
    id: "TWN",
    value: 37438,
  },
  {
    id: "TZA",
    value: 822361,
  },
  {
    id: "UGA",
    value: 280549,
  },
  {
    id: "UKR",
    value: 59690,
  },
  {
    id: "URY",
    value: 460299,
  },
  {
    id: "USA",
    value: 607395,
  },
  {
    id: "UZB",
    value: 823897,
  },
  {
    id: "VEN",
    value: 791058,
  },
  {
    id: "VNM",
    value: 308770,
  },
  {
    id: "VUT",
    value: 182300,
  },
  {
    id: "PSE",
    value: 338961,
  },
  {
    id: "YEM",
    value: 205425,
  },
  {
    id: "ZAF",
    value: 799094,
  },
  {
    id: "ZMB",
    value: 754717,
  },
  {
    id: "ZWE",
    value: 598989,
  },
  {
    id: "KOR",
    value: 759983,
  },
];
const GeoData = ({ isDashbord = false }) => {
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          borderRadius: "5px",
          height: isDashbord ? '300px' :'75vh',
          border:isDashbord ? null : ` 1px solid ${theme.palette.text.primary}`,
          width: "95%",
          mx: "auto",
        }}
      >
        <ResponsiveChoropleth
          projectionScale={ isDashbord? 110: 210}
          data={data}
          features={geo.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="spectral"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={false}
          graticuleLineColor="#dddddd"
          borderWidth={1.5}
          borderColor="#fff"
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
            {
              id: "gradient",
              type: "linearGradient",
              colors: [
                {
                  offset: 0,
                  color: "#000",
                },
                {
                  offset: 100,
                  color: "inherit",
                },
              ],
            },
          ]}
          fill={[
            {
              match: {
                id: "CAN",
              },
              id: "dots",
            },
            {
              match: {
                id: "CHN",
              },
              id: "lines",
            },
            {
              match: {
                id: "ATA",
              },
              id: "gradient",
            },
          ]}
          legends={

            isDashbord ? [] : [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -30,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000000",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          }
        />
      </Box>
    </div>
  );
};

export default GeoData;
