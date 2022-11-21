import * as React from "react";
import { Box, Button, Typography } from '@mui/material'

function Page3() {

    const defaultFile = {
        file1: "",
        file2: "",
        file3: "",
        file4: ""
    }

    const [Totalfiles, setTotalFiles] = React.useState(defaultFile);

    const handlefile1 = (e) => {
        const files = e.target.files;
        console.log(files[0]);

        //check for the correct file extensiton
        var s = files[0].size
        if (s > 4 * 1024 * 1024) {
            alert("Too big");
        }
        else {
            setTotalFiles({ ...Totalfiles, file1: files[0] });
        }
    }

    const HandleFile2 = (e) => {
        const files = e.target.files;
        console.log(files[0]);

        //check for the correct file extensiton
        var s = files[0].size
        if (s > 4 * 1024 * 1024) {
            alert("Too big");
        }
        else {
            setTotalFiles({ ...Totalfiles, file2: files[0] });
        }
    }

    const handleFile3 = (e) => {
        const files = e.target.files;
        console.log(files[0]);

        //check for the correct file extensiton
        var s = files[0].size
        if (s > 4 * 1024 * 1024) {
            alert("Too big");
        }
        else {
            setTotalFiles({ ...Totalfiles, file3: files[0] });
        }
    }
    const handleFile4 = (e) => {
        const files = e.target.files;
        console.log(files[0]);

        //check for the correct file extensiton
        var s = files[0].size
        if (s > 10 * 1024 * 1024) {
            alert("Too big");
        }
        else {
            setTotalFiles({ ...Totalfiles, file4: files[0] });
        }
    }

    React.useEffect(() => {
        console.log(Totalfiles);
    }, [Totalfiles]);

    const onSubmit = () => {
        localStorage.setItem('user', JSON.stringify(Totalfiles));

        var retrievedObject = localStorage.getItem('user');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }

    return (
        <>
            <Box sx={{
                width: 400,
                boxShadow:12,
                padding: '10px',
                backgroundColor: 'pink',
                margin: 'auto'
            }}>
                <Box>
                    <Typography>Passport size photo (less than 4MB)</Typography>
                    <input
                        accept="image/*"
                        // className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handlefile1}
                    />
                </Box>
                <Box sx={{marginTop:1}}>
                    <Typography>
                        HSC marksheet (less than 4MB)
                    </Typography>
                    <input
                        accept="file"
                        // className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={HandleFile2}
                    />
                </Box>
                <Box sx={{marginTop:1}}>
                    <Typography>
                        SSC marksheet (less than 4MB)
                    </Typography>
                    <input
                        accept="file"
                        // className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleFile3}
                    />
                </Box>
                <Box sx={{marginTop:1}}>
                    <Typography>
                        All marksheet(less than 10MB)
                    </Typography>
                    <input
                        accept="file"
                        // className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleFile4}
                    />
                    <Button variant="contained" onClick={onSubmit}>submit</Button>
                </Box>
            </Box>
        </>

    );
}
export default Page3;