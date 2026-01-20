import React from "react";
import {Box, Container, Typography, IconButton, Divider} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomButton from "./components/custombutton";

const Footer = () => {
    return (<Box
            component="footer"
            sx={{
                width: "100%", pb: 2,  background: "white"
            }}
        >
            <Divider sx={{mb: 3, border: "1px solid"}}/>
            <Container maxWidth={false} disableGutters
                       sx={{px: {xs: 2, md: 6}}}>


                <Box
                    sx={{
                        display: "flex",
                        alignItems: {xs: "flex-start", md: "center"},
                        justifyContent: "space-between",
                        flexDirection: {xs: "column", md: "row"},
                        gap: 2,
                    }}
                >
                    {/* Left: copyright + location */}
                    <Box sx={{display: "flex", flexDirection: "column", gap: 0.75}}>
                        <Typography variant="body2" sx={{opacity: 0.85}}>
                            © 2026 Rui Ribeiro. All rights reserved.
                        </Typography>

                        <Box sx={{display: "flex", alignItems: "center", gap: 0.75}}>
                            <LocationOnIcon sx={{fontSize: 18, opacity: 0.8}}/>
                            <Typography variant="body2" sx={{opacity: 0.85}}>
                                Porto, Portugal
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right: social buttons */}
                    <Box sx={{display: "flex", gap: 1}}>
                        <CustomButton
                            variant="secondary"
                            startIcon={<LinkedInIcon/>}
                            href="https://www.linkedin.com/in/ruiribeiro-dev/"
                            target="_blank"
                        />


                        {/*<CustomButton
                            variant="secondary"
                            startIcon={<GitHubIcon/>}
                            // href="https://www.linkedin.com/in/ruiribeiro-dev/"
                            target="_blank"
                        />*/}


                    </Box>
                </Box>

                {/* Disclaimer */}
                <Typography
                    variant="caption"
                    sx={{display: "block", mt: 2.5, opacity: 0.7, lineHeight: 1.4}}
                >
                    All trademarks and logos are the property of their respective owners.
                </Typography>
            </Container>
        </Box>);
};

export default Footer;