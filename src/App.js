import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from './Page/Page1'
import Page2 from "./Page/Page2";
import Page3 from "./Page/Page3";
import { Button, Box } from '@mui/material';
import{Link} from 'react-router-dom';
function App() {

  return (
    <div>
      <Box sx={{
        display:'flex',
        alignItems: "center",
        justifyContent: "center",
        marginBottom:'10',
        m:1
      }}>
        <Button sx={{m:1}} component={Link} to={'/'} variant='contained'>
          Page1
        </Button>
        <Button sx={{m:1}} component={Link} to={'/Page2'} variant='contained'>
          PAge2
        </Button>
        <Button sx={{m:1}} component={Link} to={'/Page3'} variant='contained'>
          Page3
        </Button>
      </Box>
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/Page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>

      </Routes>
   
    </div>
  );
}

export default App;
