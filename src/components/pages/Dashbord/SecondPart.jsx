import React from "react";
import { Box, Stack, useTheme, IconButton } from "@mui/material";
import LineData from "../Line/LineData";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const SecondPart = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack direction={"row"} flexWrap={"wrap"} mt={3} gap={1.5}>
        <Paper sx={{ maxWidth: "900px", flexGrow: 1, minWidth: "400px" }}>
          <Stack
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            flexWrap={"wrap"}
            direction={"row"}
          >
            <Box>
              <Typography
                color={theme.palette.secondary.main}
                mb={1}
                mt={2}
                ml={4}
                variant="h6"
                fontWeight={700}
              >
                Reveneu Generated
              </Typography>

              <Typography variant="body2" ml={4}>
                $59,142,65
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon />
              </IconButton>
            </Box>
          </Stack>

          <LineData isDashbord={true} />
        </Paper>

        <Box
          sx={{
            height: "380px",
            overflow: "auto",
            minWidth: "250px",
            flexGrow: 1,
          }}
        >
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight="bold"
              p={1.2}
              variant="h6"
            >
              Recent Transaction{" "}
            </Typography>
          </Paper>

          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: "15px",
            }}
          >
            <Box p={2} direction={"column"}>
              <Typography fontWeight={600} variant="body1">
                {" "}
                test one{" "}
              </Typography>
              <Typography variant="body2"> test two </Typography>
            </Box>

            <Typography variant="body1"> test three </Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              variant="body2"
            >
              $$$$
            </Typography>
          </Paper>

          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: "15px",
            }}
          >
            <Box p={2} direction={"column"}>
              <Typography fontWeight={600} variant="body1">
                {" "}
                test one{" "}
              </Typography>
              <Typography variant="body2"> test two </Typography>
            </Box>

            <Typography variant="body1"> test three </Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              variant="body2"
            >
              $$$$
            </Typography>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: "15px",
            }}
          >
            <Box p={2} direction={"column"}>
              <Typography fontWeight={600} variant="body1">
                {" "}
                test one{" "}
              </Typography>
              <Typography variant="body2"> test two </Typography>
            </Box>

            <Typography variant="body1"> test three </Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              variant="body2"
            >
              $$$$
            </Typography>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: "15px",
            }}
          >
            <Box p={2} direction={"column"}>
              <Typography fontWeight={600} variant="body1">
                {" "}
                test one{" "}
              </Typography>
              <Typography variant="body2"> test two </Typography>
            </Box>

            <Typography variant="body1"> test three </Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              variant="body2"
            >
              $$$$
            </Typography>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: "15px",
            }}
          >
            <Box p={2} direction={"column"}>
              <Typography fontWeight={600} variant="body1">
                {" "}
                test one{" "}
              </Typography>
              <Typography variant="body2"> test two </Typography>
            </Box>

            <Typography variant="body1"> test three </Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              variant="body2"
            >
              $$$$
            </Typography>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: "15px",
            }}
          >
            <Box p={2} direction={"column"}>
              <Typography fontWeight={600} variant="body1">
                {" "}
                test one{" "}
              </Typography>
              <Typography variant="body2"> test two </Typography>
            </Box>

            <Typography variant="body1"> test three </Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              variant="body2"
            >
              $$$$
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </div>
  );
};

export default SecondPart;
