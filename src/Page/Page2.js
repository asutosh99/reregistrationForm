import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
let homePage1 = {
    hscInstitutionName: "",
    hscBoard: "CBSC",
    hscScore: "",
    sscInstitute: "",
    sscBoard: "CBSC",
    sscScore: "",
    currentPursuing: "",
    educationInstituteName: "",
    overalPercentage: "",
    currentBacklog: "",

}
function Page2() {


    const [homePage, setHomePage] = React.useState(homePage1);
    const [error, setError] = React.useState(false);


    const handleChange = (event) => {
        setHomePage({ ...homePage, hscBoard: event.target.value });
    };
    const handleChangeSscBoard = (event) => {
        setHomePage({ ...homePage, sscBoard: event.target.value });
    };
    const TextChange = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target
        setHomePage({ ...homePage, [name]: value });
        isValid();
        // console.log(homePage);
    }

    const isValid = () => {
        console.log(homePage.hscInstitutionName.indexOf(" ") !== -1);
        if (homePage.hscInstitutionName.length === 0 && homePage.hscInstitutionName.indexOf(" ") !== -1) {
            setError(true);
        }

        else if (homePage.hscScore.length === 0 && homePage.hscScore.indexOf(" ") !== -1) {
            setError(true);
        }
        else if (homePage.sscInstitute.length === 0 && homePage.sscInstitute.indexOf(" ") !== -1) {
            setError(true);
        }
        else if (homePage.sscBoard.length === 0 && homePage.sscBoard.indexOf(" ") !== -1) {
            setError(true);
        }
        else if (homePage.sscScore.length === 0 && homePage.sscScore.indexOf(" ") !== -1) {
            setError(true);
        }

        else if (homePage.educationInstituteName.length === 0 && homePage.educationInstituteName.indexOf(" ") !== -1) {
            setError(true);
        }

        else if (homePage.overalPercentage.length === 0 && homePage.overalPercentage.indexOf(" ") !== -1) {
            setError(true);
        }
        else if (homePage.currentBacklog.length === 0 && homePage.currentBacklog.indexOf(" ") !== -1) {
            setError(true);
        }
        else {
            setError(false);
        }
    }

    const onSubmit = () => {
        isValid();
        if (error === true) {
            localStorage.setItem('user', JSON.stringify(homePage));
            alert(" please fill the form correctly");
        }
        else {
            alert("Form successfully submitted ");
        }
    }

    React.useEffect(() => {
        console.log("error----->", error)
    }, [homePage, error]);
    // const fileHandler=(e)=>{
    //     console.log(e.target.value);
    // }
    return (
        <div className="App">
            <Box sx={{
                width: 400,
                boxShadow: 12,
                padding: '10px',
                backgroundColor: 'pink',
                margin: 'auto'
            }}
            >
                {/* <Button type='file' name="file" onClick={fileHandler}>
                    Choose file
                </Button> */}

                <Typography sx={{ textAlign: 'left' }}>
                    HSC Institution name *:
                </Typography>

                <Grid container spacing={2}
                    direction="row">
                    <Grid item xs={12}>
                        <TextField
                            sx={{ width: "100%", height: '50%' }}
                            label="Name"
                            variant="outlined"
                            value={homePage.hscInstitutionName}
                            name="hscInstitutionName"
                            onChange={TextChange}
                            onBlur={isValid}
                        />
                    </Grid>
                </Grid>

                {/* ------------------------------- */}
                <Typography sx={{ textAlign: 'left', marginTop: '10' }}>HSC Board </Typography>
                <FormControl>

                    <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={homePage.hscBoard}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="CBSC" control={<Radio />} label="CBSC" />
                        <FormControlLabel value="ICSC" control={<Radio />} label="ICSC" />
                        <FormControlLabel value="STATE" control={<Radio />} label="STATE    " />
                    </RadioGroup>
                </FormControl>
                {/* ------------------------- */}



                <Typography sx={{ textAlign: 'left', margin: '10' }}>
                    Score in HSC in percentage:
                </Typography>
                <Grid item xs={6}>
                    <TextField
                        sx={{ width: "100%" }}
                        label="Score"
                        variant="outlined"
                        value={homePage.hscScore || ""}
                        name="hscScore"
                        onChange={TextChange}
                        onBlur={isValid}
                    />
                </Grid>
                {/* --------------------------------------------------------------------------------- */}
                <Typography sx={{ textAlign: 'left', marginTop: '10' }}>
                    SSC Institution name:
                </Typography>
                <Grid container spacing={2}
                    direction="row">

                    <Grid item xs={12}>
                        <TextField
                            sx={{ width: "100%" }}
                            label="Name"
                            variant="outlined"
                            value={homePage.sscInstitute || ""}
                            name="sscInstitute"
                            onChange={TextChange}
                            onBlur={isValid}

                        />
                    </Grid>
                </Grid>
                {/* ----------------------- */}
                <Typography sx={{ textAlign: 'left', marginTop: '10' }}>SSC Board </Typography>
                <FormControl>

                    <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={homePage.sscBoard}
                        onChange={handleChangeSscBoard}
                    >
                        <FormControlLabel value="CBSC" control={<Radio />} label="CBSC" />
                        <FormControlLabel value="ICSC" control={<Radio />} label="ICSC" />
                        <FormControlLabel value="STATE" control={<Radio />} label="STATE    " />
                    </RadioGroup>
                </FormControl>
                {/* ------------------------- */}


                {/* ------------------------------------------------------------------------------------ */}
                <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Score in SSC in percentage </Typography>
                <Grid container spacing={2}
                    direction="row">

                    <Grid item xs={12}>
                        <TextField
                            sx={{ width: "100%" }}
                            label="Score"
                            variant="outlined"
                            value={homePage.sscScore}
                            name="sscScore"
                            onChange={TextChange}
                            onBlur={isValid}
                        />
                    </Grid>

                </Grid>
                {/* ------------------------------------------------------- */}
                <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Currently pursuing
                </Typography>
                <Grid container spacing={2}
                    direction="row">

                    <Grid item xs={12}>
                        <TextField
                            sx={{ width: "100%" }}
                            label="Currently pursuing"
                            variant="outlined"
                            value={homePage.currentPursuing}
                            name="currentPursuing"
                            onChange={TextChange}
                            onBlur={isValid}

                        />
                    </Grid>

                </Grid>
                {/* ------------------------------------------- */}
                <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Current educational institution name </Typography>
                <Grid container spacing={2}
                    direction="row">
                    <Grid item xs={12}>
                        <TextField
                            sx={{ width: "100%" }}
                            label="Name"
                            variant="outlined"
                            value={homePage.educationInstituteName}
                            name="educationInstituteName"
                            onChange={TextChange}
                            onBlur={isValid}
                        />
                    </Grid>
                </Grid>
                {/* ----------------------------------------------------------------------------------------------------------------- */}
                <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Overall percentage </Typography>
                <Grid container spacing={2}
                    direction="row">
                    <Grid item xs={12}>
                        <TextField
                            sx={{ width: "100%" }}
                            label="Percentage"
                            variant="outlined"
                            value={homePage.overalPercentage || ""}
                            name="overalPercentage"
                            onChange={TextChange}
                            onBlur={isValid}
                        />
                    </Grid>
                </Grid>
                {/* ----------------------------------------------------------------------------- */}
                <Typography sx={{ textAlign: 'left', marginTop: '10' }}>Current backlogs </Typography>
                <Grid container spacing={2}
                    direction="row">
                    <Grid item xs={12}>
                        <TextField sx={{ width: "100%" }} label="Backlogs" variant="outlined" value={homePage.currentBacklog}
                            name="currentBacklog"
                            onChange={TextChange}
                            onBlur={isValid}
                        />
                    </Grid>
                </Grid>
                {/* ------------------------------------------------ */}
            </Box>
            <Button variant="contained" onClick={onSubmit} >submit</Button>
        </div >
    );
}

export default Page2;
