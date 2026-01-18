import React, {useRef, useEffect} from "react";
import {
    Box,
    Paper,
    Typography,
    TextField,
    IconButton,
    Stack,
    Divider,
    useTheme,
    InputAdornment,
    Collapse,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import {
    SEND_CHAT_MESSAGE,
    SET_CHAT_EXPANDED, SET_CHAT_HAS_SCROLLED_PAGE, SET_CHAT_INPUT
} from "../actions/actionTypes";
import {connect} from "react-redux";
import ReactMarkdown from "react-markdown";

const ChatSection = ({
                         maxWidth = 800,
                         expanded,
                         messages,
                         hasAutoScrolledPage,
                         isLoading,
                         inputValue,
                         setExpanded,
                         setHasAutoScrolledPage,
                         setInputValue,
                         sendChatMessage,
                     }) => {


    const theme = useTheme();


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

        const userMessage = {role: "user", content: text};

        setInputValue("");
        if (!expanded) setExpanded(true);

        sendChatMessage(userMessage, messages)
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

                            {/* <ReactMarkdown
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

                            </ReactMarkdown> */}
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
            <Collapse in={!expanded} unmountOnExit sx={{width: "100%"}}>
                <Paper
                    elevation={3}
                    sx={{
                        width: "100%",
                        maxWidth,
                        borderRadius: 3,
                        p: {xs: 1.2, sm: 1.5},
                        bgcolor:
                            theme.palette.mode === "dark" ? "background.paper" : "#f9fafb",
                        mx: "auto",
                    }}
                >
                    <Typography variant="body2" fontWeight={600} sx={{mb: 0.6}}>
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
                                            sx={{color: "text.secondary"}}
                                        />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <IconButton
                                        type="submit"
                                        color="primary"
                                        disabled={!inputValue.trim() || isLoading}
                                        sx={{ml: 0.5}}
                                    >
                                        <SendIcon fontSize="small"/>
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
            <Collapse in={expanded} unmountOnExit sx={{width: "100%"}}>
                <Paper
                    ref={expandedCardRef}
                    elevation={3}
                    sx={{
                        width: "100%",
                        maxWidth,
                        mx: "auto",
                        maxHeight: "calc(100vh - 120px)",
                        borderRadius: 3,
                        p: {xs: 2, sm: 3},
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
                            <SmartToyIcon fontSize="small"/>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" fontWeight={600}>
                                Ask Rui’s AI assistant
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{fontSize: 12}}
                            >
                                Ask about Rui’s experience, tech stack, projects, or background.
                            </Typography>
                        </Box>
                    </Stack>

                    <Divider sx={{my: 1}}/>

                    <Box
                        ref={messageListRef}
                        sx={{
                            flex: 1,
                            maxHeight: "50vh",
                            overflowY: "auto",
                            pr: 1,
                            pb: 1,
                        }}
                    >
                        <MessageList/>
                    </Box>

                    <Box component="form" onSubmit={handleSubmit} sx={{pt: 0.5}}>
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
                                        sx={{ml: 0.5}}
                                    >
                                        <SendIcon fontSize="small"/>
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

const mapStateToProps = (state) => ({
    expanded: state.chat.expanded,
    messages: state.chat.messages,
    hasAutoScrolledPage: state.chat.hasAutoScrolledPage,
    isLoading: state.chat.isLoading,
    inputValue: state.chat.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
    setExpanded: (expanded) => dispatch({type: SET_CHAT_EXPANDED, payload: expanded}),
    setHasAutoScrolledPage: (value) => dispatch({type: SET_CHAT_HAS_SCROLLED_PAGE, payload: value}),
    setInputValue: (input) => dispatch({type: SET_CHAT_INPUT, payload: input}),
    sendChatMessage: (message, messages) => dispatch({
        type: SEND_CHAT_MESSAGE,
        payload: {message: message, chatHistory: messages}
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatSection);