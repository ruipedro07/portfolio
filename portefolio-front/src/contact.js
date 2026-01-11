import * as React from 'react';
import { Box, Button, CircularProgress, TextField, Typography, Link } from "@mui/material";
import Alert from "@mui/material/Alert";

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

    console.log("submitSuccess", submitSuccess)
    console.log("formSubmitError", formSubmitError)

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                gap: 4, // space between columns
                flexWrap: 'wrap', // for responsiveness
            }}
        >
            {/* Left Column: Contact Info */}
            <Box
                sx={{
                    flex: 1,
                    minWidth: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end', // aligns items to the right within this column
                    gap: 2,
                }}
            >
                <Typography variant="h5">Contact Info</Typography>
                <Typography>Email: <Link href="mailto:contact@ruiribeiro.dev">contact@ruiribeiro.dev</Link></Typography>
                <Typography>LinkedIn: <Link href="https://www.linkedin.com/in/ruiribeiro-dev/" target="_blank" rel="noopener">linkedin.com/in/ruiribeiro</Link></Typography>
                <Typography>Phone: +351 915 257 742</Typography>
                {/* Add more contact info as needed */}
            </Box>

            {/* Right Column: Contact Form */}
            <Box
                sx={{
                    flex: 1,
                    minWidth: '300px',
                    maxWidth: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                {submitSuccess && (
                    <Alert severity="success" sx={{ width: '100%', px: 2, boxSizing: 'border-box' }}>
                        Here is a gentle confirmation that your action was successful. <br/>
                        You should receive a confirmation email within a few minutes.
                    </Alert>
                )}

                {formSubmitError && (
                    <Alert severity="error" sx={{ width: '100%', px: 2, boxSizing: 'border-box' }}>
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
                    }}
                >
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        required
                    />

                    <TextField
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                    />

                    <TextField
                        label="Message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        multiline
                        rows={4}
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{ height: 40 }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit"/> : "Send"}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
