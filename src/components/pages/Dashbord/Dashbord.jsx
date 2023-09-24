import React from 'react'
import FirstPart from './FirstPart'
import SecondPart from './SecondPart'
import TherdPart from './TherdPart'
import { Box, Button ,Stack } from "@mui/material";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Header from '../Header/Header';

const Dashbord = () => {
  
  return (
    <div>
  <Stack   justifyContent={'space-between'} alignItems={'center'} direction={"row"} >
  <Header title={'Dashbord'} subtitle={' Welcome To Your Dashbord '}/>
  <Box sx={{textAlign:"right"}}>
  
  <Button sx={{p:"6px 8px" , my:1.5}} variant='contained'> <DownloadOutlinedIcon /> Download All </Button>
  </Box>
  </Stack>
      <FirstPart />
      <SecondPart />
      <TherdPart />
    </div>
  )
}

export default Dashbord
