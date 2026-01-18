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
    InputAdornment,
    Collapse,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatSection = ({ maxWidth = 800 }) => {
    const [expanded, setExpanded] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasAutoScrolledPage, setHasAutoScrolledPage] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const messageListRef = useRef(null);
    const expandedCardRef = useRef(null);

    // Scroll the page to the chat only once when it first expands
    useEffect(() => {
        if (expanded && !hasAutoScrolledPage && expandedCardRef.current) {
            expandedCardRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setHasAutoScrolledPage(true);
        }
    }, [expanded, hasAutoScrolledPage]);

    // Keep the message list scrolled to the bottom (inside the card only)
    useEffect(() => {
        if (!expanded) return;
        const wrapper = messageListRef.current;
        if (!wrapper) return;

        requestAnimationFrame(() => {
            wrapper.scrollTop = wrapper.scrollHeight;
        });
    }, [expanded, messages, isLoading]);

    const sendMessage = () => {
        const text = inputValue.trim();
        if (!text || isLoading) return;

        const userMessage = { id: Date.now(), role: "user", content: text };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");

        if (!expanded) setExpanded(true);

        setIsLoading(true);
        setTimeout(() => {
            const assistantMessage = {
                id: Date.now() + 1,
                role: "assistant",
                content:
                    "This is a placeholder answer. Once your RAG backend is connected, this will be an AI-generated response about Rui.",
            };
            setMessages((prev) => [...prev, assistantMessage]);
            setIsLoading(false);
        }, 900);
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        sendMessage();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit(e);
        }
    };

    const MessageList = () => (
        <>
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
        </>
    );

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Collapsed preview */}
            <Collapse in={!expanded} unmountOnExit sx={{ width: "100%" }}>
                <Paper
                    elevation={3}
                    sx={{
                        width: "100%",
                        maxWidth,
                        borderRadius: 3,
                        p: { xs: 1.2, sm: 1.5 },
                        bgcolor:
                            theme.palette.mode === "dark" ? "background.paper" : "#f9fafb",
                        mx: "auto",
                    }}
                >
                    <Typography variant="body2" fontWeight={600} sx={{ mb: 0.6 }}>
                        Ask Rui’s AI assistant
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            autoComplete="off"
                            size="small"
                            placeholder="Ask a quick question about Rui…"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SmartToyIcon
                                            fontSize="small"
                                            sx={{ color: "text.secondary" }}
                                        />
                                    </InputAdornment>
                                ),
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
                                sx: {
                                    borderRadius: 999,
                                    bgcolor:
                                        theme.palette.mode === "dark"
                                            ? "background.default"
                                            : "white",
                                    fontSize: 13,
                                    py: 0.2,
                                },
                            }}
                        />
                    </Box>
                </Paper>
            </Collapse>

            {/* Expanded chat */}
            <Collapse in={expanded} unmountOnExit sx={{ width: "100%" }}>
                <Paper
                    ref={expandedCardRef}
                    elevation={3}
                    sx={{
                        width: "100%",
                        maxWidth,
                        mx: "auto",
                        maxHeight: "calc(100vh - 120px)",
                        borderRadius: 3,
                        p: { xs: 2, sm: 3 },
                        bgcolor:
                            theme.palette.mode === "dark" ? "background.paper" : "#f9fafb",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        overflow: "hidden",
                    }}
                >
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

                    <Divider sx={{ my: 1 }} />

                    <Box
                        ref={messageListRef}
                        sx={{
                            flex: 1,
                            minHeight: isMobile ? 240 : 280,
                            overflowY: "auto",
                            pr: 1,
                            pb: 1,
                        }}
                    >
                        <MessageList />
                    </Box>

                    <Box component="form" onSubmit={handleSubmit} sx={{ pt: 0.5 }}>
                        <TextField
                            fullWidth
                            autoComplete="off"
                            placeholder="Type your question about Rui and press Enter…"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            multiline
                            minRows={1}
                            maxRows={4}
                            variant="outlined"
                            size="small"
                            onKeyDown={handleKeyDown}
                            InputProps={{
                                sx: {
                                    borderRadius: 999,
                                    bgcolor:
                                        theme.palette.mode === "dark"
                                            ? "background.default"
                                            : "white",
                                    alignItems: "center",
                                    px: 1.5,
                                    py: 0.4,
                                    fontSize: 14,
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
                    </Box>
                </Paper>
            </Collapse>
        </Box>
    );
};

export default ChatSection;