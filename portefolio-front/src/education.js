import * as React from "react";
import { Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, Avatar } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CustomTimeline from "./timeline";


export default function Education() {

    const certifications = [
        {
            title: "Introduction to Red Hat OpenShift Applications (DO101)",
            date: "Red Hat 2025",
            logo: "/logos/icons8-openshift.svg",
        },
        {
            title: "Hadoop Fundamentals",
            date: "Rumos 2025",
            logo: "/logos/icons8-hadoop-distributed-file-system-480.svg",
        },
    ];

    const awards = [
        {title: "3rd highest ranked student (Department of Computer Engineering)", date: "2022"},
    ];

    const events = [

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
            {/* LEFT */}
            <Box sx={{minWidth: 0}}>
                <CustomTimeline smallVersion={true} events={events}/>
            </Box>

            {/* RIGHT: certifications + awards */}

            <Paper variant="outlined" sx={{p: 2}}>
                <Typography variant="h6" gutterBottom>
                    Certifications
                </Typography>
                <List dense>
                    {certifications.map((c, i) => (
                        <ListItem key={i} disableGutters>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <Avatar
                                    src={c.logo}
                                    alt={c.title}
                                    variant="rounded"
                                    sx={{
                                        width: 28,
                                        height: 28,
                                        bgcolor: "transparent",
                                    }}
                                    imgProps={{ style: { objectFit: "contain" } }}
                                />
                            </ListItemIcon>

                            <ListItemText primary={c.title} secondary={c.date} />
                        </ListItem>
                    ))}
                </List>

                <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                    Awards
                </Typography>
                <List dense>
                    {awards.map((a, i) => (
                        <ListItem key={i} disableGutters>
                            <ListItemText primary={a.title} secondary={a.date}/>
                        </ListItem>
                    ))}
                </List>
            </Paper>

        </Box>
    );
}
