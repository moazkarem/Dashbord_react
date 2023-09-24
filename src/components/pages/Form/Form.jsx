import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";



import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from "@mui/material";
import Header from "../Header/Header";



const Form = () => {
  
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
  const emailregex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phone_regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
  //(123) 456-7890
  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      label: "User",
      value: "User",
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onSubmit = () => {
    handleClick()
  };

  return (
    <div>
    <Header  title={'Form'} subtitle={' Welcome To Your Form  '} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName) ? "First Name Is Required" : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />

          <TextField
            error={Boolean(errors.firstNam)}
            helperText={
              Boolean(errors.firstNam) ? "Last Name Is Required" : null
            }
            {...register("firstNam", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) ? "Email is required" : null}
          {...register("email", { required: true, pattern: emailregex })}
        />
        <TextField
          id="filled-basic"
          label="Contact Number"
          variant="filled"
          error={Boolean(errors.phone)}
          helperText={
            Boolean(errors.phone) ? "Contact Number is required" : null
          }
          {...register("phone", { required: true, pattern: phone_regex })}
        />
        <TextField id="filled-basic" label="Adress 1" variant="filled" />
        <TextField id="filled-basic" label="Adress 2" variant="filled" />

        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Admin"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "end" }}>
          <Button
            sx={{ fontSize: "15px", fontWeight: "700" }}
            type="submit"
            variant="contained"
          >
            Create New User
          </Button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} 
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         
          >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Added Successfully 
        </Alert>
      </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default Form;
