import React from "react";
/*
-creating a simple react component 
    we need to import react from react as seen above
    then follow the formatting below
*/
import {Component} from "react";
import { Typography,  AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@mui/material";
import {PhotoCamera} from '@mui/icons-material';

const App = () => {
    return (
        <>
           <CssBaseline/>
           <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera>
                    </PhotoCamera>
                   <Typography variant="h6">
                        Photo Album  
                   </Typography> 
                </Toolbar>
            </AppBar> 
        </>
    );
}

export default App;