import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Card, CardContent, Chip, Stack, Typography, useTheme, useMediaQuery} from '@mui/material';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import ReactMarkdown from "react-markdown";

// TODO incluir as internal tools na secção de projetos?

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
    - Python tool capable of synchronizing HDFS (Hadoop Distributed File System) data between clusters using DistCp (distributed copy). 
- Collaborate closely with risk, compliance, and business teams to ensure data accuracy and regulatory alignment
`,
        techsStack: ["Java", "Spring Boot", "Apache Spark", "Apache Kafka", "SQL", "Hadoop", "Hive", "XL Deploy", "XL Release", "Jenkins", "Agile"],
        icon: (<HomeWorkIcon></HomeWorkIcon>)
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
        icon: (<HomeWorkIcon></HomeWorkIcon>)
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
        icon: (<HomeWorkIcon></HomeWorkIcon>)
    },

];

export default function ExperienceTimeline() {


    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Timeline
            position="right"
            sx={() => {
                if (isMdUp)
                    return {
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        }
                    }
                else
                    return {
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        }
                    }

            }}
        >
            {events.map((event, index) => (
                <TimelineItem key={event.id}>

                    {isMdUp && (<TimelineOppositeContent

                        variant="body2"
                        color="text.secondary"
                        sx={{textAlign: 'left', minWidth: "30%"}}
                    >
                        <Card variant="transparent" sx={{mb: 10}}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {event.period}
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                    {event.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <LocationOnIcon fontSize="inherit"/> {event.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <WorkIcon fontSize="inherit"/> {event.type}
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineOppositeContent>)}
                    <TimelineSeparator>
                        <TimelineDot>
                            {event.icon}
                        </TimelineDot>
                        {index < events.length - 1 && <TimelineConnector/>}
                    </TimelineSeparator>

                    {isMdUp && (<TimelineContent sx={{maxWidth: "100%"}}>
                        <Card variant="outlined" sx={{mb: 10}}>
                            <CardContent>
                                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                    {event.workTitle}
                                </Typography>
                                <ReactMarkdown
                                    components={{
                                        p: ({node, ...props}) => (
                                            <Typography variant="body1" {...props} />
                                        ),
                                        strong: ({node, ...props}) => (
                                            <Typography component="span" variant="body1" fontWeight="bold" {...props} />
                                        ),
                                        li: ({node, ...props}) => (
                                            <li>
                                                <Typography component="span" variant="body1" {...props} />
                                            </li>
                                        ),
                                    }}
                                >
                                    {event.description}
                                </ReactMarkdown>

                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    spacing={2}        // horizontal spacing
                                    sx={{rowGap: 1.5, mt: 2}} // vertical spacing between wrapped rows
                                    alignItems="center"
                                >
                                    {event.techsStack.map((s) => (
                                        <Chip key={s} label={s} sx={{fontWeight: 600}}/>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </TimelineContent>)}

                    {!isMdUp && (<TimelineContent sx={{maxWidth: "100%"}}>
                        <Card variant="outlined" sx={{mb: 10}}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {event.period}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <LocationOnIcon fontSize="inherit"/> {event.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    <WorkIcon fontSize="inherit"/> {event.type}
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                    {event.workTitle} @ {event.company}
                                </Typography>
                                <ReactMarkdown
                                    components={{
                                        p: ({node, ...props}) => (
                                            <Typography variant="body1" {...props} />
                                        ),
                                        strong: ({node, ...props}) => (
                                            <Typography component="span" variant="body1" fontWeight="bold" {...props} />
                                        ),
                                        li: ({node, ...props}) => (
                                            <li>
                                                <Typography component="span" variant="body1" {...props} />
                                            </li>
                                        ),
                                    }}
                                >
                                    {event.description}
                                </ReactMarkdown>


                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    spacing={2}        // horizontal spacing
                                    sx={{rowGap: 1.5, mt: 2}} // vertical spacing between wrapped rows
                                    alignItems="center"
                                >
                                    {event.techsStack.map((s) => (
                                        <Chip key={s} label={s} sx={{fontWeight: 600}}/>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </TimelineContent>)}
                </TimelineItem>
            ))}
        </Timeline>
    );
}
