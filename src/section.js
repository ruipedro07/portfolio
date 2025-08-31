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
                //textAlign: "center",      // center text inside children
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
                    {/* Background text */}
                    {/*<Box*/}
                    {/*    sx={{*/}
                    {/*        position: "absolute",*/}
                    {/*        top: 0,*/}
                    {/*        left: 0,*/}
                    {/*        transform: "translate(85%, -20%)",*/}
                    {/*        width: "max-content",*/}
                    {/*        pointerEvents: "none",*/}
                    {/*        color: "rgba(0,0,0,0.05)",*/}
                    {/*        WebkitMaskImage:*/}
                    {/*            "linear-gradient(to left, black 50%, transparent 100%)",*/}
                    {/*        WebkitMaskRepeat: "no-repeat",*/}
                    {/*        WebkitMaskSize: "cover",*/}
                    {/*        overflow: "visible",*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Typography sx={{lineHeight: 1, fontSize: "10rem"}}>*/}
                    {/*        {title}*/}
                    {/*    </Typography>*/}
                    {/*</Box>*/}

                    {/* Foreground text */}
                    <Typography
                        gutterBottom
                        sx={{
                            position: "relative",

                            fontSize: "5rem",
                            fontWeight: "bold",
                        }}
                    >
                        {title}
                    </Typography>
                </Box>

                <Box>
                    {children}
                </Box>

            </Container>
        </Box>
    )
}