import React from "react";
import {Box, Container, Typography} from "@mui/material";

export default function Section({
                                    id,
                                    title,
                                    children
                                }) {

    return (
        <Box
            id={id}
            sx={{
                minHeight: "100vh",
                py: 10,
                backgroundColor: "#ffffff",
                display: "flex",          // make the section a flex container
                flexDirection: "column",  // stack content vertically
            }}
        >
            <Container>

                <Box sx={{
                    position: "relative",
                    display: "inline-block",
                    textAlign: "center",     // horizontal centering
                    alignItems: "center",
                    width: "100%"

                }}>

                    <Typography
                        gutterBottom
                        sx={{
                            position: "relative",

                            fontSize: { xs: "20pt", md: "30pt" },
                            fontWeight: "bold",
                        }}
                    >
                        {/*"div<"+ title + ">" TODO*/}
                        {title}
                    </Typography>
                </Box>

                <Box  >
                    {children}
                </Box>

            </Container>
        </Box>
    )
}