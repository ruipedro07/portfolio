import * as React from 'react';
import {Box, Button, CircularProgress, TextField} from "@mui/material";
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

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    maxWidth: '500px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                {submitSuccess && (<Alert

                    severity="success"
                    sx={{
                        width: '100%',
                        px: 2,
                        boxSizing: 'border-box',
                    }}
                >
                    Here is a gentle confirmation that your action was successful. <br/>
                    You should receive a confirmation email within a few minutes.
                </Alert>)}

                {formSubmitError && (<Alert
                    severity="error"
                    sx={{
                        width: '100%',
                        px: 2,
                        boxSizing: 'border-box',
                    }}
                >
                    {formSubmitError}
                </Alert>)}

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
                        label={"Name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        required
                    />

                    <TextField
                        label={"Email"}
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                    />

                    <TextField
                        label={"Message"}
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
                        sx={{height: 40}}
                    >
                        {loading ? (
                            <CircularProgress size={24} color="inherit"/>
                        ) : (
                            "Send"
                        )}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
