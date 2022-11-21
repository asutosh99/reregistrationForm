import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
let homePage1 = {
  firstName: "",
  lastName: "",
  date: "",
  Email: "",
  FatherFirstName: "",
  FatherLastName: "",
  MotherFirstName: "",
  MotherLastName: "",
  Gender: "female",
  Nationality: "",
  HomeAddress: "",
  City: "",
  Country: "",
  TelephonePhone: "",
  TelephoneHome: ""
}
function Page1() {


  const [homePage, setHomePage] = React.useState(homePage1);
  const [error, setError] = React.useState(false);


  const handleChange = (event) => {
    setHomePage({ ...homePage, Gender: event.target.value });
  };

  const TextChange = (e) => {
    const { name, value } = e.target
    setHomePage({ ...homePage, [name]: value });
    isValid();
  }

  const isValid = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    console.log(regex.test(homePage.Email));
    if (homePage.firstName.length === 0 && homePage.firstName.indexOf(" ") === -1) {
      setError(true);
    }
    else if (homePage.lastName.length === 0 && homePage.lastName.indexOf(" ") === -1) {
      setError(true);
    }
    else if (homePage.date.length === 0 && homePage.date.indexOf(" ") === -1) {
      setError(true);
    }
    else if (homePage.Email.length === 0 && !regex.test(homePage.Email)) {
      setError(true);
    }
    else if (homePage.FatherFirstName.length === 0 && homePage.FatherFirstName.indexOf(" ") === -1) {
      setError(true);
    }
    else if (homePage.FatherLastName.length === 0 && homePage.FatherLastName.indexOf(" ") === -1) {
      setError(true);
    }
    else if (homePage.MotherFirstName.length === 0 && homePage.MotherFirstName.indexOf(" ") === -1) {
      setError(true);
    }

    else if (homePage.MotherLastName.length === 0 && homePage.MotherLastName.indexOf(" ") === -1) {
      setError(true);
    }

    else if (homePage.Nationality.length === 0 && homePage.Nationality.indexOf(" ") === -1) {
      setError(false);
    }

    else if (homePage.HomeAddress.length !== 0 && homePage.HomeAddress.indexOf(" ") === -1) {
      setError(false);
    }
    else if (homePage.City.length !== 0 && homePage.City.indexOf(" ") === -1) {
      setError(false);
    }
    else if (homePage.Country.length !== 0 && homePage.Country.indexOf(" ") === -1) {
      setError(false);
    }
    else if (homePage.TelephoneHome.length > 10 && homePage.Country.indexOf(" ") === -1 && !Number.isInteger(homePage.TelephoneHome)) {
      setError(false);
    }

    if (homePage.TelephonePhone.length < 10) {
      setError(true);
    }
  }

  const onSubmit = () => {
    isValid();
    if (error === true) {
      localStorage.setItem('user', JSON.stringify(homePage));
      alert(" please fill the form correctly")
    }
    else {
      alert("Form successfully submitted ");
    }
  }

  React.useEffect(() => {
    console.log("error----->", error)
  }, [homePage, error]);

  return (
    <div className="App">
      <Box sx={{
        width: 400,
        padding: '10px',
        boxShadow: 12,
        backgroundColor: 'pink',
        margin: 'auto'
      }}
      >
        <Typography sx={{ textAlign: 'left' }}>
          name*:
        </Typography>

        <Grid container spacing={2}
          direction="row">

          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%", height: '50%' }}
              label="first"
              variant="outlined"
              value={homePage.firstName}
              name="firstName"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              label="last"
              variant="outlined"
              value={homePage.lastName || ""}
              name="lastName"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>

        </Grid>
        <Typography sx={{ textAlign: 'left', margin: '10' }}>
          Date of Birth:
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="MM/DD/YYYY"
            value={homePage.date}
            onChange={(newValue) => {
              setHomePage({ ...homePage, date: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
            onBlur={isValid}

          />
        </LocalizationProvider>
        {/* --------------------------------------------------------------------------------- */}
        <Typography sx={{ textAlign: 'left', marginTop: '10' }}>
          Email:
        </Typography>
        <Grid container spacing={2}
          direction="row">

          <Grid item xs={12}>
            <TextField
              sx={{ width: "100%" }}
              label="Email"
              variant="outlined"
              value={homePage.Email || ""}
              name="Email"
              onChange={TextChange}
              onBlur={isValid}

            />
          </Grid>
        </Grid>
        {/* ------------------------------------------------------------------------------------ */}
        <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Fathers name </Typography>
        <Grid container spacing={2}
          direction="row">

          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              label="first name"
              variant="outlined"
              value={homePage.FatherFirstName}
              name="FatherFirstName"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              label="last name"
              variant="outlined"
              value={homePage.FatherLastName}
              name="FatherLastName"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>
        </Grid>
        {/* ------------------------------------------------------- */}
        <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Mother's name </Typography>
        <Grid container spacing={2}
          direction="row">

          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              label="first name"
              variant="outlined"
              value={homePage.MotherFirstName}
              name="MotherFirstName"
              onChange={TextChange}
              onBlur={isValid}

            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              label="last name"
              variant="outlined"
              value={homePage.MotherLastName}
              name="MotherLastName"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>
        </Grid>
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Gender </Typography>
        <FormControl>

          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={homePage.Gender}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        {/* ----------------------------------------------------------------------------- */}
        <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Nationality </Typography>
        <Grid container spacing={2}
          direction="row">

          <Grid item xs={12}>
            <TextField
              sx={{ width: "100%" }}
              label="first name"
              variant="outlined"
              value={homePage.Nationality}
              name="Nationality"
              onChange={TextChange}
              onBlur={isValid}

            />
          </Grid>

        </Grid>
        {/* ----------------------------------------------------------------------------- */}
        <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Home address </Typography>
        <Grid container spacing={2}
          direction="row">

          <Grid item xs={12}>
            <TextField sx={{ width: "100%" }} label="Street Address" variant="outlined" value={homePage.HomeAddress}
              name="HomeAddress"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField sx={{ width: "100%" }} label="City" variant="outlined" value={homePage.City}
              name="City"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField sx={{ width: "100%" }} label="country" variant="outlined" value={homePage.Country}
              name="Country"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>

        </Grid>
        {/* ------------------------------------------------ */}

        <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Telehone -Home  </Typography>
        <Grid container spacing={2}
          direction="row">

          <Grid item xs={12}>
            <TextField sx={{ width: "100%" }} label="#### ### ####" variant="outlined" value={homePage.TelephoneHome}
              name="TelephoneHome"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>


        </Grid>
        {/* --------------------------------- */}
        <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Telehone -Phone  </Typography>
        <Grid container spacing={2}
          direction="row">

          <Grid item xs={12}>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              sx={{ width: "100%" }}
              label="#### ### ####"
              variant="outlined"
              value={homePage.TelephonePhone}
              name="TelephonePhone"
              onChange={TextChange}
              onBlur={isValid}
            />
          </Grid>
        </Grid>
      </Box>
      <Button variant="contained" onClick={onSubmit} >submit</Button>
    </div >
  );
}

export default Page1;
