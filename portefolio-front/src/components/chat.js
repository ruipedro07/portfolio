import React, { useState, useRef, useEffect } from "react";
import {
    Box,
    Paper,
    Typography,
    TextField,
    IconButton,
    Stack,
    Divider,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatSection = () => {
    const [expanded, setExpanded] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const chatContainerRef = useRef(null);
    const messagesEndRef = useRef(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // Scroll page so the chat panel is fully visible when it expands
    useEffect(() => {
        if (expanded && chatContainerRef.current) {
            chatContainerRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [expanded]);

    // Scroll chat messages to the bottom whenever messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isLoading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = inputValue.trim();
        if (!text) return;

        const userMessage = { id: Date.now(), role: "user", content: text };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");

        if (!expanded) {
            setExpanded(true);
        }

        // Mock assistant reply – replace with real RAG / API call later
        setIsLoading(true);
        setTimeout(() => {
            const assistantMessage = {
                id: Date.now() + 1,
                role: "assistant",
                content:
                    "This is a placeholder answer. Here you’ll see AI‑generated responses about Rui once the backend is connected.",
            };
            setMessages((prev) => [...prev, assistantMessage]);
            setIsLoading(false);
        }, 900);
    };

    const renderMessages = () => (
        <Box
            sx={{
                flexGrow: 1,
                overflowY: "auto",
                pr: 1,
                pb: 1,
            }}
        >
            {messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                    <Box
                        key={msg.id}
                        sx={{
                            display: "flex",
                            justifyContent: isUser ? "flex-end" : "flex-start",
                            mb: 1.5,
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: "85%",
                                px: 1.5,
                                py: 1,
                                borderRadius: 2,
                                bgcolor: isUser
                                    ? "primary.main"
                                    : theme.palette.mode === "dark"
                                        ? "grey.900"
                                        : "grey.100",
                                color: isUser ? "primary.contrastText" : "text.primary",
                                boxShadow: isUser ? 2 : 0,
                                fontSize: 14,
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {msg.content}
                        </Box>
                    </Box>
                );
            })}

            {isLoading && (
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        px: 1.5,
                        py: 1,
                        borderRadius: 2,
                        bgcolor:
                            theme.palette.mode === "dark" ? "grey.900" : "grey.100",
                        fontSize: 14,
                        color: "text.secondary",
                    }}
                >
                    Thinking…
                </Box>
            )}

            <div ref={messagesEndRef} />
        </Box>
    );

    return (
        <Box
            ref={chatContainerRef}
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: "100%",
                    maxWidth: 800,
                    borderRadius: 3,
                    p: { xs: 2, sm: 3 },
                    bgcolor: theme.palette.mode === "dark" ? "background.paper" : "#f9fafb",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {/* Header */}
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box
                        sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            bgcolor: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "primary.contrastText",
                        }}
                    >
                        <SmartToyIcon fontSize="small" />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                            Ask Rui’s AI assistant
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: 12 }}
                        >
                            Ask about Rui’s experience, tech stack, projects, or background.
                        </Typography>
                    </Box>
                </Stack>

                {expanded && (
                    <>
                        <Divider sx={{ my: 1 }} />

                        {/* Messages area */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                minHeight: isMobile ? "45vh" : "30vh",
                                maxHeight: isMobile ? "55vh" : "40vh",
                            }}
                        >
                            {renderMessages()}
                        </Box>
                    </>
                )}

                {/* Input (always visible; looks slimmer before expansion) */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        mt: expanded ? 1 : 0,
                    }}
                >
                    <TextField
                        fullWidth
                        placeholder={
                            expanded
                                ? "Type your question about Rui and press Enter…"
                                : "Ask a question about Rui (experience, skills, etc.)"
                        }
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        multiline
                        maxRows={expanded ? 6 : 3}
                        minRows={expanded ? 2 : 1}
                        variant="outlined"
                        size={expanded ? "medium" : "small"}
                        InputProps={{
                            sx: {
                                borderRadius: 999,
                                bgcolor:
                                    theme.palette.mode === "dark" ? "background.default" : "white",
                                alignItems: "flex-end",
                            },
                            endAdornment: (
                                <IconButton
                                    type="submit"
                                    color="primary"
                                    disabled={!inputValue.trim() || isLoading}
                                    sx={{ ml: 0.5 }}
                                >
                                    <SendIcon fontSize="small" />
                                </IconButton>
                            ),
                        }}
                    />
                    {!expanded && (
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ mt: 0.5, display: "block" }}
                        >
                            Press Enter to send and open the chat.
                        </Typography>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default ChatSection;