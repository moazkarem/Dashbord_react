import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
const Header = ({title , subtitle}) => {
    const theme = useTheme()
  return (
    <div>
    <Box mb={2}>
    <Typography
    color={theme.palette.info.light}
    fontWeight={'bpld'} variant='h5'>
    {title}
    </Typography>
    <Typography fontWeight={'bpld'} variant='h5'>
   {subtitle}
    </Typography>
    </Box>
    </div>
  )
}

export default Header
