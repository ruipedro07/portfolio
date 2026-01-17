import * as React from "react";
import {Typography, Box} from "@mui/material";


export default function About() {


    return (

        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",   // horizontal centering
            justifyContent: "center", // vertical centering (if height is set)
            textAlign: "center",
            gap: 2, // spacing between image and text
        }}>

            <Typography align="center">
                I always knew that Information Technology would be my professional path, a conviction reinforced through
                both academic and professional experience. My first contact with programming was
                through <strong><u>Java</u></strong>, which <i>sparked</i> my interest in system logic and in
                understanding how <strong>complex systems</strong> operate behind the scenes.
                <br/>
                My interest in the <strong><u>Big Data</u></strong> domain emerged in the professional environment,
                where I specialized as a Data Engineer, working with technologies such as <strong><u>Apache
                Spark</u></strong>, <strong><u>Apache
                Kafka</u></strong>, <strong><u>Hadoop</u></strong>, <strong><u>Hive</u></strong>,
                and <strong><u>MapReduce</u></strong>, and <i>leading</i> several data-related projects. I have
                extensive experience managing the <strong>full software development lifecycle</strong>,
                including <i>leading</i> multiple releases, as well as <i>strong</i> problem-solving skills in <strong>production
                environments</strong>, supported by solid experience in support activities.
                <br/>
                I continuously invest in expanding my knowledge through hands-on experience and continuous learning,
                with a <i>strong</i> focus on scalable data architectures, distributed processing, and reliable data
                pipelines.
            </Typography>
        </Box>
    );
}
