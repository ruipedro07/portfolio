import * as React from 'react';
import {
    Box,
    Button,
    CircularProgress,
    TextField,
    Typography,
    Link,
    Alert
} from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact({
                                    formSubmitError,
                                    submitSuccess,
                                    name,
                                    email,
                                    message,
                                    setMessage,
                                    setName,
                                    setEmail,
                                    loading,
                                    submitContactForm
                                }) {
    const isDisabled = loading || submitSuccess;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'stretch',
                width: '100%',
                gap: 5,
                py: 4,
                px: { xs: 2, md: 0 }, // respect margins on small screens
            }}
        >
            {/* Left Column: Contact Info */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" fontWeight={300}>
                    Contact Info
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Feel free to reach out via email, phone, or LinkedIn.
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon fontSize="small" />
                    <Link href="mailto:contact@ruiribeiro.dev">
                        contact@ruiribeiro.dev
                    </Link>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinkedInIcon fontSize="small" />
                    <Link
                        href="https://www.linkedin.com/in/ruiribeiro-dev/"
                        target="_blank"
                        rel="noopener"
                    >
                        linkedin.com/in/ruiribeiro-dev
                    </Link>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneIcon fontSize="small" />
                    <Typography variant="body2">
                        +351 915 257 742
                    </Typography>
                </Box>
            </Box>

            {/* Right Column: Contact Form */}
            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box', // include padding in the width
                    p: { xs: 2, sm: 3 },
                    borderRadius: 2,
                    boxShadow: 2,
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <Typography variant="h5" fontWeight={600}>
                    Get in touch
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Send me a message and I’ll get back to you shortly.
                </Typography>

                {submitSuccess && (
                    <Alert
                        severity="success"
                        aria-live="polite"
                        sx={{ mt: 1 }}
                    >
                        Thanks for reaching out!
                        You should receive a confirmation email within a few minutes.
                    </Alert>
                )}

                {formSubmitError && (
                    <Alert
                        severity="error"
                        aria-live="assertive"
                        sx={{ mt: 1 }}
                    >
                        {formSubmitError}
                    </Alert>
                )}

                <Box
                    component="form"
                    onSubmit={submitContactForm}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mt: 1,
                    }}
                >
                    <TextField
                        label="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isDisabled}
                    />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        helperText="I’ll never share your email."
                        required
                        disabled={isDisabled}
                    />

                    <TextField
                        label="Message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        multiline
                        rows={4}
                        required
                        disabled={isDisabled}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isDisabled}
                        sx={{ height: 40 }}
                    >
                        {loading ? (
                            <>
                                <CircularProgress
                                    size={20}
                                    color="inherit"
                                    sx={{ mr: 1 }}
                                />
                                Sending…
                            </>
                        ) : (
                            "Send message"
                        )}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
