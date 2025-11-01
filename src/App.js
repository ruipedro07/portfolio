import React from "react";
import {

    Typography,
    Box,
    Chip,
    Stack
} from "@mui/material";
import {useTranslation} from "react-i18next";
import Section from "./section";
import ExperienceTimeline from "./ExperienceTimeline";
import Navbar from "./Navbar";




export default function Portfolio() {
    const {t, i18n} = useTranslation();
    // Navbar offset (height of AppBar). Tune if your AppBar is taller/shorter.


    return (
        <>

            <Navbar />


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column", // vertical stacking
                    width: "100%",            // make sure it spans full width
                }}
            >

                <Section id="home" title={t("Home")}>
                    <Typography variant="body1">{t("welcome")}</Typography>
                </Section>


                {/* About */}
                <Section id="about" title={t("About")}>
                    <Typography variant="body1"> {t("aboutMe")}</Typography>
                </Section>


                {/* Projects */}
                <Section id="projects" title={t("Projects")}>
                    <Typography variant="body1">TODO</Typography>
                </Section>


                {/* Skills */}
                <Section id="skills" title={t("Skills")}>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {["React", "TypeScript", "Node.js", "Three.js", "MUI", "Postgres", "Docker"].map((s) => (
                            <Chip key={s} label={s} sx={{fontWeight: 600}}/>
                        ))}
                    </Stack>
                </Section>


                {/* Experience */}
                <Section id="experience" title={t("Experience")}>
                    <ExperienceTimeline></ExperienceTimeline>
                </Section>


                {/* Contact */}
                <Section id="contact" title={t("Contact")}>
                    <Typography variant="body1">
                        {t("contactMe")}
                    </Typography>
                </Section>


            </Box>
        </>
    )
        ;
}
