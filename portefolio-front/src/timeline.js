import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Card, CardContent, Typography, useTheme, useMediaQuery, Box} from '@mui/material';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import {CustomChip} from "./components/customchip";
import {CollapsibleMarkdown} from "./components/collapsableMarkdown";


export default function CustomTimeline({events, smallVersion}) {

    console.log(events.length, smallVersion)
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md')) && !smallVersion;


    return (
        <Timeline
            position="right"
            sx={{
                width: "100%",
                minWidth: 0,
                m: 0,
                p: 0,
                ...(isMdUp
                    ? {
                        [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 },
                    }
                    : {
                        [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
                    }),
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
                                <Typography variant="h6" component="div" sx={{mb: 1}}>
                                    {event.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <LocationOnIcon color="primary" fontSize="inherit"/> {event.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <WorkIcon color="primary" fontSize="inherit"/> {event.type}
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
                        <Card variant="outlined" sx={{
                            mb: 10
                        }}>
                            <CardContent>
                                <Typography variant="h6" component="div" sx={{mb: 1}}>
                                    {event.workTitle}
                                </Typography>
                                <CollapsibleMarkdown content={event.description}/>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        mt: 2,
                                        // justifyContent: "center", // center horizontally
                                        gap: 1,                   // space between chips
                                    }}
                                >
                                    {event.techsStack && event.techsStack.map((s) => (
                                        <CustomChip
                                            key={s}
                                            label={s}>
                                        </CustomChip>
                                    ))}
                                </Box>
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
                                <Typography variant="body2" color="text.secondary" sx={{mb: 1}}>
                                    <WorkIcon fontSize="inherit"/> {event.type}
                                </Typography>
                                <Typography variant="h6" component="div" sx={{mb: 1}}>
                                    {event.workTitle} @ {event.company}
                                </Typography>
                                <CollapsibleMarkdown content={event.description}/>


                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        mt: 2,
                                        // justifyContent: "center", // center horizontally
                                        gap: 1,                   // space between chips
                                    }}
                                >
                                    {event.techsStack && event.techsStack.map((s) => (
                                        <CustomChip
                                            key={s}
                                            label={s}>
                                        </CustomChip>

                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </TimelineContent>)}
                </TimelineItem>
            ))}
        </Timeline>
    );
}
