import React from "react";
import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                mt: 6,
                py: 4,
            }}
        >
            <Divider sx={{ mb: 3, opacity: 0.6 }} />
            <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, md: 6 } }}>


                <Box
                    sx={{
                        display: "flex",
                        alignItems: { xs: "flex-start", md: "center" },
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2,
                    }}
                >
                    {/* Left: copyright + location */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                        <Typography variant="body2" sx={{ opacity: 0.85 }}>
                            © 2026 Rui Ribeiro. All rights reserved.
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                            <LocationOnIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                            <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                Porto, Portugal
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right: social buttons */}
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/in/ruiribeiro-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            sx={{
                                border: "2px solid",
                                borderRadius: { xs: "0%", md: "50%" },
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.15)",
                                    transform: "scale(1.1)",
                                },
                            }}
                        >
                            <LinkedInIcon fontSize="large" />
                        </IconButton>

                        <IconButton
                            color="inherit"
                            href="https://github.com/yourprofile" // <-- replace with your GitHub
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            sx={{
                                border: "2px solid",
                                borderRadius: { xs: "0%", md: "50%" },
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.15)",
                                    transform: "scale(1.1)",
                                },
                            }}
                        >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>

                {/* Disclaimer */}
                <Typography
                    variant="caption"
                    sx={{ display: "block", mt: 2.5, opacity: 0.7, lineHeight: 1.4 }}
                >
                    All trademarks and logos are the property of their respective owners.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;