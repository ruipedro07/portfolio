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
                        fontSize: { xs: "2rem", md: "4rem" },
                        fontWeight: "bold",
                        color: "primary.main",
                        lineHeight: 1
                    }}
                >
                    +3 Years
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
