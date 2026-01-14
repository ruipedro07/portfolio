import * as React from 'react';
import {Box, Typography} from "@mui/material";
import CustomTimeline from "./timeline";
import HomeWorkIcon from "@mui/icons-material/HomeWork";


export default function Experience() {

    const events = [
        {
            id: 1,
            period: "OCT 2023 - PRESENT",
            company: "Natixis | Groupe BPCE",
            location: "Porto, Portugal",
            type: "Hybrid work",
            workTitle: "Backend & Data Engineer",
            description: `

Working in the banking risk department, focusing on regulatory reporting systems such as IFRS 9, COREP, and Basel III risk metrics.

**Key contributions:**
- Design, develop, and maintain end-to-end data pipelines for regulatory risk reporting
- Implement scalable solutions for capital adequacy and credit risk calculations
- Accompany the full software lifecycle, from development and testing to deployment and production support
- Perform code debugging, root-cause analysis, and production issue resolution
- Develop and maintain Spring Boot APIs supporting risk and reporting services
- Build internal tools and utilities to optimize development, testing, and deployment processes. 
- Collaborate closely with risk, compliance, and business teams to ensure data accuracy and regulatory alignment
`,
            techsStack: ["Java", "Spring Boot", "Apache Spark", "Apache Kafka", "SQL", "Hadoop", "Hive", "XL Deploy", "XL Release", "Jenkins", "Agile"],
            icon: (<HomeWorkIcon color="primary"></HomeWorkIcon>)
        },
        {
            id: 2,
            period: "SET 2022 - OCT 2023",
            company: "Natixis | Groupe BPCE",
            location: "Porto, Portugal",
            type: "Hybrid work",
            workTitle: "Professional Internship - Full-stack Developer",
            description: `
Professional internship as a Full-stack Developer, contributing to the modernization of internal banking risk systems.
        
**Key contributions:**
- Development of a web-based application using React, migrating a legacy, outdated system to a modern web platform
- Contribution to a key digital transformation initiative, improving usability and efficiency for bank risk analysts
- Backend development with Spring Boot, implementing REST APIs and business logic
- Contributions to risk calculation software in Java, supporting internal risk assessment processes
- Participation across the software lifecycle, including development, testing, and bug fixing
- Collaboration with senior engineers and risk teams to ensure functional alignment and system reliability
        `,
            techsStack: ["Java", "Spring Boot", "React", "Javascript", "SQL", "XL Deploy", "XL Release", "Jenkins", "OpenShift", "Agile"],
            icon: (<HomeWorkIcon color="primary"></HomeWorkIcon>)
        },
        {
            id: 3,
            period: "MAR 2022 - JUL 2022",
            company: "Armis Group",
            location: "Porto, Portugal",
            type: "Hybrid work",
            workTitle: "Curricular Internship | Full-stack Engineer",
            description: "As part of my curricular internship, I developed a web-based management platform to optimize the operation of electric vehicle (EV) charging stations. The solution was built using React (frontend) and Spring Boot (backend), enabling efficient management of charging sessions, station availability, and user interactions.",
            techsStack: ["Java", "Spring Boot", "React", "Javascript", "SQL", "Git"],
            icon: (<HomeWorkIcon color="primary"></HomeWorkIcon>)
        },

    ];

    return (
        <Box>
            <Box
                textAlign="center"
                mb={4} // margin bottom before the timeline
            >
                <Typography
                    variant="h1"
                    component="div"
                    sx={{
                        fontSize: { xs: "20pt", md: "30pt" },
                        fontWeight: "bold",
                        color: "primary.main",
                        lineHeight: 1
                    }}
                >
                    +4 Years
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: 1,
                        color: "text.secondary",
                        fontStyle: "italic"
                    }}
                >
                    ... of crafting amazing experiences
                </Typography>
            </Box>
            <CustomTimeline events={events}></CustomTimeline>
        </Box>
    );
}
