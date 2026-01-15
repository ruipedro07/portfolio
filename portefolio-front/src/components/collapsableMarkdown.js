import { useState, useRef, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

const COLLAPSED_HEIGHT = 120; // px – adjust as needed

export function CollapsibleMarkdown({ content }) {
    const [expanded, setExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setShowToggle(contentRef.current.scrollHeight > COLLAPSED_HEIGHT);
        }
    }, [content]);

    return (
        <>
            <Box
                ref={contentRef}
                sx={{
                    maxHeight: expanded ? "none" : COLLAPSED_HEIGHT,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                    position: "relative",
                }}
            >
                <ReactMarkdown
                    components={{
                        p: ({ node, ...props }) => (
                            <Typography variant="body1" {...props} />
                        ),
                        strong: ({ node, ...props }) => (
                            <Typography
                                component="span"
                                variant="body1"
                                fontWeight="bold"
                                {...props}
                            />
                        ),
                        li: ({ node, ...props }) => (
                            <li>
                                <Typography component="span" variant="body1" {...props} />
                            </li>
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </Box>

            {showToggle && (
                <Button
                    size="small"
                    onClick={() => setExpanded(prev => !prev)}
                    sx={{ mt: 1, px: 0 }}
                >
                    {expanded ? "Show less" : "Show more"}
                </Button>
            )}
        </>
    );
}
