import * as React from 'react';
import ExperienceTimeline from "./ExperienceTimeline";
import {Box, Typography} from "@mui/material";


export default function Experience() {

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
                    +6 Years
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
            <ExperienceTimeline></ExperienceTimeline>
        </Box>
    );
}
