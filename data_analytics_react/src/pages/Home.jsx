import React from "react";
import { Card, Grid } from "@mui/material";
import DonutChart from "./DonutChart";

const Home = () => {
    return (
        <div className="home" style={{ margin: '2vw' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} sm={6}   >
                Home page
                </Grid>
            </Grid><br/>
        
        </div>
    )
}
export default Home;