import React from 'react';
import { Box, Paper, Typography, CircularProgress } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const DevelopmentInProgress = () => {
    return (
        <Paper
            sx={{
                p: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                backgroundColor: 'background.paper',
            }}
            elevation={2}
        >
            <ConstructionIcon color="warning" fontSize="large" />
            <Box>
                <Typography variant="h6" component="div">
                    Development in progress
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This section is still under construction. Please check back soon!
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <CircularProgress size={24} />
                </Box>
            </Box>
        </Paper>
    );
};

export default DevelopmentInProgress;