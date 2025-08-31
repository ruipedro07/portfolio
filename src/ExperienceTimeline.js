import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Card, CardContent, Chip, Stack, Typography} from '@mui/material';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';


const events = [
    { id: 1,
        period: "JAN 2025 - Present",
        company: "Natixis",
        location: "London Area, United Kingdom",
        type: "Hybrid work",
        workTitle: "Frontend Engineer",
        description: "Architected enterprise-scale, CMS-driven reusable pagebuilder blocks with dynamic configurability using Sanity and Contentful, enabling non-technical teams to manage content across 6+ production websites. Designed custom schemas and optimized GROQ queries, resulting in 40% faster content delivery.",
        techsStack: ["TypeScript", "Next.js"],
        icon: (<HomeWorkIcon></HomeWorkIcon>)
    },
    { id: 2,
        period: "JAN 2025 - Present",
        company: "Natixis",
        location: "London Area, United Kingdom",
        type: "Remote work",
        workTitle: "Frontend Engineer",
        description: "Architected enterprise-scale, CMS-driven reusable pagebuilder blocks with dynamic configurability using Sanity and Contentful, enabling non-technical teams to manage content across 6+ production websites. Designed custom schemas and optimized GROQ queries, resulting in 40% faster content delivery.",
        techsStack: ["TypeScript", "Next.js"],
        icon: (<HomeWorkIcon></HomeWorkIcon>)
    },
    { id: 3,
        period: "JAN 2025 - Present",
        company: "Natixis",
        location: "London Area, United Kingdom",
        type: "Remote work",
        workTitle: "Frontend Engineer",
        description: "Architected enterprise-scale, CMS-driven reusable pagebuilder blocks with dynamic configurability using Sanity and Contentful, enabling non-technical teams to manage content across 6+ production websites. Designed custom schemas and optimized GROQ queries, resulting in 40% faster content delivery.",
        techsStack: ["TypeScript", "Next.js"],
        icon: (<HomeWorkIcon></HomeWorkIcon>)
    },

];

export default function ExperienceTimeline() {
    return (
        <Timeline
            position="right"
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                }
            }}
        >
            {events.map((event, index) => (
                <TimelineItem key={event.id}>

                    <TimelineOppositeContent

                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: 'left', minWidth: "30%" }}
                    >
                        <Card variant="transparent" sx={{  mb: 10 }}>
                            <CardContent >
                                <Typography variant="body2" color="text.secondary">
                                    {event.period}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {event.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <LocationOnIcon fontSize="inherit" /> {event.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <WorkIcon fontSize="inherit" /> {event.type}
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            {event.icon}
                        </TimelineDot>
                        {index < events.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>

                    <TimelineContent sx={{maxWidth: "70%"}}>
                        <Card variant="outlined" sx={{  mb: 10 }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {event.workTitle}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {event.description}
                                </Typography>

                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {event.techsStack.map((s) => (
                                        <Chip key={s} label={s} sx={{fontWeight: 600}}/>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
