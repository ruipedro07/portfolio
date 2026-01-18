import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CustomButton from "./components/custombutton";
import ChatSection from "./components/chat"; // <-- add this

const Home = () => {
    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                width: "100%",
                pt: { xs: 0, md: 0 },
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 2, md: 5 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Picture */}
                    <Box
                        component="img"
                        src="/foto_minha_2022.jpg"
                        alt="foto-rui"
                        sx={{
                            width: { xs: 150, md: 200 },
                            height: { xs: 150, md: 200 },
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: 2,
                            borderColor: "white",
                        }}
                    />

                    {/* Intro + Buttons */}
                    <Box sx={{ maxWidth: 600 }}>
                        <Typography variant="h3" fontWeight={900} gutterBottom>
                            Hi, I'm Rui 👋
                        </Typography>
                        <Typography
                            variant="h6"
                            fontWeight={400}
                            sx={{ opacity: 1, mb: 4 }}
                        >
                            I'm a Software Engineer passionate about building impactful
                            digital experiences. I specialize in{" "}
                            <strong>
                                <u>Big Data, Java</u>
                            </strong>{" "}
                            and scalable{" "}
                            <strong>
                                <u>full‑stack</u>
                            </strong>{" "}
                            applications.
                        </Typography>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <CustomButton variant="primary" onClick={scrollToContact}>
                                Contact Me
                            </CustomButton>

                            <CustomButton
                                variant="secondary"
                                startIcon={<LinkedInIcon />}
                                href="https://www.linkedin.com/in/ruiribeiro-dev/"
                                target="_blank"
                            >
                                LinkedIn
                            </CustomButton>

                            <CustomButton
                                variant="secondary"
                                startIcon={<GitHubIcon />}
                                // href="https://github.com/your-username"
                                target="_blank"
                            >
                                GitHub
                            </CustomButton>
                        </Stack>
                    </Box>
                </Stack>

                {/* Chat section – appears below hero, expands after first question */}
                <Box mt={{ xs: 4, md: 6 }} mb={{ xs: 4, md: 8 }}>
                    <ChatSection />
                </Box>
            </Container>
        </Box>
    );
};

export default Home;