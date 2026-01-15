import * as React from 'react';
import { motion } from 'framer-motion';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Card, CardContent, Typography, useTheme, useMediaQuery, Box } from '@mui/material';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { CustomChip } from './components/customchip';
import { CollapsibleMarkdown } from './components/collapsableMarkdown';

// motion versions
const MotionCardContent = motion(CardContent);

// animation variants
const itemVariants = {
    hidden: { opacity: 0, x: 80 },   // start 80px to the right
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

export default function CustomTimeline({ events, smallVersion }) {
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
                <TimelineItem
                    key={event.id}
                >
                    {isMdUp && (
                        <TimelineOppositeContent
                            variant="body2"
                            color="text.secondary"
                            sx={{ textAlign: 'left', minWidth: "30%" }}
                        >
                            <Card variant="transparent" sx={{ mb: 10 }}>
                                <MotionCardContent
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        {event.period}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                        {event.company}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <LocationOnIcon color="primary" fontSize="inherit" /> {event.location}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <WorkIcon color="primary" fontSize="inherit" /> {event.type}
                                    </Typography>
                                </MotionCardContent>
                            </Card>
                        </TimelineOppositeContent>
                    )}

                    <TimelineSeparator>
                        <TimelineDot>{event.icon}</TimelineDot>
                        {index < events.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>

                    {isMdUp && (
                        <TimelineContent sx={{ maxWidth: "100%" }}>
                            <Card
                                variant="outlined"
                                sx={{ mb: 10 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <MotionCardContent
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                        {event.workTitle}
                                    </Typography>
                                    <CollapsibleMarkdown content={event.description} />

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            mt: 2,
                                            gap: 1,
                                        }}
                                    >
                                        {event.techsStack &&
                                            event.techsStack.map((s) => (
                                                <CustomChip key={s} label={s} />
                                            ))}
                                    </Box>
                                </MotionCardContent>
                            </Card>
                        </TimelineContent>
                    )}

                    {!isMdUp && (
                        <TimelineContent sx={{ maxWidth: "100%" }}>
                            <Card
                                variant="outlined"
                                sx={{ mb: 10 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <MotionCardContent
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        {event.period}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <LocationOnIcon fontSize="inherit" /> {event.location}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        <WorkIcon fontSize="inherit" /> {event.type}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                        {event.workTitle} @ {event.company}
                                    </Typography>
                                    <CollapsibleMarkdown content={event.description} />

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            mt: 2,
                                            gap: 1,
                                        }}
                                    >
                                        {event.techsStack &&
                                            event.techsStack.map((s) => (
                                                <CustomChip key={s} label={s} />
                                            ))}
                                    </Box>
                                </MotionCardContent>
                            </Card>
                        </TimelineContent>
                    )}
                </TimelineItem>
            ))}
        </Timeline>
    );
}