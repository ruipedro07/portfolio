import { useState, useRef, useLayoutEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const COLLAPSED_HEIGHT = 120;

export function CollapsibleMarkdown({ content }) {
    const [expanded, setExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        if (contentRef.current) {
            setShowToggle(contentRef.current.scrollHeight > COLLAPSED_HEIGHT);
        }
    }, [content]);

    return (
        <>
            <Box
                component={motion.div}
                ref={contentRef}
                sx={{
                    overflow: "hidden",
                    position: "relative",
                }}
                animate={{ height: expanded ? "auto" : COLLAPSED_HEIGHT }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                <ReactMarkdown
                    components={{
                        p: ({ node, ...props }) => (
                            <Typography variant="body1" {...props} />
                        ),
                        strong: ({ node, ...props }) => (
                            <Typography component="span" variant="body1" fontWeight="bold" {...props} />
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
                    onClick={() => setExpanded((prev) => !prev)}
                    sx={{ mt: 1, px: 0 }}
                >
                    {expanded ? "Show less" : "Show more"}
                </Button>
            )}
        </>
    );
}