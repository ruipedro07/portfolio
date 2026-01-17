import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Section({
                                    id,
                                    title,
                                    children,
                                    notShowTitle,
                                    sx = {},
                                    bgColor,
                                    ...props
                                }) {
    return (
        <Box
            id={id}
            sx={{
                py: 5,
                backgroundColor: bgColor ?? "#ffffff",
                display: "flex",
                flexDirection: "column",
                ...sx,
            }}
            {...props}
        >
            <Container>
                {!notShowTitle && (
                    <Box
                        sx={{
                            position: "relative",
                            display: "inline-block",
                            textAlign: "center",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Typography
                            gutterBottom
                            sx={{
                                position: "relative",
                                fontSize: { xs: "20pt", md: "30pt" },
                                fontWeight: "bold",
                            }}
                        >
                            {title}
                        </Typography>
                    </Box>
                )}

                <Box>{children}</Box>
            </Container>
        </Box>
    );
}