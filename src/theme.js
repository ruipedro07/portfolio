import {createTheme} from "@mui/material/styles";

const baseTheme = createTheme({
    palette: {
        primary: {main: "#c855ef"},
        secondary: {main: "#d584ef"},
        success: {main: "#28A745"},
        error: {main: "#DC3545"},
        warning: {main: "#FFC107"},
        info: {main: "#17A2B8"},
        background: {
            main: "#F8F9FA",
            paper: "#ffffff"
        },
        text: {
            primary: "#343A40",
        },
    },
});

// Manually merge custom values into the theme
export const theme = {
    ...baseTheme,
    custom: {
        topbar: {
            background: {
                main: "#1f2a40"},
            text: {
                main: "#ffffff"},
            logoColor: {
                main: "#90caf9",
            },
            hoverColor: {
                main: "#c855ef"
            },
            activeColor: {
                main: "#c855ef"
            }
        }
    },
};
