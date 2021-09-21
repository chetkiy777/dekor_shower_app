import React from 'react'
import {Box, Container} from "@material-ui/core";
import './main.css'
import Header from "./components/Header";
import InputMainData from "./components/InputMainData";
import InputDopData from "./components/InputDopData";
import Result from "./components/Result";

const App = () => {
  return (
    <Container className='app'>
        <Box sx={{display:'flex', flexDirection:'row',justifyContent:'space-between',gap:'20px'}}>
            <Box>
              <Header/>
              <InputMainData />
              <InputDopData/>
            </Box>
            <Box>
                <Result/>
            </Box>
        </Box>
    </Container>
  );
}

export default App;
