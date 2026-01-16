import React from "react";
import { Box, Button, Container, Stack, Typography , IconButton} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const HomeSection = () => {
    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 64px)", // if your navbar is 64px
                display: "flex",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={6}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* Picture */}
                    <Box
                        component="img"
                        src="/foto_minha_2022.jpg" // TODO reduce image size
                        alt="Your Name"
                        sx={{
                            width: { xs: 200, md: 280 },
                            height: { xs: 200, md: 280 },
                            borderRadius: "50%",
                            objectFit: "cover",
                            boxShadow: 6,
                        }}
                    />

                    {/* Intro + Buttons */}
                    <Box sx={{ color: "#fff", maxWidth: 600 }}>
                        <Typography variant="h3" fontWeight={700} gutterBottom>
                            Hi, I'm Rui
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                            I'm a Software Engineer passionate about building impactful digital
                            experiences. I specialize in Big Data, Java and scalable
                            full‑stack applications.
                        </Typography>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={scrollToContact}
                                sx={{
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: "rgba(255,255,255,0.15)",
                                        transform: "scale(1.1)",
                                    },
                                }}
                            >
                                Contact Me
                            </Button>

                            <IconButton
                                color="inherit"
                                href="https://www.linkedin.com/in/ruiribeiro-dev/"
                                target="_blank"
                                sx={{
                                    border: "2px solid white",
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
                                //href="https://github.com/yourprofile"
                                //target="_blank"
                                sx={{
                                    border: "2px solid white",
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
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default HomeSection;