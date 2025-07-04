import { Box } from "@mui/material";
import logo from '../styles/logo.png';
import * as React from "react";
import '../styles/About.css'

export default function About(){
    return(
        <Box id="box-about">
            <h1>Qui nous sommes ?!</h1>
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem dignissimos minus. Eius animi, dolore ea architecto corporis rem sequi adipisci natus eaque ipsam beatae! Maiores nihil praesentium molestias architecto.</p>
        </Box>
    )
}