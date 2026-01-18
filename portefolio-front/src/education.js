import * as React from "react";
import {Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, Avatar} from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CustomTimeline from "./timeline";
import Link from "@mui/material/Link";
import LinkIcon from '@mui/icons-material/Link';

export default function Education() {

    const certifications = [
        {
            title: "Introduction to Red Hat OpenShift Applications (DO101)",
            date: "Red Hat 2025",
            logo: "/logos/icons8-openshift.svg",
            link: "https://www.credly.com/badges/4a515ad3-b4f5-4fbc-a3e9-c325ed78e072/linked_in_profile"
        },
        {
            title: "Hadoop Fundamentals",
            date: "Rumos 2025",
            logo: "/logos/icons8-hadoop-distributed-file-system-480.svg",
            link: "https://www.linkedin.com/in/ruiribeiro-dev/overlay/1751044833155/single-media-viewer/?profileId=ACoAADkz6hEBhX5qoW7IoOQ4XBQ81Tc18yI3GVs"
        },
    ];

    const awards = [
        {
            title: "3rd highest ranked student in the bachelor's degree in informatics engineering",
            date: "2021/2022",
            link: "https://www.linkedin.com/in/ruiribeiro-dev/overlay/education/769503122/multiple-media-viewer/?profileId=ACoAADkz6hEBhX5qoW7IoOQ4XBQ81Tc18yI3GVs&treasuryMediaId=1768672090781"
        },
        {
            title: "Diploma of merit in the bachelor's degree in informatics engineering",
            date: "2021/2022",
            link: "https://www.linkedin.com/in/ruiribeiro-dev/overlay/education/769503122/multiple-media-viewer/?profileId=ACoAADkz6hEBhX5qoW7IoOQ4XBQ81Tc18yI3GVs&treasuryMediaId=1768672090782"
        },
    ];

    const academic = [

        {
            id: 1,
            period: "SET 2022 - OUT 2025",
            company: "Instituto Superior de Engenharia do Porto",
            location: "Porto, Portugal",
            type: "Master of Science (M.Sc.)",
            workTitle: "Software Engineering",
            description: `
Course covering advanced programming and software architecture content.
It has an ABET certification ‑ global accreditation body for university
programs in natural and applied sciences, computer science, engineering
and engineering technologies. 
`,
            icon: (<HomeWorkIcon color="primary"></HomeWorkIcon>)
        },

        {
            id: 2,
            period: "OCT 2019 - SET 2022",
            company: "Instituto Superior de Engenharia do Porto",
            location: "Porto, Portugal",
            type: "Bachelor of Science (B.Sc.)",
            workTitle: "Informatics Engineering",
            description: `
Course that addresses modern content focused on software development,
systems management, network management and teamwork. It was the first
degree in Portugal distinguished with the EUR‑ACE quality certification of the
Order of Engineers, recognized throughout Europe, Latin America and Asia.
`,
            icon: (<HomeWorkIcon color="primary"></HomeWorkIcon>)
        },


    ];

    return (

        <Box
            sx={{
                display: "grid",
                gap: 3,
                alignItems: "start",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "minmax(0, 2fr) minmax(0, 1fr)", // left / right
                },
            }}
        >
            {/* LEFT TODO adicionar cadeiras importantes nos cursos?  */}
            <Box sx={{minWidth: 0}}>
                <CustomTimeline smallVersion={true} events={academic}/>
            </Box>

            {/* RIGHT: certifications + awards */}

            <Paper variant="outlined" sx={{p: 2}}>
                <Typography variant="h6" gutterBottom>
                    Certifications
                </Typography>
                <List dense>
                    {certifications.map((c, i) => (
                        <ListItem key={i} disableGutters>
                            <ListItemIcon sx={{minWidth: 40}}>
                                <Avatar
                                    src={c.logo}
                                    alt={c.title}
                                    variant="rounded"
                                    sx={{
                                        width: 28,
                                        height: 28,
                                        bgcolor: "transparent",
                                    }}
                                    imgProps={{style: {objectFit: "contain"}}}
                                />
                            </ListItemIcon>

                            <ListItemText
                                primary={
                                    <Link
                                        href={c.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}
                                    >
                                        <LinkIcon sx={{ fontSize: 16 }} />
                                        {c.title}

                                    </Link>
                                }
                                secondary={c.date}
                            />
                        </ListItem>
                    ))}
                </List>

                <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                    Awards
                </Typography>
                <List dense>
                    {awards.map((a, i) => (
                        <ListItem key={i} disableGutters>
                            <ListItemText
                                primary={
                                    <Link
                                        href={a.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}
                                    >
                                        <LinkIcon sx={{ fontSize: 16 }} />
                                        {a.title}

                                    </Link>
                                }
                                secondary={a.date}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>

        </Box>
    );
}
